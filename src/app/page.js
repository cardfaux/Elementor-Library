'use client';

import ComponentCard from './components/ComponentCard';
import { useEffect, useState } from 'react';

export default function Page() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    async function fetchComponents() {
      try {
        const res = await fetch('/index.json'); // fetch the JSON file from public/
        if (!res.ok) throw new Error('Failed to fetch index.json');
        const compList = await res.json(); // array of component objects
        setComponents(compList);
      } catch (err) {
        console.error(err);
      }
    }

    fetchComponents();
  }, []);

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold text-center mb-10'>Elementor Component Library</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {components.map((comp) => (
          <ComponentCard key={comp.name} name={comp.name} preview={comp.preview} jsonPath={comp.jsonPath} />
        ))}
      </div>
    </div>
  );
}
