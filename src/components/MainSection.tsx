'use client';
import { motion } from "framer-motion";
import Banner from "@/components/ui/banner";
import { Button } from "./ui/button";

export default function MainSection() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-2 h-full">
            <Banner />
            <motion.h1
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.3 }}
                className="md:text-7xl text-4xl md:w-3/4 text-center font-bold text-foreground mb-4"
            >
                Predict Your Risk of <span className="text-primary">Coronary Heart Disease</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.6 }}
                className="text-zinc-400 sm:text-lg text-base mb-6 text-center"
            >
                Assess your risk of CHD with advanced, data-driven insights and take proactive steps toward a healthier heart.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.8 }}
                className="flex gap-3"
            >
                <Button size="lg">Assess Your Risk</Button>
                <Button size="lg" variant="ghost">How It Works</Button>
            </motion.div>
        </div>
    );
}