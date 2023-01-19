import './signup.scss';
import Socialsign from '../socialSign/Socialsign';
import {Link} from 'react-router-dom';
const SignUpForm = () => {

    return (
        <section className='signup-form px-5'>
           <div className='top-part border d-flex justify-content-between'>
               <p>newbrains</p> 
               <p>English</p> 
           </div>
            <Socialsign head ={'Create Account'} />
           <form>
                <input placeholder='Full Name' type='text' />
                <input placeholder='Email Adress' type='email' />
                <input placeholder='Password' type='password' />
                <input placeholder='Age' type='number' />
                <input placeholder='Gender' type='text' />
                <input placeholder='Phone' type='text' />
            </form>
            <button className='btn-create-account'>Create Account</button>
            <p className='login  d-flex'> 
            <span>Already have an account? </span> 
                <span>
                <Link to='/login' className='nav-link'>
                    Login
                </Link>
                </span>
            </p>
        </section>
    )
}

export default SignUpForm;