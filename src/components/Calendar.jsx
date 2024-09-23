import { FaCalendarAlt } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Remainders from "./Remainders";

const days = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const dates = ['04', '05', '06', '07', '08', '09', '10'];

export default function Calendar() {
  return (
    <div className="max-w-lg w-[450px] h-[300px] cursor-pointer relative -top-32 bottom-0 left-32 hover:shadow-blue-400 mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-4">
        <h3 className="flex items-center font-semibold gap-3 ml-4">
          <FaCalendarAlt className="text-purple-300" />Calendar</h3>
        <p className="flex items-center">July <MdExpandMore className="ml-2" /></p>
      </div>
      <div className="flex items-center gap-6">
      <FaAngleLeft className="text-gray-500"/>
      <div className="grid grid-cols-7 gap-4">
        {days.map(day => (
          <div key={day} className="text-center mt-3 text-sm uppercase text-gray-500">{day}</div>
        ))}
        {dates.map(date => (
          <div key={date} className={`text-center p-1 rounded-full ${date === '07' ? 'bg-blue-400 text-white' : 'text-gray-800'}`}>
            {date}
          </div>
        ))}
      </div>
      <FaAngleRight className="text-gray-500"/>
      </div>
      <div className="mt-4 bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold">Meeting with VP</h3>
        <HiOutlineDotsHorizontal/>
        </div>
        <p className="text-sm text-gray-600">Today • 10:00 - 11:00 am</p>
        <button className="mt-2 px-4 py-2 flex items-center rounded-full bg-white shadow-md">
          <SiGooglemeet style={{ color: '#34a853' }}/><p className="ml-3">Google Meet</p>
        </button>
      </div>
      <Remainders/>
    </div>
  )
}
