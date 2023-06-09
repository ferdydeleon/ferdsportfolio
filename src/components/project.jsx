import React from "react";
import ProjectItem from "./projectItem";
import Facebook from '../assets/facebook.jpg'
import AdminEzybet from '../assets/ezybetadmin.jpg'
import FrontEzybet from '../assets/frontEzybet.jpg'


const Project = () => {
  return( 
  <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
    <p className="text-center py-8">
    dasdas dfasasfsdf asdasd asd asd asdas da  dasdasdasdasdasdas dasdasd asdasdasdas dasdasdasdasdasd dasda
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={Facebook} title="facebook" />
            <ProjectItem img={AdminEzybet} title="AdminEzybet" />
            <ProjectItem img={FrontEzybet} title="FrontEzybet" />
            

        </div>
  </div>
  );
};

export default Project;
