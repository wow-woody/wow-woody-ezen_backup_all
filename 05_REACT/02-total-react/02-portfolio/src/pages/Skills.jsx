import React from 'react'
import { skillsData } from '../data/skillsData'; // import { skillsData의 변수명 입력 } from '경로입력';
import SkillCard from '../components/SkillCard'; // import SkillCard.jsx의 변수명 from '경로입력';


const Skills = () => {
  return (
    <div children='content-inner'>
      <h2>Skills</h2>
      <ul className='skills-list'>
        {skillsData.map((skill) => (
          <li key={skill.id}>
            <SkillCard
              title={skill.title}
              des={skill.description}
              level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills