import React, { useEffect } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import styles from '@/styles/About.module.scss';
import autoVisibilityToggler from '@/utils/autoVisibilityToggler';
import Link from 'next/link';
import skills from '@/utils/skills';
import BreakpointToggle from './BreakpointToggle';
import VisibilityToggle from './VisibilityToggle';
import TextAnimation from './TextAnimation';
import Title from './Title';

interface Props {
  componentRef: React.RefObject<HTMLElement>;
  variant: string;
  isVisible: boolean;
}

const About: React.FC<Props> = ({ componentRef, isVisible }) => {
  useEffect(() => {
    autoVisibilityToggler(isVisible, 'services');
  }, [isVisible]);

  return (
    <section ref={componentRef} id="services" className={styles.container}>
      <section className={styles.about}>
        <TextAnimation className={styles.title_container} type="fade_right" delay={0}>
          <Title index='03' title='About me' subtitle="Know more" variant='one' className={styles.title} />
        </TextAnimation>
        <TextAnimation className={styles.about_me} type="fade_down" delay={0}>
          <p>
            Hi! I&#39;m a Full Stack Developer and DevOps Engineer passionate about creating
            user-friendly interfaces, efficient backend and robust cloud infrastructure,
            currently working with Thales Singapore within
            In-Flight Entertainment and Connectivity Domain. With a background in
            Information Technology, I&#39;ve honed my problem-solving and
            Software Engineering skills.
            <br />
            I&#39;ve worked with developers worldwide,
            sharpening my communication and teamwork skills.
          </p>
          <a href="/Resume_Mayank_Kumar.pdf" target='_blank' className={styles.resume_link} download="resume_Mayank_kumar">
            <span className="span">Get my Resume</span>
            <BsArrowUpRightCircleFill />
          </a>
          <Link className={`button ${styles.button}`} href='/#contact'>
            Start collaboration
          </Link>
        </TextAnimation>
      </section>
      <section className={styles.skills}>
        {
          skills.map((skill, index) => (
            <TextAnimation key={skill.name} className={styles.skill} type="fade_right" delay={index * 0.1} threshold={0.25}>
              <div className={styles.icon}>{skill.icon}</div>
              <h3 className={styles.name}>{skill.name}</h3>
              <ul className={styles.list}>
                {
                  skill.list.map((item, index) => (
                    <li className={styles.item} key={`${item}${index}`}>{item}</li>
                  ))
                }
              </ul>
            </TextAnimation>
          ))
        }
      </section>
    </section>
  );
};

export default VisibilityToggle(BreakpointToggle(About));
