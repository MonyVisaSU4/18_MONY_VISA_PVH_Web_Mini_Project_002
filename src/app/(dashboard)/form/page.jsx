import { GetWorkSpaceAction, PostWorkSpaceAction } from "@/actions/workspace-action";
import Link from 'next/link';

const PopupForm = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-80">
          <h2 className="text-lg font-medium mb-4">Enter Workspace Name</h2>
          <form action={PostWorkSpaceAction}>
            <div className="mb-4">
              <label
                htmlFor="workspaceName"
                className="block text-sm font-medium text-gray-700"
              >
                Workspace Name
              </label>
              <input
                type="text"
                name="workspaceName"
                id="workspaceName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Workspace Name"
                required
              />
            </div>
            <div className="flex justify-end">
              {/* Cancel Button */}
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
              >
                <Link href={`/dashboard`}>
                  Cancel
                </Link>
              </button>
              {/* Submit Button */}
              <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    <Link href={`/dashboard`}>
                        Submit
                    </Link>
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default PopupForm;