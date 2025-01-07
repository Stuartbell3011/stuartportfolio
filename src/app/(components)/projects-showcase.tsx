'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function ProjectsShowcase() {
  const projects = [
    {
      title: "time1s.com",
      description: "A comprehensive timing solution built with Bubble",
      image: "/time1s-platform.png",
      tags: ["Bubble", "Healthcare", "SaaS"],
      link: "https://time1s.com",
    },
    {
      title: "orli.health",
      description: "Healthcare platform revolutionizing patient care",
      image: "/orli-health.png",
      tags: ["Healthcare", "Bubble", "Workflow Automation"],
      link: "https://orli.health",
    },
    {
      title: "goodjobs.org",
      description: "Non-profit job board connecting talent with purpose",
      image: "/goodjobs.png",
      tags: ["Bubble", "Non-profit", "Job Board", "Community"],
      link: "https://goodjobs.me.uk",
    },
    {
      title: "Montra",
      description: "Create professional-quality videos in minutes, powered by AI.",
      image: "/montra-platform.png",
      tags: ["Bubble", "Video Editing"],
      link: "#",
    },
    {
      title: "Krokit",
      description: "The platform for franchise entrepreneurs",
      image: "/krokit-platform.png",
      tags: ["Franchise", "Management", "Bubble"],
      link: "#",
    },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover some of my recent work in Bubble development and product
          management
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300"
            id={`amc90k_${index}`}
          >
            <CardHeader className="p-0" id={`2kh3jv_${index}`}>
              <div className="relative overflow-hidden" id={`ej7e16_${index}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  id={`rsq74o_${index}`}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                  id={`h4c8oy_${index}`}
                >
                  <div className="flex gap-2" id={`cshvau_${index}`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400"
                      id={`rqb81g_${index}`}
                    >
                      <ExternalLink
                        className="h-5 w-5"
                        id={`sdk8pp_${index}`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6" id={`4a2eo3_${index}`}>
              <CardTitle className="mb-2" id={`yzsccz_${index}`}>
                {project.title}
              </CardTitle>
              <p className="text-muted-foreground mb-4" id={`1iim2n_${index}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2" id={`hwkqi7_${index}`}>
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    id={`y6051c_${index}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
