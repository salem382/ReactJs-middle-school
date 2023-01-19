import './socialsign.scss';
const Socialsign = ({head}) => {

return (
    <div className='create-account d-flex justify-content-center'>
    <div>
        <h3 className='mt-3'>{head}</h3>
        <div className='social-sign d-flex mt-3'>
            <p className='d-flex'>
                <img src='./imgs/google.ico' alt='google' className='me-2'
                style={{width:'30px',height:'30px'}}/>
                <span>Sign Up With Google</span> 
            </p>
            <p className='d-flex'>
                <img src='./imgs/facebook.webp' className='me-2' 
                alt='google' style={{width:'30px',height:'30px'}}
                />
                <span>Sign Up With Facebook</span> 
            </p>
        </div>
        <div className='or text-center'>- OR -</div>
    </div>
</div>
)

}

export default Socialsign;