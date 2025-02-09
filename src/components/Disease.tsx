import { BASE_URL } from '@/lib/utils';
import React from 'react'

export default async function Disease() {
    const  data= await fetch(BASE_URL + '/predict')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const disease= await data.json()
       
        
    
    return (
        <div>
{/*             
            {disease.map((disease, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-bold text-gray-900">{disease.name}</h2>
                    <p className="text-gray-500">{disease.description}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">Symptoms</h3>
                    <ul className="list-disc list-inside mt-2">
                        {disease.symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                        ))}
                    </ul>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">Treatment</h3>
                    <p className="text-gray-500">{disease.treatment}</p>
                </div>
            ))
            
        
        } */}
        </div>
    )
}
