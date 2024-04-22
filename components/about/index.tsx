import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";

export default function AboutMe({
  setIsVisible,
}: {
  setIsVisible: () => void;
}) {
  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);

  return (
    <motion.section
      id="_about-me"
      ref={observeRef}
      className="relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-max  md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute -top-12 left-1/2 w-[315px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          From Code to Coffee: About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>
      <br />

      <p className="transition-all duration-300 !leading-loose ease-in hover:text-white/70">
        7+ years of web & app mastery have sculpted me into a craftsmanship <br className="md:block hidden" /> who thrives on creating seamless, visually stunning interfaces and high-quality.<br /><br /> What sets me apart? - My holistic approach as an all-round software engineer<br className="md:block hidden" /> and a seasoned team lead, guiding squads through frontend & backend challenges<br className="md:block hidden" /> and beyond.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        If you seek transformative solutions, consulting, or mentorship,{" "}
        <br className="hidden md:block" />
        let&apos;s connect!
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I build awesome products using:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          MERN & MEAN & MEVN
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Tailwind CSS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          JS & TS & Java
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Springboot
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Ruby on Rails
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Go
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          React Native
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Flutter
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Flutter-Flow
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-xs">Others:</span>
        <p className="flex gap-1 text-xs text-gray-100">
          <span className="text-yellow">Git</span>
          &#x2022;
          <span className="text-yellow">Redux Toolkit</span>
          &#x2022;
          <span className="text-yellow">CI/CD</span>
          &#x2022;
          <span className="text-yellow">Sass</span>
          &#x2022;
          <span className="text-yellow">SEO</span>
          &#x2022;
          <span className="text-yellow">Web Perf</span>
          &#x2022;
          <span className="text-yellow">Vue</span>
          &#x2022;
          <span className="text-yellow">Svelte</span>
          &#x2022;
          <span className="text-yellow">Docker & Kubernetes</span>
          &#x2022;
          <span className="text-yellow">GraphQL</span>
          &#x2022;
          <span className="text-yellow">gRPC</span>
          &#x2022;
          <span className="text-yellow">web socket & web hook</span>
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <p className="flex gap-1 text-xs text-gray-100" style={{marginLeft: "65px"}}>
          <span className="text-yellow">Apache Kafka & RabbitMQ & MQTT</span>
          &#x2022;
          <span className="text-yellow">AWS & Azure</span>
          &#x2022;
          <span className="text-yellow">Kotlin & AndroidJava</span>
          &#x2022;
          <span className="text-yellow">Swift & objectiveC</span>
        </p>
      </div>
    </motion.section>
  );
}
