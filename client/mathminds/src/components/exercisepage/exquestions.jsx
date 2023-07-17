import React from 'react';

const ExerciseQuestion = ({ question, exerciseNumber }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        Questão {exerciseNumber}
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-300">{question}</p>
    </>
  );
};

export default ExerciseQuestion;
