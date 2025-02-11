'use client';
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Banner from "./ui/banner";
import { motion } from "framer-motion";
import { SendHorizontal, Loader2 } from "lucide-react"; // Added Loader2 for loading spinner

export default function Hero() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // For handling the loading state
  const [error, setError] = useState<string | null>(null); // For handling errors
  const resultRef = useRef<HTMLDivElement>(null);

  const handlePrediction = async () => {
    if (symptoms.trim() === "" || symptoms.length < 3) {
      setError("Please enter valid symptoms.");
      return;
    }

    setLoading(true);
    setError(null); // Reset error state

    // Split the symptoms string into an array of individual symptoms
    const symptomsArray = symptoms.split(",").map((symptom) => symptom.trim());

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features: symptomsArray }), // Send the symptoms as the 'features' key
      });

      const data = await response.json();
     console.log(data)
     console.log(data.predicted_disease)
      if (response.ok) {
        setResult(data.predicted_disease); // Use the predicted disease from the response
      } else {
        setError(data.error || "An error occurred while fetching the prediction.");
      }
    } catch (error) {
      console.error("Error in prediction:", error);
      setError("An error occurred while fetching the prediction.");
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  const scrollToResult = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (result || error) {
      scrollToResult();
    }
  }, [result, error]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full">
     
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
          className="text-zinc-950 rounded-full shadow-xl shadow-secondary/10 w-full max-w-3xl relative"
        >
          <input
            type="text"
            placeholder="Ex: fever, cough, fatigue"
            className="w-full border bg-transparent border-zinc-300/30 rounded-full px-5 md:py-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePrediction();
              }
            }}
          />
          <Button
            variant="circle"
            size={"icon"}
            className="mt-2 absolute bottom-2 max-md:h-8 max-md:w-8 right-4"
            onClick={handlePrediction}
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" /> // Show loading spinner
            ) : (
              <SendHorizontal />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Result Section */}
      {(result || error) && (
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
      )}
    </div>
  );
}