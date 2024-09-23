import logo from '../assets/logo.jpeg'
import { CiHome } from "react-icons/ci";
import { PiStarFourFill } from "react-icons/pi";
import { LuInbox } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaSquare } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";


const Sidebar = () => {

    const sidebarIcon = [
        {
            name: "Home",
            icon: <CiHome />
        },
        {
            name: "Prodify AI",
            icon: <PiStarFourFill />
        },
        {
            name: "My tasks",
            icon: <BiTask />
        },
        {
            name: "Inbox",
            icon: <LuInbox />
        },
        {
            name: "Calendar",
            icon: <MdOutlineCalendarMonth />
        },
        {
            name: "Reports & Analytics",
            icon: <TbBrandGoogleAnalytics />
        }
    ]

    return (
        <div className="w-1/4 h-[100%] cursor-pointer  shadow-lg ">
            <div className="px-4 py-1  border mt-3 rounded-xl border-gray-200">
                <div className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <div className="font-semibold flex items-center gap-6">Courtney Henry<MdExpandMore/></div>
                        <div className="text-sm text-gray-600">Online</div>
                    </div>
                </div>
            </div>
            <ul className="flex flex-col p-6">
                {sidebarIcon.map((item) => {
                    return (
                        <div key={item} className="flex mt-3 items-center space-x-5 hover:text-blue-400 hover:bg-gray-300 rounded-xl duration-300 p-1">
                            <div className="text-xl cursor-pointer" >{item.icon}</div>
                            <span className="cursor-pointer">{item.name}</span>
                        </div>
                    )
                })}
            </ul>
            <div className="p-6 border-t border-gray-200">
                <div className='flex justify-between px-2 py-4'>
                    <div className="font-semibold cursor-pointer py-2">My Projects</div>
                    <button className='font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-300 px-3 py-1'>+Add</button>
                </div>
                <div className="flex mt-3 items-center">
                    <ul className=''>
                        <li className="px-3 py-2 flex items-center gap-6 space-x-5 duration-300  hover:bg-gray-300 rounded-xl cursor-pointer"><FaSquare className='text-fuchsia-900'/>Product launch</li>
                        <li className="px-3 py-2 flex items-center gap-6 space-x-5 duration-300  hover:bg-gray-300 rounded-xl cursor-pointer"><FaSquare className='text-indigo-800'/>Team brainstorm</li>
                        <li className="px-3 py-2 flex items-center gap-6 space-x-5 duration-300  hover:bg-gray-300 rounded-xl cursor-pointer"><FaSquare className='text-cyan-800'/>Branding launch</li>
                    </ul>
                </div>
            </div>
            <div className='flex  items-center cursor-pointer p-1'>
                    <div className="px-2 py-2 flex items-center font-serif font-semibold space-x-5 hover:bg-gray-300  duration-300 rounded-xl"><IoSettingsOutline className='mx-6' />Settings</div>
                </div>
            <div className="p-6">
                <div className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200 text-white w-[200px] h-[200px] rounded-xl">
                    <div className="font-bold text-xl font-serif pt-4 pl-4 flex items-center"><PiStarFourFill className='mx-2 w-3' />prodify</div>
                    <p className='ml-5 my-4 text-sm font-serif'>New members will gain access to public Spaces, <br /> Docs and Dashboards</p>
                    <button className="flex items-center gap-1 mt-3 ml-6 px-3 py-1 font-serif font-semibold text-black rounded-full bg-white"><FaPlus className='w-[10px]'/>Invite people</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
