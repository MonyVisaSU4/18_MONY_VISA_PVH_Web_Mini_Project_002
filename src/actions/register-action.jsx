"use server"

import Register from "../../service/register-service";

export default async function RegisterAction(formData){
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    await Register({username, email, password});
}