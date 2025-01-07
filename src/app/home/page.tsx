'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "../(components)/hero-section";
import { ProjectsShowcase } from "../(components)/projects-showcase";
import { AchievementsSection } from "../(components)/achievements-section";
import { TestimonialsSection } from "../(components)/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ProjectsShowcase />
      <AchievementsSection />
      <TestimonialsSection />

      <section className="container py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's combine technical expertise with the determination of an athlete
          to create exceptional digital experiences.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white"
        >
          Let's Work Together
        </Button>
      </section>
    </div>
  );
}
