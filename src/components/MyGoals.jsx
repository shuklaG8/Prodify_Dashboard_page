import { LuGoal } from "react-icons/lu";

export default function MyGoals() {

  return (
    <div className="max-w-lg w-[450px] h-[280px] cursor-pointer relative top-4 bottom-0 left-4 hover:shadow-blue-400 mx-auto p-4 bg-white shadow-md rounded-lg">
       <div className="flex items-center gap-4">
        <h3 className="flex items-center font-serif font-semibold gap-3 ml-4">
          <LuGoal className="text-purple-300" />My Goals</h3>
      </div>

      <div className="w-full max-w-md -mb-3 mx-auto p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold">Check Emails and Messages</h3>
          <p className="text-sm text-gray-400">
            Product launch &bull; My Projects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-20 h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-teal-400 rounded-full"
              style={{ width: "73%" }}
            ></div>
          </div>
          <p className="text-sm font-semibold">73%</p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-md -mb-3 mx-auto p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold">Prepare a brief status update to the client</h3>
          <p className="text-sm text-gray-400">
            Product launch &bull; My Projects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-20 h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-orange-400 rounded-full"
              style={{ width: "11%" }}
            ></div>
          </div>
          <p className="text-sm font-semibold">11%</p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-md -mb-3 mx-auto p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold">Update project documentation</h3>
          <p className="text-sm text-gray-400">
            Team brainstorm &bull; My Projects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-20 h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-teal-400 rounded-full"
              style={{ width: "63%" }}
            ></div>
          </div>
          <p className="text-sm font-semibold">63%</p>
        </div>
      </div>
    </div>
    </div>
  )
}
