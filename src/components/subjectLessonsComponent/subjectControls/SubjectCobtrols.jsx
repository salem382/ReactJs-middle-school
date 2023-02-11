import './SubjectCobtrols.scss';

import { t } from 'i18next';

const subjectControls = () => {



  return (
    <div className='subject-controls'>
      <div className='leason-header'>
        <h2 className='lesson-title'>Conditionals</h2>
        <div className='leason-rate'>
          {/* <span>rate the leason</span> */}
        </div>
      </div>
      {/* <p className='leason-descrp'>
        The if clause tells you the condition (If you study hard) and the main
        clause tells you the result (you will pass your exams). The order of the
        clauses does not change the meaning. Conditional sentences are often
        divided into different types.
      </p> */}
      <div className='lesson-actions'>
        <button className='prev'>{t("video-controls-previous")}</button>
        <button className='pdf'>{t("video-controls-pdf")}</button>
        <button className='start'>{t("video-controls-start")}</button>
        <button className='next'>{t("video-controls-next")}</button>
       
      </div>
    </div>
  );
};

export default subjectControls;
