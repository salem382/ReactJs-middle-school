import './socialsign.scss';
import { useTranslation } from "react-i18next";


const Socialsign = ({head}) => {

    const {t} = useTranslation();

return (
    <div className='create-account d-flex justify-content-center'>
    <div>
        <h3 className='mt-2'>{head}</h3>
        <div className='social-sign d-flex mt-3'>
            <p className='d-flex align-items-center '>
                <img src='/imgs/google.ico' alt='google' className='mx-1'
                style={{width:'30px',height:'30px'}}/>
                <span>{t("log-in-button-google")}</span> 
            </p>
            <p className='d-flex align-items-center'>
                <img src='/imgs/facebook.webp' className='mx-1' 
                alt='google' style={{width:'30px',height:'30px'}}
                />
                <span>{t("log-in-button-facebook")}</span> 
            </p>
        </div>
        <div className='or text-center'>- OR -</div>
    </div>
</div>
)

}

export default Socialsign;