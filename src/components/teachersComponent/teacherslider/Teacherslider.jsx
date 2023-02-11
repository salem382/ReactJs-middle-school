import './teacherslider.scss';
import { Container} from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; 


const Teacherslider = () => {

  const {t} = useTranslation()


  return (
    <Container>
      <div
        className='teacher-header mt-4'
        style={{
          background:
            'url("./imgs/teachers/sectionImg.png") no-repeat, linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <h1 className='title'>{t("ourTeachers-header")}</h1>
      </div>
    </Container>
  );
};

export default Teacherslider;
