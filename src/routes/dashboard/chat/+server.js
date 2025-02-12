// import { produce } from 'sveltekit-sse';
// import { Kafka } from 'kafkajs';

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['kafka:9092']
// })

// const consumer = kafka.consumer({ groupId: 'test-group' })

// export async function POST() {
//   await consumer.connect();
//   await consumer.subscribe({ topic: 'test-topic', fromBeginning: true});
//   return produce(
//     async function start({ emit }) {
//       await consumer.run({
//         eachMessage: async ({ message }) => {
//           emit('message', message.value?.toString())
//         }
//       })
//     }
//   )
// }