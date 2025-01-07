'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, GraduationCap, Rocket } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Ironman Finisher",
      description:
        "Completed multiple Ironman events, pushing physical and mental boundaries",
    },
    {
      icon: GraduationCap,
      title: "First Class Bachelor's Degree",
      description: "Graduated with honors in Computer Science",
    },
    {
      icon: Rocket,
      title: "Digital Product Expert",
      description: "Launch and manage digital products",
    },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-6 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 -z-10"
      />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Achievements
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Combining technical expertise with athletic discipline to achieve
          exceptional results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="relative group hover:shadow-lg transition-all duration-300"
            id={`eozy7d_${index}`}
          >
            <CardContent className="p-6 text-center" id={`h6vtyf_${index}`}>
              <div
                className="mb-4 inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20"
                id={`spzw72_${index}`}
              >
                <achievement.icon
                  className="h-6 w-6 text-primary"
                  id={`b3btwk_${index}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2" id={`b3yezk_${index}`}>
                {achievement.title}
              </h3>
              <p className="text-muted-foreground" id={`wr791y_${index}`}>
                {achievement.description}
              </p>
            </CardContent>
            <div
              className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"
              id={`vy26bv_${index}`}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
