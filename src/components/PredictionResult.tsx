import React, { Ref } from 'react';
import { motion } from "framer-motion";
import { ChartPrediction } from './ui/ChartPrediction';

interface PredictionResultProps {
    result: string | null;
    error: string | null;
    resultRef?: Ref<HTMLDivElement>;
}

export default function PredictionResult({ result, error, resultRef }: PredictionResultProps) {
    return (
        <div>
        <motion.div
            ref={resultRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-10 px-4 pb-10 pt-5 rounded-md w-full max-w-md shadow-lg ${
                error
                    ? "bg-red-50 border border-red-200 text-red-800"
                    : "bg-green-50 border border-green-200 text-green-800"
            }`}
        >
            <h2 className="text-lg font-semibold mb-2">
                {error ? "Error" : "Result"}
            </h2>
            <p className="text-base">
                {error ? (
                    <span className="font-medium">{error}</span>
                ) : result === "No matching disease found" ? (
                    <span className="font-medium">
                        No matching disease found. Please try again.
                    </span>
                ) : (
                    <span className="font-medium">
                        Based on your symptoms, you might have{" "}
                        <strong className="text-purple-600">{result}</strong>.
                    </span>
                )}
            </p>

           
        </motion.div>
        <div className='flex justify-center mt-4 gap-3'>
                <ChartPrediction/>

            </div>
        </div>
    );
}
