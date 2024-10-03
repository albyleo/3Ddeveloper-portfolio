import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Tilty from "react-tilty";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

    const videos = [
    "https://streamable.com/ym76a3",
    "https://streamable.com/medjkv",
    "https://streamable.com/c8b8s8",
    "https://streamable.com/bisq0o",
    "https://streamable.com/l29cd3"
    ];

    const divStyle = {
        color: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid silver',
        backgroundColor: 'black',
        height: '640px',
        width: '320px',
        marginRight: '25px',
    };

    const HorizontalScrollCarousel = () => {
        const targetRef = useRef(null);
            const { scrollYProgress } = useScroll({
                target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[140vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
            {videos.map((video, index) => (
                <Tilty max={10} key={index}>
                <ReactPlayer
                    className="group relative h-[630px] w-[300px] overflow-hidden"
                    url={video}
                    playing={false}
                    loop={true}
                    muted
                    controls={false}
                    height={600}
                    width={340}
                    style={divStyle}
                />
                </Tilty>
            ))}
            </motion.div>
        </div>
        </section>
    );
    };

    const CGIprojects = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My CGI Projects</p>
        </motion.div>
        <HorizontalScrollCarousel />
        </>
    );
    };

    export default SectionWrapper(CGIprojects, "CGIprojects");