'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            As a Senior Bubble Developer and Product Manager at Krokit, I led the end-to-end technical lifecycle, 
            working closely with cross-functional teams to ship high-quality features efficiently. My approach to 
            development combines a deep understanding of user needs with technical precision, leveraging tools like 
            Linear for streamlined project management. Previously, at Montra, I honed my skills in API integrations, 
            workflow automation, and front-end technologies like HTML, CSS, and JavaScript/Node.js.
          </p>
          
          <p>
            Beyond my professional roles, I'm a creative problem-solver and independent builder. I've successfully 
            launched side projects like time1s.com, orli.health, and goodjobs.org, which showcase my ability to 
            take ideas from concept to execution. My educational background in computer science provides a solid 
            foundation for tackling complex challenges with a blend of innovation and technical expertise.
          </p>
          
          <p>
            Originally from London, I now work remotely from Spain, combining my professional dedication with a 
            personal passion for endurance sports. As a triathlete and Ironman competitor, I bring the same 
            discipline, resilience, and commitment to my work that I apply to training and racing. This unique 
            combination of technical mastery and determination ensures I deliver results that make a lasting impact.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:stuartbell3011@gmail.com"
            className="inline-flex items-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
