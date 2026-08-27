import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main className="flex flex-col gap-12 sm:gap-20">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
