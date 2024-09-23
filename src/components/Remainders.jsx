/* eslint-disable react/prop-types */
import { MdExpandLess } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import { BiAlarm, BiTrash } from 'react-icons/bi';
import { FaCheckCircle } from "react-icons/fa";

const reminders = [
  { id: 1, text: "Assess any new risks identified in the morning meeting." },
  { id: 2, text: "Outline key points for tomorrow’s stand-up meeting." }
];

function ReminderItem({ reminder }) {
  return (
    <div className="flex justify-between items-center bg-white p-2 shadow-sm rounded-lg my-2">
      <p className="text-sm text-gray-700">{reminder.text}</p>
      <div className="flex items-center">
        <button className="text-blue-500 p-2 rounded-full hover:bg-blue-100">
          <LuBellRing />
        </button>
        <button className="text-red-500 p-2 rounded-full hover:bg-red-100">
          <BiTrash />
        </button>
        <button className="text-green-300 p-2 rounded-full hover:bg-blue-100">
          <FaCheckCircle />
        </button>
      </div>
    </div>
  );
}

export default function Remainders() {
  return (
    <div className="max-w-lg w-[500px] h-[190px] cursor-pointer mt-16 relative top-0 bottom-0 right-8 hover:shadow-blue-400 mx-auto p-4 bg-white shadow-md rounded-lg ">
      <h2 className="text-sm font-semibold mb-2 flex items-center gap-2">
        <BiAlarm />
        Reminders
      </h2>
      <span className="text-sm flex items-center gap-4 py-1 px-2 rounded-full"><MdExpandLess/>Today • 2</span>
      {reminders.map(reminder => (
        <ReminderItem key={reminder.id} reminder={reminder} />
      ))}
    </div>
  );
}
