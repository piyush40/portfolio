import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            J.P. Intermediate College, Captainganj (Kushinagar), Uttar-Pradesh.
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Sachidanand Inter College, Captainganj (Kushinagar), Uttar-Pradesh.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>

          <p> Intermediate</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Lovely Professional University, Phagwara (Punjab)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            B.Tech
            
          </h4>

          <p> Computer Science and Engineering</p>
        </VerticalTimelineElement>
        

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;