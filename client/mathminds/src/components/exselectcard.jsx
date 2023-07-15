import React from 'react';

const ExerciseSelectionCard = ({
  exerciseType,
  exerciseDifficulty,
  exerciseQuestionCount,
  handleExerciseSelection,
}) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg dark:bg-gray-700">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Configuração do Quiz</h2>
      <div className="mb-4">
        <label className="block text-gray-900 dark:text-white mb-2">Tipo de Exercício:</label>
        <select
          value={exerciseType}
          onChange={(e) => handleExerciseSelection('exerciseType', e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Selecione...</option>
          <option value="algebra">Álgebra</option>
          <option value="geometria">Geometria</option>
          <option value="estatistica">Estatística</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 dark:text-white mb-2">Dificuldade:</label>
        <select
          value={exerciseDifficulty}
          onChange={(e) => handleExerciseSelection('exerciseDifficulty', e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Selecione...</option>
          <option value="facil">Fácil</option>
          <option value="medio">Médio</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 dark:text-white mb-2">Quantidade de Perguntas:</label>
        <input
          type="number"
          value={exerciseQuestionCount}
          onChange={(e) => handleExerciseSelection('exerciseQuestionCount', e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <button
        className="block w-full bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform-gpu hover:scale-105 focus:scale-105"
        onClick={handleExerciseSelection}
      >
        Iniciar Exercício
      </button>
    </div>
  );
};

export default ExerciseSelectionCard;
