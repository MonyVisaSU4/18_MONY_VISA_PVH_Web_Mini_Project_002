"use server"

import { AddWorkSpaceService, GetWorkSpaceService } from "../../service/workspace-service";

export const PostWorkSpaceAction = async (formData) => {
    const workspaceName = formData.get("workspaceName");
    console.log("WorkSpace Name: ", workspaceName)
    return await AddWorkSpaceService({workspaceName});
}

export const GetWorkSpaceAction = async () => {
    return await GetWorkSpaceService();
}