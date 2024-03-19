
import React from 'react';

const Sidebar = () => {
    return (
        <div className="fixed h-screen top-0 left-0">
            {/* Sidebar */}
            <div className="w-58 bg-white h-screen border-r border-gray-200">
                <div className="p-0">
                    {/* <a href="#" className="text-xl font-semibold text-gray-800">Logo</a> */}
                </div>
                <nav className="mt-16 pr-6">
                    <a href="#" className="flex block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 transition duration-300 font-bold font-serif">Home</a>
                    <a href="#" className="flex block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 transition duration-300 font-bold font-serif">Dashboard</a>
                    <a href="#" className="flex block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 transition duration-300 font-bold font-serif">Profile</a>
                </nav>
            </div>
           
        </div>
    );
}

export default Sidebar;
 