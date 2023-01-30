import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useGetRandomQuestionsQuery } from '../redux/services/triviaApi';
import { setQuestions } from '../redux/features/quizSlice';

const Quiz = () => {
    const dispatch = useDispatch();
    const {categories, difficulty, limit} = useSelector(store=>store.quiz);
    const {isFetching, isError, data} = useGetRandomQuestionsQuery({categories, difficulty, limit});
    if(isFetching) return 'Loading'
    if(isError) return 'error'
    {data && <div>Quiz</div>
      }
  
}

export default Quiz