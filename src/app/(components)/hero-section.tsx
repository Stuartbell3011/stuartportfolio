'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-8 py-20"
    >
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-6">
          Expert Bubble Developer | Product Manager | Athlete
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
        I’m an experienced Bubble.io developer and product manager with over four years of expertise in building innovative, user-centric solutions. My passion lies in creating scalable, responsive applications that deliver seamless user experiences. I thrive in fast-paced environments where I can apply my technical skills and leadership to drive impactful results.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a href="mailto:stuartbell3011@gmail.com">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white"
            >
              Contact me
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/stuart-bell-2a333028/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      <div className="flex-1 relative">
        <div
          className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 p-1 overflow-hidden"
        >
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
          >
            <img
              src="/ironman-finisher.png"
              alt="Stuart Bell Ironman Finisher"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div
          className="absolute -bottom-4 -right-4 bg-background border border-border p-4 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full bg-green-500"
            ></div>
            <span className="text-sm font-medium">
              Available for Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
