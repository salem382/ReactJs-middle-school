import './signup.scss';
import Socialsign from '../socialSign/Socialsign';
import {Link} from 'react-router-dom';
import TopPartSignup from '../topPartSignUp/TopPartSignup';
const SignUpForm = () => {

    return (
        <section className='signup-form'>
            <TopPartSignup />
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