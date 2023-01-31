import ReactPlayer from 'react-player';
import './SubjectVideo.scss';
const SubjectActiveVideo = () => {
  return (
    <div className='active-video'>
      <ReactPlayer
        width='100%'
        height='50vh'
        controls
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      />
    </div>
  );
};

export default SubjectActiveVideo;
