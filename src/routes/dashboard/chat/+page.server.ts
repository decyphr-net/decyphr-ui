import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ fetch }) => {
  const req = await fetch('http://localhost:8007/bots');
  const data = await req.json();
  return {
    bots: data,
  }
};

// export const actions: Actions = {
//   default: async (event) => {
//     const form = await superValidate(event, zod(formSchema));
//     if (!form.valid) {
//       return fail(400, {form,});
//     }

//     await fetch("http://localhost:8006/openai/chatCompletion", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form.data)
//     })

//     return { form };
//   },
// };
