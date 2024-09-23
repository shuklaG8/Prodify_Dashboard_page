import { FaPlus } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="max-w-lg w-[450px] h-[200px] cursor-pointer relative top-0 bottom-0 left-32 hover:shadow-blue-400 mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-4">
        <h3 className="flex items-center gap-3 ml-4">
          <FaBriefcase className="text-purple-300" />Projects</h3>
        <p className="flex items-center text-gray-300">Recents <MdExpandMore /></p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-2">
        <div className="p-4 rounded-lg flex justify-between items-center cursor-pointer">
          <p className="text-sm flex items-center gap-1 font-semibold rounded-md hover:p-2 hover:shadow-md hover:bg-blue-100">
            <FaPlus className="border border-dotted rounded-md p-2 border-blue-300 text-blue-300 w-6 h-6" />Create new project</p>
          <div className="text-sm font-semibold flex gap-1 rounded-md hover:p-2 hover:shadow-md hover:bg-blue-100 items-center">
            <PiStarFourFill className="border rounded-md p-1 bg-purple-300 text-purple-700 w-8 h-8" />
            <div>
              <p className="text-sm font-semibold">Product launch</p>
              <p className="text-xs text-gray-500">6 tasks • 12 teammates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-1">
        <div className="p-4 rounded-lg flex justify-between items-center cursor-pointer">
          <div className="text-sm font-semibold flex gap-1 rounded-md hover:p-2 hover:shadow-md hover:bg-blue-100 items-center">
            <PiStarFourFill className="border rounded-md p-1 w-8 h-8 bg-blue-300 text-blue-700" />
            <div>
              <p className="text-sm font-semibold">Team brainstorm</p>
              <p className="text-xs text-gray-500">2 tasks • 32 teammates</p>
            </div>
          </div>
          <div className="text-sm font-semibold flex gap-1 rounded-md hover:p-2 hover:shadow-md hover:bg-blue-100 items-center">
            <PiStarFourFill className="border rounded-md p-1 w-8 h-8 bg-green-300 text-green-700" />
            <div>
              <p className="text-sm font-semibold">Branding Launch</p>
              <p className="text-xs text-gray-500">4 tasks • 9 teammates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



