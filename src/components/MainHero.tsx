'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

export default function MainHero() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      initial={{ opacity: 0, y: 100, filter: "blur(3px)" }} // Initial state (before in view)
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Final state when in view
      transition={{ duration: 0.6 }} // Optional transition for smooth animation
      viewport={{ once: true }} // Optional: only trigger the animation once when in view
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3 }}
            className="sm:text-3xl text-2xl md:text-5xl font-bold text-foreground leading-tight"
          >
            Take Control of Your Heart Health with AI-Driven CHD Risk Assessment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5 }}
            className="mt-4 md:text-base text-zinc-400"
          >
            Leverage our AI-powered platform to assess your risk for Coronary Heart Disease (CHD) with advanced data analysis and personalized recommendations for a healthier heart.
          </motion.p>
          {/* <div className="mt-8 flex space-x-4">
            <Button>
             Get Started
              <ChevronRight className=" h-5 w-5" />
            </Button>
            <Button variant="ghost" className=" ">
              Learn More
            </Button>
          </div> */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          <Image
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical professional using tablet"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
