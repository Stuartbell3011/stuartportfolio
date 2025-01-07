'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Stuart's expertise in Bubble development helped us launch our platform months ahead of schedule.",
      author: "Alex Johnson",
      role: "CTO at TechStart",
      avatar: "https://picsum.photos/seed/alex/200/200",
    },
    {
      quote:
        "His unique combination of technical skills and athletic mindset brings a fresh perspective to product management.",
      author: "Sarah Chen",
      role: "Product Lead at InnovateCo",
      avatar: "https://picsum.photos/seed/sarah/200/200",
    },
    {
      quote:
        "Working with Stuart was a game-changer for our project. His attention to detail is unmatched.",
      author: "Michael Rodriguez",
      role: "Founder at HealthTech",
      avatar: "https://picsum.photos/seed/michael/200/200",
    },
  ];

  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          What People Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Feedback from clients and colleagues about our work together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative" id={`c3m2qe_${index}`}>
            <CardContent className="p-6" id={`0kd4tz_${index}`}>
              <Quote
                className="h-8 w-8 text-primary/20 mb-4"
                id={`94mv6u_${index}`}
              />
              <p className="text-muted-foreground mb-6" id={`srwlx3_${index}`}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4" id={`1oxhri_${index}`}>
                <Avatar id={`yjsnxm_${index}`}>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    id={`y1rnjr_${index}`}
                  />

                  <AvatarFallback id={`967lc0_${index}`}>
                    {testimonial.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div id={`qpfajx_${index}`}>
                  <p className="font-medium" id={`kye4zz_${index}`}>
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    id={`pugr7m_${index}`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
