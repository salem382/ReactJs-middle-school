import { useDispatch } from 'react-redux';
import './SubjectVideos.scss';
import {setCurrentVideo} from '../../../store/unitsSlice';


const SubjectVideos = ({active, LessinIndex}) => {


  const dispatch = useDispatch();

  return (
    <div className='subject-video' role='button'
      style={{border: active &&'4px solid #00c8d5'}}
      data-index = {LessinIndex}
      onClick={(e) => dispatch(setCurrentVideo(e.target.getAttribute("data-index")))}
    >
      <div className='video-thumb'>
        <img src={'/imgs/videos/videoThumb.png'} alt='' />
        <img className='video-icon' src={active ? '/imgs/videos/activeMode.png' :'/imgs/videos/playIcon.png'} alt='' />
      </div>
      <div className='video-content'>
        <div className='video-title'>Grammar explanation</div>
        {/* <div className='video-descrption'>
          Conditionals describe the result of a certain condition. The if clause
          tells you the condition (If you study hard)
        </div> */}
      </div>
    </div>
  );
};

export default SubjectVideos;
