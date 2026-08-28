'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView, circOut } from 'framer-motion';


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stats = [
  { value: 47, label: 'Active Members' },
  { value: 8, label: 'Projects Completed' },
  { value: 6, label: 'Beneficiaries Supported' },
];

const events = [
  {
    date: 'Sept 12, 2026',
    title: 'Beach Cleanup Drive',
    description:
      'Join us as we head to the coastline to clean up debris and protect local marine life.',
  },
  {
    date: 'Sept 20, 2026',
    title: 'Leadership Workshop',
    description:
      'A hands-on session focused on building leadership skills for aspiring student organizers.',
  },
  {
    date: 'Oct 3, 2026',
    title: 'General Assembly',
    description:
      'Our quarterly gathering to align on goals, celebrate wins, and plan upcoming initiatives.',
  },
];

const announcements = [
  {
    label: 'Upcoming Meeting',
    title: 'General Assembly',
    detail: 'Friday at 4:00 PM in the Main Auditorium.',
  },
  {
    label: 'Registration Deadline',
    title: 'Leadership Workshop Signup',
    detail: 'Sign up before spots fill up — deadline this Friday.',
  },
  {
    label: 'Event Reminder',
    title: 'Beach Cleanup Drive',
    detail: "Don't forget to bring gloves and a reusable water bottle!",
  },
];

function Counter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
  if (isInView) {
    const controls = animate(count, target, {
      duration: 1, // Slightly longer duration so you can feel the slow-down
      ease: circOut, // Starts super fast and heavily decelerates at the end
    });
    return controls.stop;
  }
}, [isInView, count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <Image
            src="/scs-logo.jpg"
            width={96}
            height={96}
            className="rounded-full mx-auto border-2 border-white/20"
            alt="SCS Logo"
          />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight">
            Service and Citizenship Society
          </h1>
          <p className="mt-4 text-lg md:text-xl text-rose-500 font-medium">
            Serving Others, Inspiring Change.
          </p>
          <p className="mt-6 text-stone-300 text-base md:text-lg leading-relaxed">
            The Service and Citizenship Society empowers students to create
            meaningful change through service, leadership, and community
            engagement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#cd4f61] hover:bg-rose-400 transition-colors text-white font-semibold px-8 py-3 rounded-full">
              Join SCS
            </button>
            <button className="bg-stone-800 hover:bg-stone-700 transition-colors text-white font-semibold px-8 py-3 rounded-full">
              View Events
            </button>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#cd4f61] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            >
              <p className="text-4xl md:text-5xl font-bold text-white">
                <Counter target={stat.value} />
              </p>
              <p className="mt-2 text-rose-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
        
      {/* Featured Events Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12"
          >
            Featured Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-44 bg-stone-200 flex items-center justify-center text-stone-400 text-sm">
                  Event Image
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-rose-600">
                    {event.date}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-stone-900">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <button className="mt-5 bg-stone-900 hover:bg-stone-800 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section className="bg-stone-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12"
          >
            Latest Announcements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                className="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#cd4f61]">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12"
          >
            Gallery Preview
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="aspect-square bg-stone-200 rounded-xl flex items-center justify-center text-stone-400 text-sm transition-transform duration-300 hover:scale-105"
              >
                Photo {i}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a  href="https://example.com/"
              className="text-[#cd4f61] font-semibold hover:text-rose-400 transition-colors">
            
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 py-20 px-6 text-center">
        <motion.div
          {...fadeUp}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Make an Impact?
          </h2>
          <p className="mt-4 text-stone-300">
            Get involved today and be part of a community driving real change.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#cd4f61] hover:bg-rose-700 transition-colors text-white font-semibold px-7 py-3 rounded-full">
              Join SCS
            </button>
            <button className="bg-stone-800 hover:bg-stone-700 transition-colors text-white font-semibold px-7 py-3 rounded-full">
              View Upcoming Events
            </button>
            <button className="bg-white text-stone-900 hover:bg-stone-100 transition-colors font-semibold px-7 py-3 rounded-full">
              Explore Gallery
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};