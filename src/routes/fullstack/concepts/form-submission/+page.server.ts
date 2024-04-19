import type { Actions } from "./$types";

export const actions: Actions = {
    defualt: async ({ request }) => {
        let form = await request.formData();
        console.log(form)  // Form Data 
    }
};