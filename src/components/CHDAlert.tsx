'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react'; // Import the icon for a congratulatory message

const CHDDialogue = ({ isSick, open, setOpen }: { isSick: boolean; open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  if (!open) return null; // Only render the dialogue if `open` is true

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            className={`bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 ${isSick ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'}`}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the dialogue from closing it
          >
            <h2 className="text-xl font-bold mb-4 ">
              {isSick ? 'At Risk for Coronary Heart Disease' : (
                <span className="flex ">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  Healthy Heart Status
                </span>
              )}
            </h2>
            <p className="mb-4 ">
              {isSick
                ? 'Our analysis suggests you may be at risk for Coronary Heart Disease (CHD). It is important to consult a healthcare provider for further testing and guidance.'
                : 'Great news! Our analysis shows you are not at risk for Coronary Heart Disease (CHD). Keep maintaining a healthy lifestyle to stay in great shape.'}
            </p>
            <div className="flex justify-end">
              <motion.button
                onClick={() => setOpen(false)} // Close the dialogue when the button is clicked
                whileTap={{ scale: 0.95 }}
                className={`${isSick ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white px-4 py-2 rounded transition-colors`}
                aria-label="Close"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CHDDialogue;
