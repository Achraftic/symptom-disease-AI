import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function MainHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
        AI-Powered Symptom Analysis for Smarter Healthcare
        </h1>
        <p className="mt-4 text-base text-zinc-400">
        Our AI-driven platform helps you analyze symptoms instantly, providing accurate insights and recommendations for better healthcare decisions.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button >
           Get Started
            <ChevronRight className=" h-5 w-5" />
          </Button>
          <Button  variant="ghost" className=" ">
            
            Learn More
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
          alt="Medical professional using tablet"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </section>
  )
}
