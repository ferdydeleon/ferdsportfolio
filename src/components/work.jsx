import React from "react";
import WorkItem from "./workItem";
// import WorkItem from './WorkItem';

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.",
  },{
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.",
  },
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
    "Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search. Personal Information. Name Current and Permanent address (may be omitted from a resume posted on the web Objective. In one short sentence summarize your goal for your job search.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
