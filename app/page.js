"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  BookOpen,
  Award,
  Users, ArrowDown, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Send, Code2, Database, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, Server, Sparkles, Trophy, X, Zap
} from "lucide-react";

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  Frontend: ["React.js", "Angular", "Next.js", "Redux", "Redux-toolkit", "Tailwind CSS", "ag-Grid"],
  Backend: ["Node.js", "Express.js", "REST APIs", "API Integrations"],
  Databases: ["MySQL", "Database Design & Optimization"],
  "Dev Tools": ["Git", "GitHub", "GitLab", "Visual Studio Code", "Postman"],
  Concepts: ["Data Structures & Algorithms (DSA)", "Agile/Scrum", "MVC Architecture", "Responsive Design"],
};

const experience = [
  {
    company: "iFlex Technologies",
    role: "Software Developer",
    dates: "August 2024 – Present",
    location: "Remote – Noida, Uttar Pradesh, India",
    current: true,
    bullets: [
      "Developed and maintained multiple SaaS-based applications, including Learning Management Systems (LMS) and IELTS test practice platforms, using React.js and Node.js.",
      "Built and enhanced key modules for LMS platforms (Stunel LMS, EDU LMS, Study Abroad LMS), improving scalability and user experience for 1000+ active learners.",
      "Built responsive, reusable UI components using React.js and TypeScript, improving code maintainability and reducing development time for new features.",
      "Designed and developed backend REST APIs using Node.js and Express.js, integrating third-party services to support secure, scalable application workflows.",
      "Implemented dynamic data handling, filtering, and dashboard features, improving usability across LMS and IELTS practice platforms.",
      "Collaborated with cross-functional teams in an Agile environment to deliver new features, bug fixes, and performance improvements on sprint schedules.",
      "Optimized application performance and enforced data security best practices across SaaS-based applications."
    ]
  },
  {
    company: "Leadrat CRM",
    role: "Software Developer",
    dates: "January 2023 – July 2024",
    location: "On-site – Bangalore, Karnataka, India",
    bullets: [
      "Designed and implemented new modules and components in a CRM platform using Angular, enhancing user functionality and experience for enterprise clients.",
      "Improved existing features such as user management and the Project module, applying Angular best practices to boost performance and maintainability.",
      "Implemented state management using Angular services and RxJS to handle complex data flows and ensure consistent state across the application.",
      "Utilized Angular’s two-way data binding to build responsive, interactive user interfaces.",
      "Identified and resolved critical bugs in the Angular application, improving stability and reducing customer-reported issues.",
      "Performed regular maintenance and updates to keep the Angular application current and secure.",
      "Collaborated with product managers, designers, and QA engineers to deliver high-quality Angular features on schedule.",
      "Provided technical support to customers, resolving issues related to CRM usage and functionality."
    ]
  }
];

const projects = [
  { title: "SaaS-based Learning Management System (LMS)", number: "01", icon: BriefcaseBusiness, description: "A scalable SaaS LMS enabling institutions to manage courses, students, and assessments on a centralized platform.", details: ["Dynamic dashboards for course management, assignment submissions, and progress tracking for students and instructors.", "Secure authentication, role-based access control, and API-based data handling for a seamless user experience."], tech: ["React.js", "Redux-toolkit", "Tailwind CSS", "REST APIs"] },
  { title: "IELTS Online Examination Platform", number: "02", icon: Code2, description: "A full-stack IELTS mock examination platform with real-time test-taking and scoring.", details: ["Admin dashboards for managing tests and tracking student performance.", "Customizable admin panel for instructors to create, update, and manage questions, answers, and complete test modules dynamically."], tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"] },
  { title: "Study Abroad Consultancy Platform", number: "03", icon: GraduationCap, description: "A responsive study abroad consultancy platform built with Next.js.", details: ["University, course, and test preparation modules.", "Integrated counselling inquiry and consultation workflows."], tech: ["Next.js", "Tailwind CSS", "REST APIs"] }
];

const education = [
  { title: "Bachelor of Science in Computer Application", place: "St. Xavier’s College, Ranchi", date: "June 2019 – June 2022", location: "Ranchi, Jharkhand, India" },
  { title: "Intermediate (10+2), PCM", place: "Suryanarayan Inter College", date: "Mar 2015 – Mar 2017", location: "Aurangabad, Bihar, India" },
  { title: "Secondary School (10th)", place: "Mahesh Academy", date: "Mar 2015", location: "Aurangabad, Bihar, India" }
];

function Section({ id, eyebrow, title, children }) {
  return <section id={id} className="relative mx-auto max-w-7xl scroll-mt-8 px-5 md:py-24 py-16 md:px-8">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7 }}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
    </motion.div>
    {children}

    <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
  </section>;
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: .001 });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  const nav = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];
  const go = (item) => { setOpen(false); document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); };

  return <main className="overflow-hidden">
    <motion.div className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400" style={{ scaleX }} />

    <nav className="fixed left-0 right-0 top-0 z-50 px-2 pt-1.5 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Navbar */}
        <div
          className="
        relative flex items-center justify-between
        md:rounded-2xl rounded-xl border border-white/10
        bg-slate-950/70 px-4 py-3
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        backdrop-blur-2xl
        md:px-5
      "
        >
          {/* Gradient border glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-transparent to-violet-500/20 blur-xl" />

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative flex items-center gap-1 font-mono text-xl font-black tracking-tight"
            aria-label="Go to top"
          >
            <span className="text-cyan-300 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-cyan-200">
              S
            </span>

            <span className="text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
              /
            </span>

            <span className="text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-200">
              S
            </span>

            {/* Small glow */}
            <span className="absolute -inset-2 -z-10 rounded-full bg-cyan-400/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1 md:flex">
            {nav.map((n) => (
              <button
                key={n}
                onClick={() => go(n)}
                className="
                cursor-pointer
              group relative rounded-full px-4 py-2
              text-sm font-medium text-slate-400
              transition-all duration-300
              hover:bg-white/[0.06]
              hover:text-white
            "
              >
                {/* Active/hover glow */}
                <span
                  className="
                absolute inset-x-3 bottom-1 h-px
                origin-center scale-x-0
                bg-gradient-to-r from-cyan-300 to-violet-400
                opacity-0
                transition-all duration-300
                group-hover:scale-x-100
                group-hover:opacity-100
              "
                />

                <span className="relative">{n}</span>
              </button>
            ))}
          </div>

          {/* Let's Talk */}
          <a
            href="mailto:raj34828@gmail.com"
            className="
          group relative hidden overflow-hidden
          rounded-full border border-cyan-300/20
          bg-gradient-to-r from-cyan-400/10 to-violet-500/10
          px-5 py-2.5
          text-xs font-semibold text-cyan-100
          shadow-[0_0_20px_rgba(34,211,238,0.08)]
          transition-all duration-300
          hover:border-cyan-300/40
          hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
          md:block
        "
          >
            {/* Hover shine */}
            <span
              className="
            absolute inset-0 -translate-x-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
          "
            />

            <span className="relative flex items-center gap-2">
              Let’s talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="
          rounded-xl border border-white/10
          bg-white/[0.04] p-2
          text-slate-300
          transition-all duration-300
          hover:border-white/20
          hover:bg-white/[0.08]
          hover:text-white
          md:hidden
        "
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
        mt-2 overflow-hidden rounded-2xl
        border border-white/10
        bg-slate-950/90
        shadow-[0_15px_50px_rgba(0,0,0,0.4)]
        backdrop-blur-2xl
        transition-all duration-300
        md:hidden
        ${open
              ? "max-h-[500px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
      `}
        >
          <div className="p-2">
            {nav.map((n, index) => (
              <button
                key={n}
                onClick={() => go(n)}
                className="
              group flex w-full items-center
              justify-between rounded-xl
              px-4 py-3.5
              text-left text-sm font-medium
              text-slate-300
              transition-all duration-300
              hover:bg-white/[0.06]
              hover:text-white
            "
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-600 transition-colors group-hover:text-cyan-300">
                    0{index + 1}
                  </span>

                  {n}
                </span>

                <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="mt-2 border-t border-white/5 pt-2">
              <a
                href="mailto:raj34828@gmail.com"
                className="
              flex items-center justify-center gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-400/10
              to-violet-500/10
              px-4 py-3
              text-sm font-semibold
              text-cyan-200
              transition-all duration-300
              hover:from-cyan-400/20
              hover:to-violet-500/20
            "
              >
                Let’s talk
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section className="relative flex min-h-screen items-center px-5 md:pt-10 pt-6 md:px-8">
      <div className="absolute inset-0 -z-20 bg-[#05070d]" />
      <motion.div style={{ y }} className="absolute inset-0 -z-10 bg-cover bg-center opacity-70" style={{ backgroundImage: "url(/tech-bg.png)" }} aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_40%,rgba(5,7,13,.15),#05070d_72%)]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="font-mono text-xs font-medium tracking-[0.2em] text-cyan-300">
              FULL STACK SOFTWARE DEVELOPER
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 md:ms-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs text-cyan-200"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" /> Available for new opportunities</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .8 }} className="max-w-5xl text-5xl font-black leading-[.94] tracking-[-.055em] sm:text-7xl md:text-8xl">Shashi <span className="text-gradient">Suman</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }} className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">3.5+ years building scalable, production-grade web applications across SaaS, LMS and CRM products — from polished interfaces to reliable APIs.</motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">View projects <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href="mailto:raj34828@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"><Mail size={17} /> Contact me</a>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400"><span className="inline-flex items-center gap-2"><MapPin size={15} /> Bangalore, Karnataka</span><span className="inline-flex items-center gap-2"><Code2 size={15} /> React • Next.js • Node.js</span></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .9, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: .15 }} className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -inset-8 rounded-[40%] bg-cyan-300/10 blur-3xl" />
          <div className="glass glow relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900"><img src="/profile.png" alt="Shashi Suman" className="h-full w-full object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-[#070a11] via-transparent to-transparent" /></div>
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[.25em] text-cyan-300">Software Developer</p><p className="mt-1 text-xl font-bold">Building digital products</p></div><Sparkles className="text-violet-300" /></div>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="absolute md:bottom-7 bottom-0 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-white"><ArrowDown className="animate-bounce" /></a>
    </section>

    <Section id="about" eyebrow="01 / Profile" title="Engineering with product thinking.">
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <div className="glass rounded-xl md:rounded-3xl p-7 md:col-span-2"><p className="text-lg leading-8 text-slate-300">Full Stack Software Developer with 3.5+ years of experience designing and building scalable, production-grade web applications using React.js, Angular, Next.js, Node.js, TypeScript, and MySQL. Proven track record delivering SaaS platforms, Learning Management Systems (LMS), and CRM solutions, including REST API design, third-party integrations, state management (Redux, Redux-toolkit, RxJS), and performance optimization.</p><p className="mt-5 leading-7 text-slate-400">Strong foundation in Data Structures and Algorithms, with hands-on experience in Agile/Scrum development, cross-functional collaboration, and end-to-end feature ownership.</p></div>
        <div className="glass rounded-xl md:rounded-3xl p-7"><div className="mb-8 flex items-center gap-3"><Zap className="text-cyan-300" /><span className="font-semibold">Core strengths</span></div><ul className="space-y-5 text-sm text-slate-300">{["End-to-end feature ownership", "Scalable SaaS applications", "REST API & integrations", "Performance optimization", "Agile/Scrum collaboration"].map(x => <li key={x} className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-300" />{x}</li>)}</ul></div>
      </div>
    </Section>

    <Section id="experience" eyebrow="02 / Experience" title="3.5+ years shipping real products.">
      <div className="relative mt-14 ml-2 border-l border-white/10 pl-7 md:ml-8 md:pl-12">
        {experience.map((job, i) => <motion.article key={job.company} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay: i * .1 }} className="relative mb-14 last:mb-0">
          <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#05070d] md:-left-[58px]" />
          <div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-start"><div><div className="flex flex-wrap items-center gap-3"><h3 className="text-2xl font-bold">{job.company}</h3>{job.current && <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-cyan-200">Current</span>}</div><p className="mt-1 text-cyan-300">{job.role}</p></div><div className="text-sm text-slate-500 md:text-right"><p>{job.dates}</p><p className="mt-1">{job.location}</p></div></div>
          <div className="glass rounded-xl md:rounded-3xl p-6 md:p-8"><ul className="grid gap-4 md:grid-cols-2">{job.bullets.map(b => <li key={b} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />{b}</li>)}</ul></div>
        </motion.article>)}
      </div>
    </Section>

    <Section id="projects" eyebrow="03 / Selected work" title="Products built to solve real workflows.">
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = p.icon; return <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, delay: i * .08 }} whileHover={{ y: -7 }} className="group glass glow flex min-h-[480px] flex-col rounded-[2rem] p-7 transition-shadow hover:shadow-[0_25px_80px_rgba(85,230,255,.09)]">
            <div className="flex items-start justify-between"><div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-3 text-cyan-300"><Icon size={23} /></div><span className="font-mono text-xs text-slate-600">{p.number}</span></div>
            <h3 className="mt-8 text-2xl font-bold leading-tight">{p.title}</h3><p className="mt-4 text-sm leading-6 text-slate-400">{p.description}</p>
            <ul className="mt-6 space-y-3">{p.details.map(d => <li key={d} className="text-sm leading-6 text-slate-300">{d}</li>)}</ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">{p.tech.map(t => <span key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-400">{t}</span>)}</div>
          </motion.article>
        })}
      </div>
    </Section>

    <Section id="skills" eyebrow="04 / Toolkit" title="A practical full-stack toolkit.">
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items], i) => <motion.div key={group} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="glass rounded-xl md:rounded-3xl p-6"><div className="mb-5 flex items-center justify-between"><h3 className="font-semibold">{group}</h3>{group === "Backend" ? <Server size={17} className="text-violet-300" /> : group === "Databases" ? <Database size={17} className="text-violet-300" /> : <Code2 size={17} className="text-cyan-300" />}</div><div className="flex flex-wrap gap-2">{items.map(s => <span key={s} className="rounded-lg bg-white/[.045] px-3 py-2 text-xs text-slate-300 ring-1 ring-white/[.06]">{s}</span>)}</div></motion.div>)}
      </div>
    </Section>

    <Section
      id="education"
      eyebrow="05 / Education & growth"
      title="Learning never stopped after graduation."
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Education Timeline */}
        <div className="relative space-y-5">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-cyan-300/50 via-violet-300/30 to-transparent sm:block" />

          {education.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl md:rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06] hover:shadow-[0_15px_45px_rgba(34,211,238,0.08)] sm:p-6"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-300/15">
                  <GraduationCap size={23} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-white">
                        {e.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-cyan-300">
                        {e.place}
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-400">
                      {e.date}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={13} />
                    <span>{e.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Learning Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden md:rounded-[2rem] rounded-[1rem] border border-violet-300/20 bg-gradient-to-br from-violet-300/[0.12] via-white/[0.045] to-cyan-300/[0.08] p-6 shadow-[0_20px_80px_rgba(139,92,246,0.08)] sm:p-8"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                  <BookOpen size={13} />
                  Featured learning
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Newton School
                  <span className="block text-violet-200">
                    Coding Bootcamp
                  </span>
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  June 2022 – January 2023 · Remote, Bangalore, India
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-violet-200 sm:flex">
                <Code2 size={22} />
              </div>
            </div>

            {/* Training summary */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Completed intensive Full Stack Web Development training covering
                Data Structures & Algorithms using Java, HTML, CSS, JavaScript,
                and React.js.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Java",
                  "DSA",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                  <Award size={17} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Certifications
                  </p>
                  <h4 className="mt-1 font-semibold text-white">
                    Verified learning milestones
                  </h4>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Certified Web Developer – Eshuzo Global Technologies",
                  "Algorithmic Toolbox – Coursera",
                ].map((certificate) => (
                  <div
                    key={certificate}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-emerald-300"
                    />
                    <span>{certificate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Co-curricular activities */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Users size={17} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Co-curricular activities
                  </p>
                  <h4 className="mt-1 font-semibold text-white">
                    Beyond the classroom
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-6 text-slate-300">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <p>
                    Actively participated in coding competitions hosted by Newton
                    School.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <p>
                    Solved 150+ Data Structures & Algorithms problems across
                    multiple competitive programming platforms.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <p>
                    Served as Team Leader at Viral Fission, a youth community
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>

    <Section
      id="contact"
      eyebrow="06 / Contact"
      title="Let’s build something useful."
    >
      {/* Main Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mt-12 overflow-hidden md:rounded-[2rem] rounded-[1rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.12] via-white/[0.035] to-violet-300/[0.12] p-6 shadow-[0_25px_90px_rgba(34,211,238,0.08)] sm:p-8 md:p-12"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
              Available for opportunities
            </div>

            <h3 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Open to opportunities where I can build
              <span className="block bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-transparent">
                high-quality digital products.
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Whether you have a project idea, a full-time opportunity, or simply
              want to connect, feel free to reach out. I’m always open to meaningful
              conversations and interesting challenges.
            </p>

            {/* Contact Details */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:raj34828@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.07]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 transition group-hover:scale-110">
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </span>
                  <span className="mt-1 block truncate text-sm font-medium text-slate-200 group-hover:text-cyan-200">
                    raj34828@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:8409680456"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[0.07]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200 transition group-hover:scale-110">
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-200 group-hover:text-violet-200">
                    8409680456
                  </span>
                </span>
              </a>

              <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 transition-all duration-300 hover:border-emerald-300/30 hover:bg-emerald-300/[0.07] sm:col-span-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300 transition group-hover:scale-110">
                  <MapPin size={17} />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">
                    Bangalore, Karnataka
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right CTA Panel */}
          <div className="relative rounded-xl md:rounded-3xl border border-white/10 bg-black/15 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <Send size={23} />
            </div>

            <h4 className="mt-6 text-2xl font-bold text-white">
              Have an idea?
            </h4>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Let’s discuss how we can turn your idea into a reliable, beautiful,
              and useful product.
            </p>

            <a
              href="mailto:raj34828@gmail.com"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-[0_15px_35px_rgba(34,211,238,0.2)]"
            >
              Start a conversation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <p className="mt-4 text-center text-xs text-slate-600">
              Usually responds within 24–48 hours
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Shashi Suman. Built with Next.js, Tailwind
          CSS & Motion.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="mailto:raj34828@gmail.com"
            aria-label="Send email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-300"
          >
            <Mail size={17} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/10 hover:text-violet-200"
          >
            <Github size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/shashi-suman-6b614320a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </Section>
  </main>;
}
