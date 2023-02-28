import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentLessons} from '../../../store/unitsSlice'


const Unit = ({unit ,indx}) => {

    const dispatch = useDispatch();
    const {currentUnit} = useSelector(state => state.units);

    return (
        <div className={"unit-section w-75  rounded m-auto p-2 text-center fw-bold my-2 d-flex justify-content-between align-items-center"} role={"button"}
        style={currentUnit === unit ?{border:"1px solid #00c8d5", background:"#00c8d5", color:"#fff"} : {border:"1px solid #00c8d5", color:"#00c8d5"}}
        data-indx= {indx}
        onClick = {(e) => dispatch(setCurrentLessons(e.target.getAttribute("data-indx")))}
        >
            <span>{unit}</span>
            <span>
                <FontAwesomeIcon icon={faChevronRight}/>
            </span> 
        </div>
    )
}

export default Unit;