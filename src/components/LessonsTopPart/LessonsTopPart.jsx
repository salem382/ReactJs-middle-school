import { faChevronRight, faChevronLeft, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";
import './lessonTopPart.scss';

const LessonsTopPart = () => {


    const params = useParams ();
    const location = useLocation();
    const {lang} = useSelector(state => state.currentLang)
    const {subject} = useSelector(state => state.currentSubject)
    const {currentUnit, activeVideo} = useSelector(state => state.units);
    const {currentQuiz} = useSelector(state => state.quiz);


    useEffect(() => {

        subject&& localStorage.setItem("middlesubject", subject);
        currentUnit &&localStorage.setItem("middlecurrentUnit", currentUnit);
        activeVideo.name&& localStorage.setItem("middleactiveVideo", activeVideo.name);
        currentQuiz.title&&localStorage.setItem("middlecurrentQuiz", currentQuiz.test_name);
    },[])


    return (
        <div className='d-flex align-items-center mx-5 mb-4 justify-content-between'
            style={{width:location.pathname == `/test/${params.id}`?"380px" : "300px",color:"#F44580"}}
        >
            <FontAwesomeIcon className='fs-5 icon' icon={faNoteSticky} />
            <p>{subject ? subject:localStorage.getItem("middlesubject")}</p>
            <FontAwesomeIcon className='icon' icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{currentUnit ?currentUnit: localStorage.getItem("middlecurrentUnit")}</p>
            <FontAwesomeIcon  className='icon' icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{activeVideo.name ? activeVideo.name :localStorage.getItem("middleactiveVideo")}</p>
            {location.pathname == `/test/${params.id}` && <>
            <FontAwesomeIcon  className='icon' icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{currentQuiz.test_name ? currentQuiz.test_name :localStorage.getItem("middlecurrentQuiz")}</p>
            </> }
        </div>
    )
}

export default LessonsTopPart;