import React from 'react';

const failModal = ({ failShow, onClose }) => {
  if (!failShow) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-4">Sorry 🤧</h2>
        <p>This tool is already there 😅. Try to submit a differnt tool</p>

        <div className='flex justify-center'>    <button
          className="mt-4 bg-violet-400 text-white py-2    px-4 rounded-lg font-semibold"
          onClick={onClose}
        >
          Close
        </button></div>
    
      </div>
    </div>
  );
};

export default failModal;
