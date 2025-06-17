'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ChevronDown, BrainCircuit, Dumbbell, Laptop2 } from 'lucide-react';
import {
  Code,
  
  Palette,
  Smartphone,
  
  Sparkles,
} from 'lucide-react';

const imageList = [
  '/undraw_fitness-stats_uk0g.svg',
  '/undraw_dev-environment_n5by.svg',
  '/undraw_personal-trainer_bqkg.svg',
];

const Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

  
  const cards = [
    {
      icon: <Laptop2 size={32} className="text-cyan-500" />,
      title: 'Web Developer',
      desc: 'I build modern, performant, and accessible web apps using the latest technologies including React, Next.js, Tailwind CSS, and more.',
    },
    {
      icon: <Dumbbell size={32} className="text-cyan-500" />,
      title: 'Fitness Trainer',
      desc: 'I specialize in parkour-based movement training, strength, and body conditioning, helping clients unlock their physical potential.',
    },
    {
      icon: <BrainCircuit size={32} className="text-cyan-500" />,
      title: 'Creative Mindset',
      desc: 'From UI design to parkour flow, I believe creativity drives mastery. I love exploring new ideas & solving problems innovatively.',
    },
  ];

  const skills = [
  {
    icon: <Laptop2 size={32} className="text-cyan-500" />,
    title: 'Frontend Development',
    desc: 'Building responsive and performant interfaces using React, Next.js, Tailwind CSS, and Framer Motion.',
    level: 90,
  },
  {
    icon: <Code size={32} className="text-cyan-500" />,
    title: 'JavaScript & TypeScript',
    desc: 'Writing modern, scalable code with a strong understanding of ES6+, TypeScript, and best practices.',
    level: 85,
  },
  {
    icon: <Smartphone size={32} className="text-cyan-500" />,
    title: 'Responsive Design',
    desc: 'Crafting mobile-first UI and full animated desktop UI that adapts seamlessly across devices and screen sizes.',
    level: 95,
  },
  {
    icon: <Dumbbell size={32} className="text-cyan-500" />,
    title: 'Strength & Conditioning',
    desc: 'Specialized in physical training, mobility, and endurance based on parkour principles.',
    level: 92,
  },
  {
    icon: <Sparkles size={32} className="text-cyan-500" />,
    title: 'Creative Problem Solving',
    desc: 'Combining code, design, and motion to deliver engaging and user-focused digital experiences.',
    level: 80,
  },
  {
    icon: <Palette size={32} className="text-cyan-500" />,
    title: 'UI/UX Design',
    desc: 'Designing intuitive interfaces with a focus on aesthetics, accessibility, and interaction.',
    level: 75,
  },
];

const formAction = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // You can now add your custom logic here (e.g., API call, validation)
  console.log("Form submitted but default prevented");
};


  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section id='hero' className="relative min-h-[90vh] w-full flex flex-col-reverse sm:flex-row items-center justify-center pb-20">
        {/* Left: Text */}
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center px-6 sm:px-12 py-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Hello, I&apos;m <span className="text-cyan-400 font-serif">Animesh</span>
          </h1>
          <div className="mt-4 text-xl sm:text-3xl md:text-4xl font-mono text-gray-500">
            <Typewriter
              words={['Parkour Athlete', 'A Web Developer', 'Physical Trainer', 'Influencer']}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center px-4 sm:px-10 py-6">
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] relative">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={imageList[currentImageIndex]}
                alt="Rotating profile"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Arrow - INSIDE HERO */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 p-3 rounded-full border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition"
          aria-label="Scroll to About Section"
        >
          <ChevronDown size={28} />
        </motion.button>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-[100vh] flex flex-col justify-center w-full px-6 sm:px-12 py-20 bg-background text-foreground">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-500 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
            Hey there 👋 I&apos;m <span className="text-cyan-500 font-semibold">Animesh</span> — a passionate web developer,
            parkour athlete, and personal trainer. I thrive on pushing physical and creative boundaries. Whether I’m
            building digital experiences or training bodies in motion, I bring focus, energy, and a never-settle mindset.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-neutral-900 shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}

          
        </div>

        <motion.button
  onClick={scrollToSkills}
  initial={{ y: 0 }}
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="mt-35 mx-auto p-3 rounded-full border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition"
  aria-label="Scroll to Skills Section"
>
  <ChevronDown size={28} />
</motion.button>

        
      </section>

      {/* Skills Section */}

        <section
      id="skills"
      className="min-h-[90vh] w-full px-6 sm:px-12 py-20 bg-background text-foreground"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">My Skillset</h2>
        <p className="text-gray-500 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          A mix of technical mastery and athletic discipline — I bridge the gap between code and movement with dedication, creativity, and grit.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{skill.desc}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: index * 0.15 }}
                className="bg-cyan-500 h-full rounded-full"
              />
            </div>
            <div className="text-right text-xs mt-1 text-gray-500">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </section>
    <section
      id="contact"
      className="min-h-[60vh] flex items-center justify-center px-6 sm:px-12 py-20 bg-background text-foreground"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe to Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Stay updated with my latest workouts, web projects, and parkour tips delivered directly to your inbox.
        </p>

        <form onSubmit={formAction}  id='form' className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Subscribe
          </motion.button>
        </form>

        {/* Contact Us Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-block text-sm sm:text-base font-semibold text-cyan-500 hover:underline"
          >
            Or Contact Us →
          </Link>
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

export default Page;
