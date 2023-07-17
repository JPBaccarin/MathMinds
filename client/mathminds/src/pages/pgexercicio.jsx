import React, { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const ExercisePage = () => {
    const [currentExercise, setCurrentExercise] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

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
        const currentExerciseObj = exercises[currentExercise];
        if (selectedOption === currentExerciseObj.correctAnswer) {
            setCorrectCount(correctCount + 1);
        }

        if (currentExercise + 1 < exercises.length) {
            setCurrentExercise(currentExercise + 1);
            setSelectedOption('');
        } else {
            setQuizCompleted(true);
        }
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const renderQuestionList = () => {
        return exercises.map((exercise) => {
          const isCorrect = exercise.correctAnswer === selectedOption;
          const icon = isCorrect ? (
            <FiCheck className="text-green-500 mr-2" />
          ) : (
            <FiX className="text-red-500 mr-2" />
          );
          const selectedOptionText = selectedOption ? (
            <p className={`text-sm ${isCorrect ? 'text-green-500' : 'text-red-500'} `}>
              <strong>Resposta escolhida:</strong> <span >{selectedOption}</span>
            </p>
          ) : null;
      
          return (
            <div key={exercise.id} className="mb-4">
              <div className="flex items-center">
                {icon}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exercise.question}
                </h3>
              </div>
              {selectedOptionText}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Resposta correta:</strong> {exercise.correctAnswer}
              </p>
              <hr className="my-2" />
            </div>
          );
        });
      };
      

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-300 dark:bg-gray-900">
            <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-md shadow-2xl">
                {!quizCompleted ? (
                    <>
                        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
                            Quiz de Matemática
                        </h1>
                        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                            Questão {currentExercise + 1}
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {exercises[currentExercise].question}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {exercises[currentExercise].options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-center border dark:border-white/10 border-black/10 rounded-md p-2 transition duration-300 ${selectedOption === option
                                        ? 'bg-blue-500 dark:border-white/20 border-black/20 text-white'
                                        : 'bg-white text-gray-900 dark:text-white dark:bg-gray-700'
                                        }`}
                                    onClick={() => handleOptionChange(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        {selectedOption && (
                            <button
                                onClick={handleNextExercise}
                                className="block w-full bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform-gpu hover:scale-105 focus:scale-105 mt-4"
                            >
                                Próxima Questão
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
                            Quiz Finalizado!
                        </h1>
                        <p className="text-gray-900 dark:text-white">
                            Você acertou {correctCount} de {exercises.length} questões.
                        </p>
                        <h2 className="text-lg font-semibold mt-4 mb-2 dark:text-white">
                            Lista de Questões:
                        </h2>
                        {renderQuestionList()}
                    </>
                )}
            </div>
        </div>
    );
};

export default ExercisePage;
