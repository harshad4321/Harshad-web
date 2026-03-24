/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X,
  Code,
  Briefcase,
  User,
  Send,
  Download
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold text-brand-primary tracking-tighter">
            HARSHAD<span className="text-brand-accent">.N</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent rounded-full">
              Available for Hire
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary leading-tight mb-6">
              Building Digital <br />
              <span className="text-brand-accent">Experiences</span> with Purpose.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              BCA Graduate | Developer | Aspiring Business Development Professional. 
              I bridge the gap between complex technology and business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                View Projects <ChevronRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-slate-200 text-brand-primary font-bold rounded-lg hover:border-brand-primary transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative z-10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/harshad/800/800" 
                alt="Harshad N" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-200 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-8 flex items-center gap-3">
                <User className="text-brand-accent" /> About Me
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  I am a BCA graduate with a deep passion for both software development and business growth. 
                  My journey started with a curiosity for how code can solve real-world problems, which led me 
                  to master the MERN stack and various modern web technologies.
                </p>
                <p>
                  What sets me apart is my dual focus: I don't just build features; I understand the business 
                  value behind them. My background in safety officer internships and freelance development 
                  has honed my communication, client handling, and problem-solving skills.
                </p>
                <p>
                  My goal is to transition into a Business Development role where I can leverage my technical 
                  expertise to drive strategic growth and build meaningful client relationships.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-4xl font-bold text-brand-accent mb-2">2+</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-8">
                <h3 className="text-4xl font-bold text-brand-accent mb-2">10+</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Projects Done</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-4xl font-bold text-brand-accent mb-2">5+</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-8">
                <h3 className="text-4xl font-bold text-brand-accent mb-2">100%</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-4">My Expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A balanced mix of technical prowess and business acumen.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((category) => (
              <div key={category.title} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-primary mb-8 flex items-center gap-3">
                  {category.title === 'Technical Skills' ? <Code className="text-brand-accent" /> : <Briefcase className="text-brand-accent" />}
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-5 py-2.5 bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-100 hover:border-brand-accent hover:text-brand-accent transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Journey</h2>
            <p className="text-slate-400">My evolution from an intern to a versatile developer.</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 gap-8">
                  <div className="mb-4 md:mb-0">
                    <p className="text-brand-accent font-bold text-lg">{exp.duration}</p>
                  </div>
                  <div className="md:col-span-3 pb-12 border-l-2 border-slate-800 pl-8 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-slate-400 font-medium mb-6">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="text-brand-accent mt-1.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-4">Featured Projects</h2>
              <p className="text-slate-500">Real-world solutions built with modern tech stacks.</p>
            </div>
            <a href="#" className="text-brand-accent font-bold flex items-center gap-2 hover:underline">
              View all on GitHub <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} className="p-3 bg-white text-brand-primary rounded-full hover:bg-brand-accent hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-white text-brand-primary rounded-full hover:bg-brand-accent hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-100 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex gap-4">
                    <a href={project.liveUrl} className="text-sm font-bold text-brand-primary flex items-center gap-1 hover:text-brand-accent">
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a href={project.githubUrl} className="text-sm font-bold text-brand-primary flex items-center gap-1 hover:text-brand-accent">
                      Source Code <Github size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-6">Let's Connect</h2>
              <p className="text-lg text-slate-600 mb-10">
                Whether you have a project in mind, a job opportunity, or just want to say hi, 
                feel free to reach out. I'm always open to discussing new ideas.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                    <a href="mailto:harshad.n4321@gmail.com" className="text-brand-primary font-bold hover:text-brand-accent">harshad.n4321@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Me</p>
                    <a href="tel:+910000000000" className="text-brand-primary font-bold hover:text-brand-accent">+91 000 000 0000</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                    <a href="#" className="text-brand-primary font-bold hover:text-brand-accent">linkedin.com/in/harshad-n</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-brand-accent focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-brand-primary text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium">
            © 2026 Harshad N. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Mail size={20} /></a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-brand-accent hover:text-white transition-all"
          >
            <ChevronRight size={20} className="-rotate-90" />
          </button>
        </div>
      </footer>
    </div>
  );
}
