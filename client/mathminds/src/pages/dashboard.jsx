import React, { useState } from 'react';
import WeeklyGoalCard from '../components/dashboardpage/goalcard';
import LevelCard from '../components/dashboardpage/levelcard';
import RecordsCard from '../components/dashboardpage/recordcard';
import ExerciseSelectionCard from '../components/dashboardpage/exselectcard';
import LastQuizCard from '../components/dashboardpage/lastquizcard';


const DashboardPage = () => {
  const [completedExercises, setCompletedExercises] = useState(25);
  const [currentLevel, setCurrentLevel] = useState(5);
  const [weeklyGoal, setWeeklyGoal] = useState(30);
  const [exerciseType, setExerciseType] = useState('');
  const [exerciseDifficulty, setExerciseDifficulty] = useState('');

  const handleExerciseSelection = (field, value) => {
    if (field === 'exerciseType') {
      setExerciseType(value);
    } else if (field === 'exerciseDifficulty') {
      setExerciseDifficulty(value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-300 dark:bg-gray-900 p-4">
      <div className=" max-w-full mx-auto p-8 bg-stone-100 dark:bg-gray-800 rounded-md shadow-2xl ">
        <div className="flex flex-col gap-4 flex-wrap">
          <div className='flex flex-row gap-4 w flex-wrap '>

            <WeeklyGoalCard completedExercises={completedExercises} weeklyGoal={weeklyGoal} />
            <LevelCard currentLevel={currentLevel} />
            <RecordsCard />
            
          </div>

          <div className='flex flex-row gap-4 flex-wrap '>

            <ExerciseSelectionCard
              exerciseType={exerciseType}
              exerciseDifficulty={exerciseDifficulty}
              handleExerciseSelection={handleExerciseSelection}
            />


            <LastQuizCard/>
          </div>
        </div>
      </div>
    </div>
  );

};


export default DashboardPage;
