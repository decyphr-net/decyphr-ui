<script lang="ts">
  import { get } from 'svelte/store';
  import { MessageCirclePlus, Paperclip, Mic, CornerDownLeft } from 'lucide-svelte';
  import { source } from 'sveltekit-sse';
  import Markdown from '@magidoc/plugin-svelte-marked'
	import { Button } from '@/components/ui/button';
	import { Label } from '@/components/ui/label';
	import { Textarea } from '@/components/ui/textarea';
	import * as Tooltip from '@/components/ui/tooltip';

  import * as Dialog from '@/components/ui/dialog';
  import * as Carousel from '@/components/ui/carousel';
  import * as Card from '@/components/ui/card';

  import { clientInfoStore } from '../store';
	import { onMount } from 'svelte';



  export let data;
  let open = false;

  const clientId = get(clientInfoStore).clientId;
  const bots = data.bots;
  let selectedBot;
  let messages = [];
  let message = '';
  let chats = [];
  let selectedChatId: number;
  let selectedChat;

  const getClass = (role: string): string => {
    const baseClass = 'message ml-8 mb-2 p-4 w-[60%] rounded-xl'
    if (role === 'assistant') {
      return baseClass + ' bg-gray-200'
    }

    return baseClass + ' bg-primary/40 ml-auto'
  }

  const startChat = async () => {
    const messageToPost = {
      clientId: clientId,
      botId: selectedBot.id
    }

    const response = await fetch(
      'http://localhost:8006/api/chats',
      {
        method: 'POST',
        body: JSON.stringify(messageToPost),
        headers: { 'Content-Type': 'application/json' }
      }
    )
    const data = await response.json();
    chats = [ ...chats, data ];
    selectedChatId = data.id;
    selectedChat = data;
  }

  const postMessage = async () => {
    let chatState = selectedChat;
    chatState.messages.push({ role: 'user', content: message });
    selectedChat = chatState;

    const messageToPost = {
      role: 'user',
      content: message,
      chatId: selectedChatId,
      clientId: clientId,
      language: selectedBot.language
    };

    const response = await fetch(
      'http://localhost:8006/openai/chatCompletion',
      {
        method: 'POST',
        body: JSON.stringify(messageToPost),
        headers: { 'Content-Type': 'application/json' }
      }
    )
    const data = await response.json();
    chatState.messages = data;
    selectedChat = chatState;

    message = ''
  }

  const selectBot = (id: number) => {
    selectedBot = bots.filter(obj => obj.id === id)[0];
    open = false
  }

  const getConversation = (id: number) => {
    selectedChat = chats.filter(obj => obj.id === id)[0];
    selectedChatId = id;
  }

  const fetchChats = async() => {
    const response = await fetch('http://localhost:8006/api/chats?clientId' + clientId);
    return await response.json();
  }

  onMount(async () => {
    chats = await fetchChats()
    chats = chats.reverse();
    selectedChat = chats[0]
    selectedChatId = chats[0].id
  })

</script>
<main class="grid flex-1 overflow-auto md:grid-cols-2 lg:grid-cols-3 h-screen">
  <div class="relative hidden flex-col items-start gap-8 md:flex h-[92vh] overflow-y-scroll">
    <div class="grid w-full items-start gap-2 h-100%">
      <Dialog.Root bind:open>
        <Dialog.Trigger on:click={() => open = true} class="h-24 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 whitespace-nowrap border-b p-2 text-sm leading-tight bg-green-200 flex items-center justify-center md:w-[13%]">
          <MessageCirclePlus />
        </Dialog.Trigger>

        <Dialog.Content class="w-full">
          <Dialog.Header>
            <Dialog.Title>Want to start a new chat?</Dialog.Title>
            <Dialog.Description>
              Start a new chat with one of our tailored AI bots.
            </Dialog.Description>
          </Dialog.Header>
          <div class="overflow-y-auto">
            <Carousel.Root class="w-full max-w-xs m-auto">
              <Carousel.Content>
                {#each bots as bot}
                  <Carousel.Item class="w-full">
                    <div>
                      <Card.Root class="border-none shadow-none w-full">
                        <Card.Header class="text-center">
                          <Card.Title>{bot.name} ({bot.age})</Card.Title>
                          <Card.Description>{bot.gender}, {bot.city} ({bot.region})</Card.Description>
                        </Card.Header>
                        <Card.Content
                          class="flex aspect-square items-center justify-center"
                        >
                          <div class="w-full text-sm text-justify">
                            <h3 class="font-bold my-2">Occupation:</h3>
                            <p>{bot.occupation}</p>
                            <h3 class="font-bold my-2">Background:</h3>
                            <p>{bot.background}</p>
                            <h3 class="font-bold my-2">Hobbies:</h3>
                            <p>{bot.hobbies}</p>
                            <h3 class="font-bold my-2">Personal:</h3>
                            <p>{bot.personal}</p>
                          </div>
                        </Card.Content>
                        <Card.Footer>
                          <Button on:click={() => selectBot(bot.id)} class="w-full">Start chat</Button>
                        </Card.Footer>
                      </Card.Root>
                    </div>
                  </Carousel.Item>
                {/each}
              </Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel.Root>
          <Dialog.Footer>

          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
      {#each chats as chat}

      {#if (chat.messages.length >= 1 && chat.messages[1] !== undefined)}
        <button class="h-24 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 whitespace-nowrap border-b p-2 text-sm leading-tight bg-gray-50 justify-center w-[13%]" on:click={() => getConversation(chat.id)}>
          <p class="text-md">{bots.filter((bot) => bot.id === chat.botId)[0].name}</p>
          <p class="truncate">{chat.messages[chat.messages.length - 1].content}</p>
        </button>
      {/if}
    {/each}
  </div>

  </div>
  <div
    class="bg-muted/50 relative flex max-h-[100%] min-h-[50vh] flex-col p-4 lg:col-span-2 xl:col-span-2 container h-[92vh] overflow-y-scroll"
  >
    <div class="messages flex flex-col gap-3 h-[100%] overflow-scroll w-full z-0">
      {#if selectedChat && selectedChat.messages}
        {#each selectedChat.messages as message}
          {#if message.role !== 'system'}
            <div class={getClass(message.role)}>
              <Markdown source={message.content} />
            </div>
          {/if}
        {/each}
      {:else if selectedBot}
        <p>You have selected {selectedBot.name}</p>
        <Button on:click={() => startChat()}>Start the conversation now!</Button>
      {:else}
      <div class="grid h-full grid-cols-1 m-auto content-center">
        <Button>Start new chat!</Button>
      </div>
      {/if}
    </div>
    {#if selectedChat}
      <div
        class="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1 sticky z-20"
        data-x-chunk-name="dashboard-03-chunk-1"
        data-x-chunk-description="A form for sending a message to an AI chatbot. The form has a textarea and buttons to upload files and record audio."
      >
        <Label for="message" class="sr-only">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          bind:value={message}
        />
        <div class="flex items-center p-3 pt-0">
          <Tooltip.Root>
            <Tooltip.Trigger asChild let:builder>
              <Button variant="ghost" size="icon" builders={[builder]}>
                <Paperclip class="size-4" />
                <span class="sr-only">Attach file</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="top">Attach File</Tooltip.Content>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild let:builder>
              <Button variant="ghost" size="icon" builders={[builder]}>
                <Mic class="size-4" />
                <span class="sr-only">Use Microphone</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="top">Use Microphone</Tooltip.Content>
          </Tooltip.Root>
          <Button type="submit" size="sm" class="ml-auto gap-1.5" on:click={(event) => postMessage(event)}>
            Send Message
            <CornerDownLeft class="size-3.5" />
          </Button>
        </div>
      </div>
    {/if}
  </div>

</main>