import "./Introduction.css";
import 'animate.css';
import resume from "../assets/Manish-Tomar-Resume.pdf";
const Introduction = () => {
    
    const handleDownloadCV = () => {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          // For Internet Explorer
          window.navigator.msSaveOrOpenBlob(resume, "my-resume.pdf");
        } else {
          // For other browsers
          window.open(resume, "_blank");
        }
      };

  return (
    <section id="about">
      <div class="intro">
        <h1 className="hello animate__animated animate__fadeInDown animate__slow">HELLO, </h1>
        <h1 class="Name animate__animated animate__fadeInDown animate__slow">I'M MANISH TOMAR.</h1>
        <p class="summary  animate__animated animate__fadeInLeft animate__slow">
          Passionate and motivated full stack web developer with experience in
          front-end and back-end development and a strong understanding of web
          development principles. Skilled in React.js, HTML5, CSS3, JavaScript,
          jQuery, Node.js, Express.js, MongoDB, Mongoose and Git. With a focus
          on creating responsive and userfriendly designs. I have completed
          several projects that have allowed me to gain hands-on experience in
          developing web applications. Looking for an opportunity to contribute
          my skills to a dynamic team and build innovative web solutions.
        </p>
         <button className="CV  animate__animated  animate__fadeInUp animate__slow " onClick={handleDownloadCV}>Download CV</button>
      </div>
    </section>
  );
};

export default Introduction;
