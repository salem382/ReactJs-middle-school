import './SubjectVideos.scss';
const SubjectVideos = () => {
  return (
    <div className='subject-video'>
      <div className='video-thumb'>
        <img src='./imgs/videos/videoThumb.png' alt='' />
        <img className='video-icon' src='./imgs/videos/playIcon.png' alt='' />
      </div>
      <div className='video-content'>
        <div className='video-title'>Grammar explanation</div>
        <div className='video-descrption'>
          Conditionals describe the result of a certain condition. The if clause
          tells you the condition (If you study hard)
        </div>
      </div>
    </div>
  );
};

export default SubjectVideos;
