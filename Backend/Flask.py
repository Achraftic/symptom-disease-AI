from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/predict": {"origins": "*"}})

# Load the trained model
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Load the scaler
with open('scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json  # Get JSON data from request

        # Extract features
        sysBP = float(data['sysBP'])
        BMI = float(data['BMI'])
        totChol = float(data['totChol'])
        age = float(data['age'])
        glucose = float(data['glucose'])

        # Create feature array
        input_features = np.array([[sysBP, BMI, totChol, age, glucose]])
        input_features = pd.DataFrame(input_features)

        # Scale input data
        input_features_scaled = scaler.transform(input_features)

        # Make prediction
        prediction = model.predict(input_features_scaled)
        prediction_proba = model.predict_proba(input_features_scaled)[0][1]  # Get probability for class '1'

        result = "At risk of CHD" if prediction[0] == 1 else "Not at risk of CHD"
        confidence = prediction_proba * 100  # Convert to percentage
        is_sick = bool(prediction[0])  # Boolean value (True = Sick, False = Not Sick)

        return jsonify({
            'prediction': result,
            'confidence': round(confidence, 2),
            'is_sick': is_sick
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=8000)
