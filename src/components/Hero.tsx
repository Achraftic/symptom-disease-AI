'use client'
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Banner from "./ui/banner";
import { motion } from "framer-motion";
import { SendHorizontal } from "lucide-react";

export default function Hero() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handlePrediction = () => {
    if (symptoms.trim() === "" || symptoms.length < 3) {
      return;
    }
    const diseaseDatabase = {
      "anxiety, nervousness, depression": "Panic Disorder",
      "fever, cough, fatigue": "Flu",
      "chest pain, shortness of breath": "Heart Disease",
    };
    let prediction = "No matching disease found";
    Object.entries(diseaseDatabase).forEach(([key, value]) => {
      if (key.split(", ").every((symptom) =>
        symptoms.toLowerCase().includes(symptom.toLowerCase())
      )) {
        prediction = value;
      }
    });
    setResult(prediction);
  };

  const scrollToResult = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (result) {
      scrollToResult();
    }
  }, [result]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full">
      {/* Header Section */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-2 h-full">
        <Banner />
        <motion.h1
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3 }}
          className="md:text-6xl text-4xl md:w-3/4 text-center font-bold text-foreground mb-4"
        >
          Uncover the Cause of Your Symptoms
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6 }}
          className="text-zinc-400 sm:text-lg text-base mb-6 text-center"
        >
          Get personalized health insights in seconds!
        </motion.p>
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="text-zinc-950  rounded-full  shadow-xl shadow-secondary/10 w-full max-w-3xl relative"
        >
          <input
            type="text"
            placeholder="Ex: fièvre, toux, fatigue"
            className="w-full border bg-transparent border-zinc-300/30 rounded-full px-5 md:py-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 "
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <Button
            variant="circle"
            size={"icon"}
            className="mt-2 absolute bottom-2 max-md:h-8 max-md:w-8 right-4"
            onClick={handlePrediction}
          >
            <SendHorizontal />
          </Button>
        </motion.div>
      </div>

      {/* Result Section */}
      {result && (
        <motion.div
          ref={resultRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-10 px-4 pb-10 pt-5 rounded-md w-full max-w-md shadow-lg ${result === "No matching disease found"
              ? "bg-red-50 border border-red-200 text-red-800"
              : "bg-green-50 border border-green-200 text-green-800"
            }`}
        >
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <p className="text-base">
            {result === "No matching disease found" ? (
              <span className="font-medium">No matching disease found. Please try again.</span>
            ) : (
              <span className="font-medium">
                Based on your symptoms, you might have{" "}
                <strong className="text-purple-600">{result}</strong>.
              </span>
            )}
          </p>
        </motion.div>
      )}
    </div>
  );
}