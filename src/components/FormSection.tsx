"use client"
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import ButtonSubmit from "./ButtonSubmit";
import React from "react";
import CHDDialogue from "./CHDAlert";

export function FormSection() {
  const [result, setResult] = React.useState(null);
  const [open, setOpen] = React.useState(false)

  const handleSubmit = async (formdata: FormData) => {
    const data = Object.fromEntries(formdata.entries());
    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Prediction result:', result);
      setResult(result)
      setOpen(true)

      return result;
      // You can handle the result as needed, e.g., display it to the user
    } catch (error) {
      console.error('Error making prediction:', error);
     
      return { message: "Error making prediction" };
    }
  }

  console.log("Current Result:", result);
  return (
    <div className="max-w-5xl w-full mx-auto p-6 rounded-lg">
      <h2 className="text-3xl font-semibold mb-10">Coronary Heart Disease (CHD) Prediction</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action={handleSubmit}>
        {/* Age */}
        <div>
          <Label htmlFor="age">Age</Label>
          <Input id="age" name="age"  type="number" placeholder="Enter age" required />
        </div>

        {/* Systolic BP */}
        <div>
          <Label htmlFor="sysBP">Systolic BP</Label>
          <Input id="sysBP" name="sysBP" type="number" placeholder="Enter Systolic BP" required />
        </div>

        {/* BMI */}
        <div>
          <Label htmlFor="BMI">BMI</Label>
          <Input id="BMI" name="BMI" type="number" placeholder="Enter BMI" required />
        </div>

        {/* Total Cholesterol */}
        <div>
          <Label htmlFor="totChol">Total Cholesterol</Label>
          <Input id="totChol" name="totChol" type="number" placeholder="Enter Total Cholesterol" required />
        </div>

        {/* Glucose */}
        <div>
          <Label htmlFor="glucose">Glucose</Label>
          <Input id="glucose" name="glucose" type="number" placeholder="Enter Glucose Level" required />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <ButtonSubmit >
            Submit
          </ButtonSubmit>
        </div>
      </form>
      {result && <div className="mt-4">
        <CHDDialogue isSick={result.is_sick } open={open} setOpen={setOpen} />
      </div>}

   

    </div>
  );
}