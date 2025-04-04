import { GetWorkSpaceAction } from "@/actions/workspace-action";

export async function AddTask({taskTitle, taskDetails, tag, endDate}){
    const session = await auth()
    const getWorkspaceId = await GetWorkSpaceAction();
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${getWorkspaceId.payload.workspaceId}`,{
        method: "POST",
        headers: {
            "Authorization": `Bearer ${session?.payload.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            taskTitle: taskTitle,
            taskDetails: taskDetails,
            tag: tag,
            endDate: endDate
        }),
    });
    const data = await res.json();
    console.log("Data in AddTask: ", data)
    return data;
}