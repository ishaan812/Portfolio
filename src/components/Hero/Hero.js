import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = (props) => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <span>Ishaan Shah</span>
          {/* <br/> */}
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        I am a<br/>
          <Typewriter
              words={[
                "Software Developer",
                "Full Stack Developer",
                "Devops Engineer",
                "Cloud Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              delaySpeed={2000}
              onLoopDone={handleDone}
              onType={handleType}
            />
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
)};

export default Hero;