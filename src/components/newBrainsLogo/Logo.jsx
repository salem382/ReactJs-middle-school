import './logo.scss';

const Logo = ({src, name}) => {

  return (
    <div className='pt-3'>
      <img src={src} alt={name}/>
    </div>
  );
};

export default Logo;
