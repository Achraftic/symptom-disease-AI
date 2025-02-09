import React from 'react'
import { FeatureCard } from './FeatureCard'
import { Brain } from 'lucide-react'
import {
  Activity,
  Calendar,
  MessageSquare,
  Shield,
  Clock,
} from 'lucide-react';
export default function Features() {
    return (
        <section className=" py-20" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Why Choose HealthAI?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        is_active={true}
                        icon={<Brain className="h-8 w-8 text-white" />}
                        title="AI-Powered Diagnosis"
                        description="Our advanced AI model analyzes symptoms and medical history to provide accurate preliminary diagnoses."
                    />
                    <FeatureCard
                        icon={<Calendar className="h-8 w-8 text-primary" />}
                        title="Easy Scheduling"
                        description="Book appointments with healthcare providers instantly through our intuitive platform."
                    />
                    <FeatureCard
                        icon={<MessageSquare className="h-8 w-8 text-primary" />}
                        title="24/7 Chat Support"
                        description="Get immediate responses to your health concerns through our AI chatbot."
                    />
                    <FeatureCard
                        icon={<Shield className="h-8 w-8 text-primary" />}
                        title="Secure & Private"
                        description="Your health data is protected with enterprise-grade security and encryption."
                    />
                    <FeatureCard
                        icon={<Clock className="h-8 w-8 text-primary" />}
                        title="Instant Access"
                        description="No more waiting rooms. Get medical attention when you need it most."
                    />
                    <FeatureCard
                        icon={<Activity className="h-8 w-8 text-primary" />}
                        title="Health Monitoring"
                        description="Track your health progress and receive personalized recommendations."
                    />
                </div>
            </div>
        </section>
    )
}
