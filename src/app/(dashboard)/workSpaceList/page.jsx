// const WorkspaceShip = async ({props}) => {
//     // const getWorkspace = await GetWorkSpaceAction();
//     // const handleId = (e) => {
//     //     props(e.target.value);
//     // }
//     return<>
//         {getWorkspace?.payload.map((workSpace)=>(
//                 <li key={workSpace.workspaceId}>
//                   <button 
//                     className="w-full 
//                                flex items-center 
//                                justify-between 
//                                cursor-pointer 
//                                hover:bg-gray-100 
//                                hover:text-blue-500"
//                     // onClick={handleId(workSpace.workspaceId)}           
//                   >
//                       <div className="flex items-center">
//                         <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
//                         <span className="text-sm font-medium text-black-500">{workSpace.workspaceName}</span>
//                       </div>
//                       <MoreVertical size={16} className="text-gray-400 rotate-90" />
//                   </button>
//                 </li>
//         ))}
//     </>
// }