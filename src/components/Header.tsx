'use client'
import React, { useState } from 'react'
import { Activity, Menu, Search, User, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md  ">
            <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo and Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-12"
                >
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">HealthAI</span>
          </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            href={"/"}
                            className="hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/symptom-checker"}
                            className="hover:text-primary transition-colors"
                        >
                            Symptom Checker
                        </Link>
                        <a
                            href="#diseases"
                            className="hover:text-primary transition-colors"
                        >
                            Diseases
                        </a>
                        <a
                            href="#about"
                            className="hover:text-primary transition-colors"
                        >
                            About Us
                        </a>
                    </div>
                </motion.div>

                {/* Actions and Mobile Menu Toggle */}
                <div className="hidden md:flex items-center gap-6">
                    <Search
                        className="w-5 h-5 hover:text-primary cursor-pointer transition-colors"

                    />
                    <User
                        className="w-5 h-5 hover:text-primary cursor-pointer transition-colors"

                    />
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-zinc-900 border-b border-white/10"
                >
                    <div className="px-4 py-6 space-y-4">
                        <a
                            href="#symptom-checker"
                            className="block py-2 hover:text-primary transition-colors"
                        >
                            Symptom Checker
                        </a>
                        <a
                            href="#diseases"
                            className="block py-2 hover:text-primary transition-colors"
                        >
                            Diseases
                        </a>
                        <a
                            href="#about"
                            className="block py-2 hover:text-primary transition-colors"
                        >
                            About Us
                        </a>
                        <div className="flex gap-4 pt-4">
                            <Search className="w-5 h-5" />
                            <User className="w-5 h-5" />
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    )
}
