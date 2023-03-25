import { useDispatch } from 'react-redux';
import './SubjectVideos.scss';
import {setCurrentVideo} from '../../../store/unitsSlice';
import { useEffect } from 'react';


const SubjectVideos = ({active, lesson, lessonIndx}) => {


  const dispatch = useDispatch();

  const handleLessonClick = (e) => {
    const parentElement = e.target.closest('.subject-video');
    dispatch(setCurrentVideo(Number(parentElement.getAttribute('data-index'))))
  }

  return (
    <div className='subject-video' role='button'
      style={{border: active === 'active' &&'4px solid #00c8d5'}}
      data-index = {lessonIndx}
      onClick={(e) => handleLessonClick(e)}
    >
      <div className='video-thumb'>
        <img src={'/imgs/videos/videoThumb.png'} alt='' />
        <img className='video-icon' src={active === 'active' ? '/imgs/videos/activeMode.png' :'/imgs/videos/playIcon.png'} alt='' />
      </div>
      <div className='video-content'>
        <div className='video-title'>{lesson.name}</div>
      </div>
    </div>
  );
};

export default SubjectVideos;
