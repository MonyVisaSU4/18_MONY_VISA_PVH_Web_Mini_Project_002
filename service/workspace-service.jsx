import { auth } from '@/auth';

export async function AddWorkSpaceService({workspaceName}){
    const session = await auth()
    const res = await fetch('http://96.9.81.187:8080/api/v1/workspace',{
        method: "POST",
        headers: {
            "Authorization": `Bearer ${session?.payload.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            workspaceName: workspaceName,
        }),
    });
    const data = await res.json();
    console.log("Data in AddWorkSpaceService: ", data)
    return data;
}

export async function GetWorkSpaceService(){
    const session = await auth()
    const res = await fetch('http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=5&sortBy=workspaceId&sortDirection=ASC',{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session?.payload.token}`,
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log("Data in GetWorkSpaceService: ", data)
    return data;
}