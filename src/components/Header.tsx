'use client'
import React, { useState } from 'react'
import { Activity, Menu, Search, User, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { routes } from '@/router';
import { usePathname } from 'next/navigation'
;
import clsx from 'clsx';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md  ">
            
            <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo and Navigation */}
                <div
                    
                   
                >
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Activity className="h-8 w-8 text-blue-600" />
                        <span className="text-xl font-bold text-gray-900">HealthAI</span>
                    </div>
                    {/* Desktop Navigation */}
                </div>
                    <div className="hidden md:flex space-x-8 ">

                        {routes.map((route, index) =>
                            <Link
                                key={index}
                                href={route.path}
                                className= {clsx("hover:text-primary transition-colors relative",pathname===route.path && "text-primary font-medium")} 
                            >
                                {route.label}
                               
                             {pathname===route.path && <motion.span  layoutId="ligne_relative" transition={{ type: 'spring', stiffness: 250, damping: 20 }}     className=' h-0.5 w-3/4 bg-primary absolute -bottom-1 left-0 rounded-full '></motion.span>}   
                            </Link>
                        )
                        
                    }

                    </div>

                {/* Actions and Mobile Menu Toggle */}
            
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
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}

                    className="md:hidden shadow-lg shadow-gray-200/30"
                >
                    <div className="px-4 py-6 space-y-4">

                        {routes.map((route, index) =>
                            <Link
                                key={index}
                                href={route.path}
                                className={clsx("block py-2 hover:text-primary transition-colors",pathname===route.path && "text-primary font-medium")} 
                            >
                                {route.label}
                            </Link>
                        )

                        }

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
