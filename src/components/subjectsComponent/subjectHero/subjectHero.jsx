import { Container } from 'react-bootstrap';
import './subjectHero.scss';
import { useTranslation } from 'react-i18next';



const SubjectHero = () => {

  const {t} = useTranslation();



  return (
    <Container>

    
      <div
        className='subjects-header mt-5'
        style={{
          background: 'url("./imgs/subjects/subjectImg.png") no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className='title'>
          <span>{t("subject-slide-title1")}</span>
          <span>{t("subject-slide-title2")}</span>
        </h1>
      </div>
    </Container>
  );
};

export default SubjectHero;
