import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Tilt from "react-tilt";
import Tilty from "react-tilty";
import usePreventBodyScroll from "../UsePreventBodyScroll";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const video1 =  "https://streamable.com/ym76a3";
const video2 =  "https://streamable.com/medjkv";
const video3 =  "https://streamable.com/c8b8s8";
const video4 =  "https://streamable.com/bisq0o";
const video5 =  "https://streamable.com/l29cd3";
const videos = [video1, video2, video3, video4, video5];


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};



const divStyle = {
  color: '#FFFFFF',
  borderRadius: '16px',
  border: '1px solid silver',
  backgroundColor: 'black',
  height: '640',
  width: '320',
  marginRight: '25px',
  //backgroundImage: 'url(' + imgUrl + ')',
};

const HorizontalScrollCarousel = () => {
  //const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const { disableScroll, enableScroll } = usePreventBodyScroll();


  return (
    
    <section ref={targetRef} className="relative h-[200vh] ">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">

      <motion.div style={{ x }} className="flex gap-4">

      {videos.map((video, index) => {
        return (
            <Tilty
              max={10}
              key={index}
              >
              <ReactPlayer
                key={index}
                className="group relative h-[630px] w-[300px] overflow-hidden "
                url={video}
                playing ={false}
                loop ={true}
                muted
                controls ={false} // Add controls for play/pause
                height={600}
                width={340}
                style={divStyle}
              />
            </Tilty>
          
        );
      })}
      </motion.div>
    </div>
    </section>
  );
};



const Works = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and turning ideas into reality.
          
        </motion.p>
      </div>

      <HorizontalScrollCarousel />

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");



