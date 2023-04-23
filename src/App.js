import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Education from "./components/Education/Education";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Project from './components/project/Project'
import ScrollingTimeline from "./components/scrolling-timeline/ScrollingTimeline";
function App() {

  return (
    <div>
      {/* <ScrollingTimeline /> */}
      <Navbar />
      <Introduction />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
