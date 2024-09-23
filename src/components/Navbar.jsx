import MainContent from "./MainContent";

export default function Navbar() {

    return (
        <>
        <div className="w-full m-3 font-serif mt-4 h-[100px]">
            <p className="px-4 py-1 font-semibold">Mon, July 7</p>
            <div className="bg-white p-4">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Hello, Courtney</h1>
                        <div className="flex items-center">
                            <p className="font-semibold text-2xl text-gradient bg-gradient-to-r from-green-300 via-blue-200 to-blue-500 bg-clip-text text-transparent">How can I help you today?</p>
                            <div className="space-x-2 ml-4">
                                <button className="bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-200 text-white px-4 py-2 rounded-full">✦Ask AI</button>
                                <button className="hover:bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-200 hover:text-white px-4 py-2 rounded-full border border-purple-400">Get tasks updates</button>
                                <button className="hover:bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-200 hover:text-white px-4 py-2 rounded-full border border-purple-400">Create workspace</button>
                                <button className="hover:bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-200 hover:text-white px-4 py-2 rounded-full border border-purple-400">Connect apps</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainContent/>
        </div>
        </>
    )
}