import { auth } from "@/auth";

export async function LoginService({email, password}){
    const res = await fetch('http://96.9.81.187:8080/api/v1/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });

    const data = await res.json();
    return data;
}

export async function UserList(){
    const session = await auth();
    const res = await fetch('http://96.9.81.187:8080/api/v1/user', {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session?.payload.token}`,
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    return data;
}