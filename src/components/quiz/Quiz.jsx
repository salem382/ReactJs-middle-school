import './quiz.scss';

import { useState } from 'react';

const Quiz = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className='quiz'>
            <h3>Quiz Question 1</h3>
            <p>
                Which of these questions could you ask stakeholders during the early stages of a product?<br/>
                (Select all that apply.)
            </p>
            <form>
                <div className='element-container'>
                    <div className='check-conatiner'>
                        <span className='bd'></span>
                        <input onChange={() => setOpen1(x => !x)} type='checkbox'/>
                        <span style={{display:open1 ? 'block' : 'none'}} className='bg'></span>
                    </div>
                    <label>What kind of UX research have we done?</label>
                </div>
                <div  className='element-container'>
                    <div className='check-conatiner'>
                        <span className='bd'></span>
                        <input  onChange={() => setOpen2(x => !x)} type='checkbox'/>
                        <span style={{display:open2 ? 'block' : 'none'}} className='bg'></span>
                    </div>
                    <label>What kind of UX research have we done?</label>
                </div>
                <div  className='element-container'>
                    <div className='check-conatiner'>
                        <span className='bd'></span>
                        <input  onChange={() => setOpen3(x => !x)} type='checkbox'/>
                        <span style={{display:open3 ? 'block' : 'none'}} className='bg'></span>
                    </div>
                    <label>What kind of UX research have we done?</label>
                </div>
                <div  className='element-container'>
                    <div className='check-conatiner'>
                        <span className='bd'></span>
                        <input  onChange={() => setOpen4(x => !x)} type='checkbox'/>
                        <span style={{display:open4 ? 'block' : 'none'}} className='bg'></span>  
                    </div>
                    <label>What kind of UX research have we done?</label>
                </div>
            </form>
        </div>
    )
}

export default Quiz;