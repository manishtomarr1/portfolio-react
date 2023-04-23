import './Education.css';
import EducationCard from './EducationCard';
import 'animate.css';


const Education = () => {
  return (
    <section id="education">
      <div className="heading">
        <h1 className="education">EDUCATION</h1>
      </div>
      <div className="card">
        <EducationCard 
          degree="Master of Computer Applications"
          institution="Madan Mohan Malaviya University of Technology, Gorakhpur, India."
          year="Year: 2021- 2023"
          grade="Grade: 8.3"
        />
        <EducationCard 
          degree="Bachelor of Computer Applications"
          institution="Chaudhary Charan Singh University, Meerut, India."
          year="Year: 2017- 2020"
          grade="Percentage: 66.5%"
        />
      </div>
    </section>
  );
};

export default Education;

