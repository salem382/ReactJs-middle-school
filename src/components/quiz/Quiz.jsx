import './quiz.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowResult from '../showResult/ShowResult';
import { useRef } from 'react';
import {setIsEnd, inCreaseTotalSubmited, defaultTotalGrade, defaultTotalSubmited, setTotalGrade} from '../../store/showResultSlice';


const Quiz = () => {


  let quizRef = useRef();
  const dispatch = useDispatch();
  const {isEnd, totalSubmited} = useSelector(state => state.End);

  const {currentQuiz, totalQuestions} = useSelector(state => state.quiz);

  const {t} = useTranslation();

  
  const handleChange = (e) => {
    e.target.parentElement.parentElement.parentElement.setAttribute("data-choice", e.target.getAttribute("data-val"));
  };

  const handelSubmit = (e) => {
      e.preventDefault();
      e.target.classList.add("end");
      if (e.target.getAttribute("data-correct-ans") == e.target.getAttribute("data-choice")) {
          let quetsionGrade = e.target.getAttribute("data-grade");
          dispatch(setTotalGrade(Number(quetsionGrade)));
      }

      if (totalQuestions === totalSubmited ) {
        dispatch(setIsEnd(true));
      }  
  }


  useEffect(() => {
    // currentQuiz.questions && dispatch(setTotalQuestions(currentQuiz.questions.length));
    return () => {
      dispatch(defaultTotalGrade());
      dispatch(defaultTotalSubmited());
    }
  },[])
 
  useEffect(() => {
    if (isEnd) {
      quizRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  },[isEnd])

  const handleBtnClick = (e) => {
    dispatch(inCreaseTotalSubmited());
    e.target.classList.add('stop-click')
  }


  return (
    <div className='quiz'>

             {currentQuiz.questions && currentQuiz.questions.map((question) =><form onSubmit={(e) => handelSubmit(e)}  key={question.id}
              className='quizContainer pt-3'
              data-correct-ans= {question.correct_answer} data-grade= {question.question_grade} data-choice={""}
              >
                <p>
                  {question.body}
                </p>

                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                        data-val = {'answer_a'}
                        onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_a}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'answer_b'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_b}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'answer_c'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_c}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'answer_d'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_d}</label>
                </div>


                <button onClick={(e) => handleBtnClick(e)} className='success-button my-1'>{t("submit-btn")}</button>
              </form>

      )}
    {isEnd && <div ref={quizRef}>{<ShowResult/>}</div>}
    </div>
  );
};

export default Quiz;
