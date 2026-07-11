// src/components/Timeline.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { INFO } from '../data/user';
import '../assets/styles/Timeline.scss';

const cardStyle = {
  background: '#111827', // matches --bg-panel from index.scss
  color: '#f3f6fb', // matches --text-hi
};
const arrowStyle = { borderRight: '7px solid #111827' };
const iconStyle = { background: '#5eead4', color: '#04120f' };

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Resume</h1>
        <VerticalTimeline>
          {INFO.resume.experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={cardStyle}
              contentArrowStyle={arrowStyle}
              date={exp.period}
              iconStyle={iconStyle}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{exp.role}</h3>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          ))}
          {INFO.resume.education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="education"
              contentStyle={cardStyle}
              contentArrowStyle={arrowStyle}
              date={edu.period}
              iconStyle={iconStyle}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="element-title">{edu.degree}</h3>
              <h4 className="element-subtitle">{edu.institution}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;