import { useSelector } from 'react-redux';
import './showResult.scss'
import axios from 'axios';
import { useEffect} from 'react';

const ShowResult = () => {


    const {currentQuiz} = useSelector(state => state.quiz);
    const {user} = useSelector(state => state.currentUser);
    const {totalGrade} = useSelector(state => state.End);


    const sendData = async() => {
        try {
  
           await axios.get(`https://newbrainsmiddle.com/api/auth/quizResult`,{
  
                params: {
                    exam_id:currentQuiz.id, 
                    user_id:user.id,
                    total_grade: currentQuiz.total_grad,
                    correct_questions_grade:totalGrade
                    },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("newbrainsToken")}`,
                }
            }
            );
            
        }
        catch (error) {
            console.log (error);
        }
        
    }


    useEffect(() => {
        sendData();
    },[])


    return (

        <>
            
        <div className="main-container">
            <div className="check-container">
                <div className="check-background">
                    <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 25L27.3077 44L58.5 7" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="check-shadow"></div>
            </div>
            <div className="text fs-4">your score is
            <span className='mx-1' style={{color:"#080"}}>{currentQuiz.total_grad} / {totalGrade}</span></div>
        </div>  
    
        </>
    )
}

export default ShowResult;