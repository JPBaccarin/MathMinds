import React, { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const ExercisePage = () => {
    const [currentExercise, setCurrentExercise] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [progress, setProgress] = useState(0);

    const exercises = [
        {
            id: 1,
            question: 'Qual é o resultado de 2 + 2?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '4',
        },
        {
            id: 2,
            question: 'Qual é o resultado de 5 - 3?',
            options: ['2', '3', '4', '5'],
            correctAnswer: '2',
        },
        // Adicione mais exercícios aqui
    ];

    const handleNextExercise = () => {
        setSelectedOption('');
        setShowFeedback(false);
        setCurrentExercise(currentExercise + 1);
        setProgress((currentExercise / exercises.length) * 100);
    };

    const handleCheckAnswer = () => {
        setShowFeedback(true);
        const currentExerciseObj = exercises.find(exercise => exercise.id === currentExercise);
        if (selectedOption === currentExerciseObj.correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-300 dark:bg-gray-900">
            <div className="max-w-md w-full mx-auto p-8 bg-stone-100 dark:bg-gray-800 rounded-md shadow-2xl">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
                    Exercício {currentExercise}
                </h1>
                {currentExercise <= exercises.length ? (
                    <>
                        <p className="text-gray-900 dark:text-white">{exercises[currentExercise - 1].question}</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {exercises[currentExercise - 1].options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-center border rounded-md p-2 transition duration-300 ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 dark:text-white dark:bg-gray-700'
                                        }`}
                                    onClick={() => handleOptionChange(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleCheckAnswer}
                            className="block w-full bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform-gpu hover:scale-105 focus:scale-105 mt-4"
                        >
                            Verificar Resposta
                        </button>
                        {showFeedback && (
                            <div className="mt-4">
                                {isCorrect ? (
                                    <div className="flex items-center text-green-500">
                                        <FiCheck className="mr-2" />
                                        <span>Resposta correta!</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center text-red-500">
                                        <FiX className="mr-2" />
                                        <span>Resposta incorreta!</span>
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="flex items-center justify-between mt-4">
                            <div className="text-gray-700 dark:text-gray-300">{currentExercise}/{exercises.length}</div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <button
                            onClick={handleNextExercise}
                            className={`block w-full bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform-gpu hover:scale-105 focus:scale-105 mt-4 ${!showFeedback ? 'pointer-events-none opacity-50' : ''
                                }`}
                            disabled={!showFeedback}
                        >
                            Próximo Exercício
                        </button>
                    </>
                ) : (
                    <p className="text-gray-900 dark:text-white">Parabéns, você concluiu todos os exercícios!</p>
                )}
            </div>
        </div>
    );
};

export default ExercisePage;
