import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CgArrowsExpandRight } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxDragHandleDots2 } from "react-icons/rx";

export default function Tasks() {
    return (
        <>
            <div className="max-w-md cursor-pointer hover:shadow-blue-400 mx-auto p-4 bg-white shadow-md rounded-lg transform translate-x-2 scale-15 -rotate-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-md flex items-center font-semibold gap-3"><RxDragHandleDots2 /><FaClipboardList className="text-purple-300" />My Tasks</h2>
                    <div className="flex items-center gap-5"><FaPlus /><CgArrowsExpandRight /><BiDotsHorizontalRounded /></div>
                </div>
                <div>
                    <div className="mb-3">
                        <div className="text-sm mb-2 cursor-pointer flex items-center space-x-2 font-medium "><MdExpandLess /><p className="py-1 px-2 rounded-xl w-[130px] bg-green-300">IN PROGRESS </p> <span className="ml-2"> • 1 tasks</span></div>
                        <div className="flex mb-2 justify-between items-center">
                            <p className="text-gray-400 text-sm">Name</p>
                            <span className="text-gray-400 text-sm pl-[240px]">Priority</span>
                            <span className="text-gray-400 text-sm ml-4">DueDate</span>
                        </div>
                        <hr />
                        <div className="mt-2 mb-2">
                            <div className="flex justify-between items-center">
                                <p className="flex text-sm items-center gap-1"><MdExpandMore /><FaSquare className="text-green-300" />One-on-One Meeting</p>
                                <span className="text-sm font-semibold pl-20">High</span>
                                <span className="text-red-500 text-sm font-semibold">Today</span>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-2 mb-2">
                            <div className="flex justify-between items-center">
                                <p className="flex items-center text-sm gap-1"><MdExpandMore /><FaSquare className="text-green-300" />Send a summary email to stakeholders</p>
                                <span className="text-sm text-gray-700 bg-gray-100 rounded-md p-1 font-semibold">Low</span>
                                <span className="text-sm text-gray-700 font-semibold">3 days left</span>
                            </div>
                        </div>
                        <hr />
                        <button className="mt-3 py-2 px-4 hover:bg-blue-300 rounded-full text-black">
                            +Add Task
                        </button>
                    </div>
                    <div className="mb-3 cursor-pointer">
                        <div className="text-sm flex items-center space-x-3 font-medium "><MdExpandMore /><p className="py-1 px-2 rounded-xl w-[70px] bg-gray-100">TO DO </p> <span className="ml-2"> • 1 tasks</span></div>
                    </div>
                    <div className="mb-3 cursor-pointer">
                        <div className="text-sm flex items-center space-x-3 font-medium "><MdExpandMore /><p className="py-1 px-2 rounded-xl w-[120px] bg-orange-200">UPCOMING </p> <span className="ml-2"> • 1 tasks</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
