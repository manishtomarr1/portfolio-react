import ProjectCard from "./ProjectCard";
import msCafe from "../../assets/mscafe.png";
import expense from "../../assets/expense tracker.png";
import todo from "../../assets/todolist.png";
import portfolio from "../../assets/portfolio.png";

const Project = () => {
  return (
    <section id="projects" >
      <h1
        className="project-heading"
        style={{
          color: "rgb(51, 255, 0)",
          fontSize: "2.5rem",
          textAlign: "center",
        }}
      >
        PROJECTS
      </h1>
      <div className="project-card-container">
        <ProjectCard 
          image={msCafe}
          name="MS Cafe"
          liveLink="https://ms-cafe.netlify.app/"
          githubLink="https://github.com/manishtomarr1/food-order-app-MS-Cafe-"
          discription="MS CAFE is a comprehensive and intuitive online food ordering application designed to provide a seamless online food ordering experience to its users. The app is built using React.js, for building user interfaces, and incorporates features such as Context API, useState Hook, useReducer Hook, useRef Hook, and forwardRef to ensure efficient and optimized performance."
        />
        <ProjectCard 
          image={todo}
          name="To-Do List"
          liveLink="https://github.com/manishtomarr1/to-do-list"
          githubLink="https://github.com/manishtomarr1/to-do-list"
          discription="The To-Do List Web App is a web-based application designed to help users keep track of their daily tasks and priorities. The app is built using JavaScript, MongoDB, and Node.js. The front-end is developed using HTML, CSS, and JavaScript, while the back-end is developed using Node.js and MongoDB to store and retrieve task data."
        />
        <ProjectCard
          image={expense}
          name="Expense Tracker"
          liveLink="https://expensetrackerbymanish.netlify.app/"
          githubLink="https://github.com/manishtomarr1/Expense-Tracker-"
          discription="The Expense Tracker React App is a web application designed to help users keep track of their daily expenses. With this app, users can easily add their expenses, view their spending history, and track their budgets all in one place."
        />
        <ProjectCard 
          image={portfolio}
          name="Personal Site"
          liveLink="https://manish-personal-site.netlify.app/"
          githubLink="https://github.com/manishtomarr1"
          discription="My portfolio designed using ReactJS is a comprehensive and professional representation of my skills, education, and projects. It reflects my commitment to excellence in web development and my passion for creating engaging and user-friendly experiences. 
          Technology Used : React.js"
        />
      </div>
    </section>
  );
};
export default Project;