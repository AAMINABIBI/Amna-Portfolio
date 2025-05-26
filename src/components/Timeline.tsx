// src/components/Timeline.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { INFO } from '../data/user';
import '../assets/styles/Timeline.scss';

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
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={exp.period}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
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
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={edu.period}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
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