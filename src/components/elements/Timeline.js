import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Object.keys(Resume.work)
        .reverse()
        .map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">
                {new Date(year).getFullYear()}
              </span>
            </header>
          );
          Resume.work[year].map((experience, k) => {
            return content.push(
              <TimelineItem
                key={k}
                date={new Date(experience.startDate).toLocaleString("en-UK", {
                  month: "long",
                  year: "numeric",
                })}
                company={experience.company}
                summary={experience.summary}
              />
            );
          });
          return content;
        })}
    </div>
  );
}

export default Timeline;
