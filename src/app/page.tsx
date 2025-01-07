'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "./(components)/hero-section";
import { ProjectsShowcase } from "./(components)/projects-showcase";
import { AchievementsSection } from "./(components)/achievements-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full">
        <HeroSection />
        <ProjectsShowcase />
        <AchievementsSection />

        <section className="container mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your next big idea to life. Whether it's a
            web application, mobile app, or enterprise solution, I'm here to help.
          </p>
          <a href="mailto:stuartbell3011@gmail.com">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              Get in Touch
            </Button>
          </a>
        </section>
      </div>
    </main>
  );
}
