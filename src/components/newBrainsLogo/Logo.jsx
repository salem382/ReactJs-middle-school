import './logo.scss';

const Logo = () => {

    return (
        <div className='d-flex logo'>
            <div className='logo-img me-2' style={{background:'url("./imgs/bg/vec.png")'}}
            >
                <img src='./imgs/bg/left.png' className='left' alt='left'/>
                <img src='./imgs/bg/right.png' className='right' alt='right'/>
            </div>
            <div className='word'>
                <span>New brains</span> <br/>
                <span>middle</span>
            </div>
        </div>
    )
}

export default Logo;