import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    try {
        // Send request to Flask backend for prediction
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ features: body.features }),  // Assume the input data is 'features'
        });

        const data = await response.json();

        if (response.ok) {
            // Return the prediction result
            return NextResponse.json({
                message: "Prediction successful",
                predicted_class: data.predicted_class,
                confidence: data.confidence,
            });
        } else {
            // Handle error from Flask
            return NextResponse.json({ message: "Error in prediction", error: data.error });
        }
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch prediction", error: error });
    }
}
