import React from 'react';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const ProgressCard = ({ totalPoints, studyStreak }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-lg dark:bg-gray-700   " >
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Seus Progressos</h2>
            <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <FiAward size={20} className="text-white" />
                </div>
                <div>
                    <p className="text-sm text-gray-900 dark:text-white">Pontuação Total</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{totalPoints}</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <FiBookOpen size={20} className="text-white" />
                </div>
                <div>
                    <p className="text-sm text-gray-900 dark:text-white">Série Atual</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{studyStreak}</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;
