import './signup.scss';
import GuyDraw from '../../components/signupComponent/guyDraw/GuyDraw';
import SignUpForm from '../../components/signupComponent/signUpForm/SignupForm';
import React from 'react';
const Signup = () => {

    return (
        <div className='d-flex sign-up'>
            <GuyDraw />
            <SignUpForm />
        </div>
    )
}

export default React.memo(Signup);