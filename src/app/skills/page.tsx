'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { GiBodyBalance, GiJumpAcross, GiRunningShoe, GiMuscleUp } from 'react-icons/gi';

const webSkills = [
  { name: 'React', icon: <FaReact size={28} />, level: 90 },
  { name: 'Next.js', icon: <SiNextdotjs size={28} />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript size={28} />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs size={28} />, level: 75 },
  { name: 'Cybersecurity', icon: <FaShieldAlt size={28} />, level: 65 },
];

const parkourSkills = [
  { name: 'Vaulting', icon: <GiBodyBalance size={28} />, level: 95 },
  { name: 'Precision Jumps', icon: <GiJumpAcross size={28} />, level: 90 },
  { name: 'Wall Runs', icon: <GiRunningShoe size={28} />, level: 88 },
  { name: 'Strength & Mobility', icon: <GiMuscleUp size={28} />, level: 92 },
];

export default function SkillsSection() {
  const [tab, setTab] = useState('all');

  const renderProgress = (name: string, level: number) => (
    <div className="mb-6 w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden relative shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_10px_#3b82f6]"
        />
      </div>
    </div>
  );

  const renderSkills = (skills: typeof webSkills) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {skills.map(({ name, icon, level }, i) => (
        <motion.div
          key={name}
          className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-cyan-500/30 shadow-lg transition-all hover:shadow-cyan-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="flex items-center gap-3 text-cyan-500 mb-3">
            {icon}
            <span className="text-lg font-semibold">{name}</span>
          </div>
          {renderProgress(name, level)}
        </motion.div>
      ))}
    </div>
  );

  const allSkills = [...webSkills, ...parkourSkills];

  return (
    <section id="skills" className="w-full py-24 px-6 sm:px-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-cyan-500">Skills</span>
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          A blend of digital development and physical mastery — from writing TypeScript to vaulting walls.
        </p>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-cyan-500/20">
            <TabsTrigger value="all" className=" data-[state=active]:border-b-2 data-[state=active]:text-cyan-500 transition-all">
              All
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:border-b-2 data-[state=active]:text-cyan-500 transition-all">
              Web Development
            </TabsTrigger>
            <TabsTrigger value="parkour" className="data-[state=active]:border-b-2 data-[state=active]:text-cyan-500 transition-all">
              Parkour
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">{renderSkills(allSkills)}</TabsContent>
          <TabsContent value="web">{renderSkills(webSkills)}</TabsContent>
          <TabsContent value="parkour">{renderSkills(parkourSkills)}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
