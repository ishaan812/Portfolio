import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaAws, FaDocker, FaNodeJs} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {TbBrandGolang, TbBrandPython, TbBrandSocketIo, TbBrandTypescript} from 'react-icons/tb';
import NitiImage from './niti.jpeg';

function ExperienceTimeline() {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="August 2022 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdWork/>} 
  >
    <img src={NitiImage}/>
    <h3 className="vertical-timeline-element-title">Niti.Ai</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Developer Intern</h4>
    <h4 className="vertical-timeline-element-subtitle">Hybrid</h4>
    <p>
      Working on building a fintech product from the roots. Primarily working on the backend as well as managing the data layer.
    </p><br/>
    <span className="mr-1"><TbBrandGolang size={40}/></span>
    <span className="mr-1"><FaDocker size={40}/></span>
    <span className="mr-1"><TbBrandTypescript size={40}/></span>  
    <span className="mr-1"><FaAws size={40}/></span>
    <span className="mr-1"><TbBrandPython size={40}/></span>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="July 2022 - August 2022"
    icon={<MdWork/>} 
    
  >
    <h3 className="vertical-timeline-element-title">24 Frames Design</h3>
    <h4 className="vertical-timeline-element-subtitle">Backend Developer Intern</h4>
    <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
    <p>
    Worked on making a chat module for their VCM 3.0 Video conferencing software which worked in real-time using websockets for a large audience.
    </p>
    <br/>
    <span className="mr-1"><FaNodeJs size={40}/></span>
    <span className="mr-1"><TbBrandSocketIo size={40}/></span>
    <span className="mr-1"><FaAws size={40}/></span>
    <span className="mr-1"><TbBrandPython size={40}/></span>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    date="2020- 2024"
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech in Information Technology w/Honors in DevOps</h3>
    <h4 className="vertical-timeline-element-subtitle">D.J Sanghvi College of Engineering</h4>
    <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
    <br/>
    <h4 className="vertical-timeline-element-subtitle">GPA: 8.89</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap/>}
    date="2018 - 2020"
  >
    <h3 className="vertical-timeline-element-title">High School Diploma</h3>
    <h4 className="vertical-timeline-element-subtitle">Thakur College of Science</h4>
    <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<AiFillStar />}
  />
</VerticalTimeline>
  )
}

export default ExperienceTimeline