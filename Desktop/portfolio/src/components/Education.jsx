import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaCode } from 'react-icons/fa'

const Education = () => {
  const certificates = [
    { name: 'AI Foundations Associate', issuer: 'ORACLE', date: 'Sep 2025' },
    { name: 'Git and GitHub', issuer: 'CIPHERSCHOOL', date: 'Jun 2025' },
    { name: 'Cloud Computing', issuer: 'NPTEL', date: 'Apr 2025' },
    { name: 'C++', issuer: 'GeeksforGeeks', date: 'Jun 2024' },
  ]

  const codingPlatforms = [
    {
      name: 'LeetCode',
      description: 'Solved 100+ DSA Problems',
      url: 'https://leetcode.com/u/Raunaque/',
    },
    {
      name: 'HackerRank',
      description: '5-Star Rating (C++, DSA, C, Java)',
      url: 'https://www.hackerrank.com/profile/raunaque928',
    },
    {
      name: 'GeeksforGeeks',
      description: 'DSA & CS Concepts Practice',
      url: 'https://www.geeksforgeeks.org/profile/raunaq5q1l',
    },
    {
      name: 'CodeChef',
      description: 'Competitive Programming',
      url: 'https://www.codechef.com/users/stench_zone_86',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="pt-40 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certifications & Coding Profiles
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certificates Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <FaAward /> Certificates
            </h3>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-gradient-to-br from-darkCard/50 to-slate-900/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 smooth-transition"
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.5)', y: -5 }}
              >
                <h4 className="text-sm font-semibold text-gray-100 mb-1">{cert.name}</h4>
                <p className="text-primary text-xs mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Coding Platforms Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <FaCode /> Coding Platforms
            </h3>
            {codingPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="p-4 bg-gradient-to-br from-darkCard/50 to-slate-900/50 backdrop-blur-sm border border-secondary/20 rounded-lg hover:border-secondary/50 smooth-transition block cursor-pointer group"
                whileHover={{ borderColor: 'rgba(236, 72, 153, 0.5)', y: -5 }}
              >
                <h4 className="text-sm font-semibold text-gray-100 mb-1 group-hover:text-secondary transition">{platform.name}</h4>
                <p className="text-gray-400 text-xs">{platform.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
