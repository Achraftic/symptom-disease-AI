import { NextResponse } from 'next/server';

// Mock data
const data = [
    {
        id: 1,
        name: "Diabetes",
        description: "A chronic condition that affects how your body turns food into energy.",
        symptoms: ["Increased thirst", "Frequent urination", "Extreme fatigue"],
        treatment: "Management through diet, exercise, and medication.",
    },
    {
        id: 2,
        name: "Hypertension",
        description: "High blood pressure, a condition that can lead to serious health issues.",
        symptoms: ["Headaches", "Shortness of breath", "Dizziness"],
        treatment: "Lifestyle changes and antihypertensive medications.",
    },
    {
        id: 3,
        name: "Asthma",
        description: "A respiratory condition marked by spasms in the bronchi of the lungs.",
        symptoms: ["Wheezing", "Coughing", "Chest tightness"],
        treatment: "Inhalers and avoiding triggers.",
    },
];

// Handle GET requests
export async function GET() {
    return NextResponse.json(data );
}

// Handle POST requests
export async function POST(request: Request) {
    const body = await request.json();
    console.log("Received POST request body:", body);

    // You can process the body here (e.g., save to a database, perform calculations, etc.)
    return NextResponse.json({ message: "POST request received", body });
}