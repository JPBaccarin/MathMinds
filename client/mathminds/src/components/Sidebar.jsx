import React, { useState } from 'react';
import { FaBars, FaRegLightbulb, FaClipboardList, FaPen } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleSidebar}
                className={`fixed top-4 left-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full p-2 z-40 ${isOpen ? 'hidden' : 'block'
                    }`}
            >
                <FaBars className='dark:fill-white' size={18} />
            </button>
            <div
                className={`fixed top-0 left-0 h-screen w-52 dark:text-white bg-white dark:bg-gray-800 shadow-lg transform transition-transform z-50 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full p-2"
                >
                    <AiOutlineClose className='dark:fill-white' size={18} />
                </button>
                <div className="flex flex-col items-center h-full mt-4 py-8">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Foto do Usuário"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h1 className="text-lg font-semibold">Usuário</h1>
                    <div className="flex flex-col mt-4">
                        <a href="/learning" className="mb-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            <FaRegLightbulb className="inline-block mr-2 fill-red-500" />
                            Learning
                        </a>
                        <a href="/" className="mb-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            <FaClipboardList className="inline-block mr-2 fill-red-500" />
                            Quiz
                        </a>
                        <a href="/essay" className="mb-2 py-2 px-4  hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            <FaPen className="inline-block mr-2 fill-red-500" />
                            Essay
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
