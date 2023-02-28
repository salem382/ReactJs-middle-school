import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import './SubjectVideo.scss';


const SubjectActiveVideo = () => {

  const {activeVideo} = useSelector(state => state.units)


  return (
    <>
    {activeVideo.video ?  <div className='active-video'>
      <ReactPlayer
        width='100%'
        height='50vh'
        controls = {true}
        playing = {false}
        url={`https://newbrainsmiddle.com/lessons/videos/${activeVideo.video}`}
      />
    </div> : "not found"}
  </>
  );
};

export default SubjectActiveVideo;
