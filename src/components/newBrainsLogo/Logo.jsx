import './logo.scss';

const Logo = ({src, name}) => {

  return (
    <div>
      <img src={src} alt={name}/>
    </div>
  );
};

export default Logo;
