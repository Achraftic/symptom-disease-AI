import { ArrowRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="dark px-4 py-3 text-foreground/80"
    >
      <p className="flex text-center group-hover:text-zinc-50 group justify-center md:text-sm text-xs">
        <a href="#symptom-checker">
          <span className="me-1 leading-none">✨</span>
          Explore how our AI-driven CHD risk assessment can empower your heart health decisions
          <ArrowRight
            className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </a>
      </p>
    </motion.div>
  );
}