import React, { useState } from 'react';
import ExerciseOptions from '../components/exercisepage/exoptions';
import ExerciseQuestion from '../components/exercisepage/exquestions';
import ExerciseResult from '../components/exercisepage/exresult';


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

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-300 dark:bg-gray-900">
      <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-md shadow-2xl">
        {!quizCompleted ? (
          <>
            <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
              Quiz de Matemática
            </h1>
            <ExerciseQuestion
              question={exercises[currentExercise].question}
              exerciseNumber={currentExercise + 1}
            />
            <ExerciseOptions
              options={exercises[currentExercise].options}
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
            />
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
          <ExerciseResult correctCount={correctCount} totalQuestions={exercises.length} exercises={exercises} selectedOption={selectedOption} />
        )}
      </div>
    </div>
  );
};

export default ExercisePage;
