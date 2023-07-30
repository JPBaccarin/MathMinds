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
                className={`fixed top-4 left-4 bg-white dark:bg-gray-500 border-2 border-white/20 rounded-full p-2 z-50 ${isOpen ? 'hidden' : 'block'
                    }`}
            >
                <FaBars color='white' size={18} />
            </button>
            <button
                onClick={toggleSidebar}
                className={`fixed top-4 left-4 bg-white  dark:bg-gray-500 border-2 border-white/20 rounded-full p-2 z-50 ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <AiOutlineClose color='white' size={18} />
            </button>
            {isOpen && (
                <div
                    className={`fixed top-0 left-0 w-60 pb-5 bg-white dark:bg-gray-700 bg-opacity-90 backdrop-blur-md z-40 rounded-br-lg shadow-lg ${isOpen ? 'block' : 'hidden'
                        } text-black dark:text-white`}
                >
                    <div className="flex flex-col items-center h-full">
                        <div className="mt-14 mb-5">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Foto do Usuário"
                                className="w-16 h-16 rounded-full mt-2"
                            />
                            <h1 className="text-xl font-semibold mt-2">Usuário</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="/learning" className="mb-2 w-full text-center border-y-2 border-red-500 py-2">
                                <FaRegLightbulb className="inline-block mr-2" />
                                Learning
                            </a>
                            <a href="/" className="mb-2 w-full text-center border-y-2 border-red-500 py-2">
                                <FaClipboardList className="inline-block mr-2" />
                                Quiz
                            </a>
                            <a href="/essay" className="mb-2   w-full text-center border-y-2 border-red-500 py-2">
                                <FaPen className="inline-block mr-2" />
                                Essay
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
