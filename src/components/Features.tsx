/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useRef } from 'react';
import { FeatureCard } from './FeatureCard';
import { Brain, Activity, Calendar, MessageSquare, Shield, Clock } from 'lucide-react';
import { useAnimate, motion } from 'framer-motion';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "AI-Powered Diagnosis",
    description: "Our advanced AI model analyzes symptoms and medical history to provide accurate preliminary diagnoses.",
    is_active: true,
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Easy Scheduling",
    description: "Book appointments with healthcare providers instantly through our intuitive platform.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "24/7 Chat Support",
    description: "Get immediate responses to your health concerns through our AI chatbot.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Secure & Private",
    description: "Your health data is protected with enterprise-grade security and encryption.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Instant Access",
    description: "No more waiting rooms. Get medical attention when you need it most.",
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: "Health Monitoring",
    description: "Track your health progress and receive personalized recommendations.",
  }
];

export default function Features() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate([
      [scope.current, { opacity: 1, y: 0 }],
   
    ]);

    controls.speed = 0.6;

    return () => controls.stop();
  }, [animate, scope]);

  return (
    <section className="py-20" id="features">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose HealthAI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8" ref={scope}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: '30' }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                is_active={feature.is_active}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
