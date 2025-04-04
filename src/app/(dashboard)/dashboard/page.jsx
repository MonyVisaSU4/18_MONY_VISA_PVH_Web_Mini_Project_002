import { Bell, Star, LogOut, MoreVertical, Plus, Clock, ChevronDown } from 'lucide-react';
// import { GetWorkSpaceAction } from '@/actions/workspace-action';
import { UserList } from '../../../../service/login-service';
import Link from 'next/link';
import { GetWorkSpaceAction } from '@/actions/workspace-action';
// import WorkspaceShip from '@/app/(dashboard)/workSpaceList';

const PlanItDashboard = async () => {
  const getUser = await UserList();
  const getWorkspace = await GetWorkSpaceAction();
  return <>
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-500">Workspace</h2>
              <Link href={`./form`} className="text-gray-400 hover:text-gray-600">
                <Plus size={18} />
              </Link>
            </div>
            
            <ul className="space-y-2">
            {getWorkspace?.payload.map((workSpace)=>(
                // <WorkspaceShip key={workSpace.workspaceId} id={workSpace.workspaceId} name={workSpace.workspaceName} />
                <li key={workSpace.workspaceId}>
                  <button 
                    className="w-full 
                               flex items-center 
                               justify-between 
                               cursor-pointer 
                               hover:bg-gray-100 
                               hover:text-blue-500"
                    // onClick={handleId(workSpace.workspaceId)}           
                  >
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                        <span className="text-sm font-medium text-black-500">{workSpace.workspaceName}</span>
                      </div>
                      <MoreVertical size={16} className="text-gray-400 rotate-90" />
                  </button>
                </li>
              ))}
              
            </ul>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-500">Favorite</h2>
              <div className="text-gray-400">
                <Star size={18} className="text-gray-400" />
              </div>
            </div>
            
            <ul className="space-y-2">
              {getWorkspace?.payload
                .filter((workSpace) => workSpace.isFavorite)
                .map((workSpace)=>(
                  <li key={workSpace.workspaceId}>
                    <div 
                      className="w-full 
                                flex items-center 
                                justify-between 
                                cursor-pointer 
                                hover:bg-gray-100 
                                hover:text-blue-500"
                    >
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                          <span className="text-sm font-medium text-black-500">{workSpace.workspaceName}</span>
                        </div>
                        <MoreVertical size={16} className="text-gray-400 rotate-90" />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        
        <button className="flex items-center text-sm text-teal-500 mt-4">
          <LogOut size={16} className="mr-2" />
          <span>Logout</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Workspace</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sm text-blue-500">HRD Design</span>
          </div>
          
          <div className="flex items-center">
            <button className="mr-4">
              <Bell size={20} className="text-gray-400" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2"></div>
              <div>
                <div className="text-xs font-medium">{getUser.payload.username}</div>
                <div className="text-xs text-gray-400">{getUser.payload.email}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Header */}
        <div className="px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-medium">HRD Design</h2>
          <Link href={`/`}>
            <Star size={20} className="text-gray-400 hover:text-gray-600" />
          </Link>
        </div>
        
        {/* Tasks Section */}
        <div className="px-8 pb-8">
          {/* Tasks Table */}
          <div className="rounded-lg">
            <table className="min-w-full ">
              {/* Table Header */}
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-red-500 decoration-4 border-b-2"
                  >
                    Not Started
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-500 decoration-4 border-b-2"
                  >
                    In Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-green-500 decoration-4 border-b-2"
                  >
                    Finished
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="">
                <tr>
                  {/* Not Started Column */}
                  <td className="px-6 py-4">
                    <div className="bg-white rounded-lg shadow p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-800">Slack Integration</h3>
                        <button className="text-gray-400">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        Add a field in the portal to let the user connect their Slack
                        account.
                      </p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
                          Development
                        </span>
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="border-red-500 border text-xs text-red-400 px-3 py-1 rounded flex items-center">
                          <span>Not Started</span>
                          <ChevronDown size={14} className="ml-1" />
                        </button>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock size={14} className="mr-1" />
                          <span>Tomorrow</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* In Progress Column */}
                  <td className="px-6 py-4">
                    <div className="bg-white rounded-lg shadow p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-800">
                          ReactJS Homework 003
                        </h3>
                        <button className="text-gray-400">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        Add a field in the portal to let the user connect their Slack
                        account.
                      </p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
                          Web Homework
                        </span>
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="border-blue-500 border text-xs text-blue-500 px-3 py-1 rounded flex items-center">
                          <span>In Progress</span>
                          <ChevronDown size={14} className="ml-1" />
                        </button>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock size={14} className="mr-1" />
                          <span>Mar 24, 2025</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Finished Column */}
                  <td className="px-6 py-4">
                    <div className="bg-white rounded-lg shadow p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-800">Data Fetching</h3>
                        <button className="text-gray-400">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        Add a field in the portal to let the user connect their Slack
                        account.
                      </p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">
                          Web Homework
                        </span>
                        <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button className="border-green-500 border text-xs text-teal-500 px-3 py-1 rounded flex items-center">
                          <span>Finished</span>
                          <ChevronDown size={14} className="ml-1" />
                        </button>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock size={14} className="mr-1" />
                          <span>Mar 23, 2025</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 flex items-center">
        <Link  href={`/`} className="bg-blue-500 text-white rounded-full px-4 py-2 flex items-center shadow-lg mr-2 hover:bg-white hover:text-blue-500">
          <Plus size={16} className="mr-1" />
          <span className="text-sm">New Task</span>
        </Link>
        <button className="bg-white text-gray-500 p-2 rounded shadow-lg">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  </>;
};

export default PlanItDashboard;