'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Dumbbell, Laptop2, Download } from 'lucide-react';

const cards = [
  {
    icon: <Laptop2 size={28} className="text-cyan-500" />,
    title: 'Web Developer',
    desc: 'Crafting beautiful, fast, and responsive interfaces using React, Next.js, Tailwind, and motion libraries.',
  },
  {
    icon: <Dumbbell size={28} className="text-cyan-500" />,
    title: 'Athlete & Trainer',
    desc: 'Parkour-based strength and mobility coach, helping others move confidently and efficiently.',
  },
  {
    icon: <Brain size={28} className="text-cyan-500" />,
    title: 'Creative Thinker',
    desc: 'I combine logic with creativity, using both mindset and skillset to solve real-world problems.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-background text-foreground">
      {/* Scroll Down Arrow */}
     

      {/* Main About */}
      <div className="min-h-[100vh] w-full px-6 sm:px-16 py-20 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="sm:w-[350px] sm:h-[350px] w-[250px] h-[250px] relative rounded-full border-2 border-cyan-500 overflow-hidden shadow-lg"
          >
            <Image
              src="/animesh.jpg"
              alt="Animesh"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-cyan-500">Animesh</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              I’m a passionate parkour athlete and web developer. Whether I’m flipping over obstacles or deploying React apps,
              I believe in pushing boundaries. With deep discipline and focus, I bring creative energy into everything I build.
            </p>
            <motion.a
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              href="/Animesh_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Full Detailed About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-6">
          My Journey & Passion
        </h3>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          My journey started with pure curiosity — a desire to understand how things move, both physically and digitally.
          As a parkour athlete, I learned discipline, fearlessness, and adaptability — lessons I now apply to coding.
          I transitioned into web development to explore the creative side of technology, and discovered I could express
          my vision through clean, efficient interfaces. From designing animated UIs to optimizing user experiences,
          I’m committed to mastering both body and brain. Every app I build, every flip I land — it’s about evolution.
          I never stop growing, and I never stop building.
        </p>
      </motion.div>
    </section>
  );
}
