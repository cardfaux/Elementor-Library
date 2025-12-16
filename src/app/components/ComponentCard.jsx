'use client';

import React from 'react';
import Image from 'next/image';

export default function ComponentCard({ name, preview, jsonPath }) {
  const handleCopy = async () => {
    try {
      const res = await fetch(jsonPath);
      const json = await res.text();
      await navigator.clipboard.writeText(json);
      alert(`"${name}" copied! Paste it into Elementor.`);
    } catch (err) {
      console.error(err);
      alert('Failed to copy component.');
    }
  };

  return (
    <div className='border rounded-lg p-4 shadow-md flex flex-col items-center space-y-3 bg-gray-100'>
      {/* Fixed-size container with background color */}
      <div className='w-full h-48 relative bg-gray-200 flex items-center justify-center rounded'>
        <Image
          src={preview}
          alt={name}
          fill
          className='object-contain rounded'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <h3 className='text-lg font-semibold text-center text-gray-900 bg-white/80 px-2 py-1 rounded'>{name}</h3>
      <button
        onClick={handleCopy}
        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer'
      >
        Copy Component
      </button>
    </div>
  );
}
