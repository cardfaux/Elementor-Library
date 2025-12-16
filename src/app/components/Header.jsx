'use client';

export default function Header() {
  return (
    <header className='bg-blue-600 text-white py-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Component Library</h1>
        <nav>
          <a href='#' className='px-3 hover:underline'>
            Home
          </a>
          <a href='#components' className='px-3 hover:underline'>
            Components
          </a>
        </nav>
      </div>
    </header>
  );
}
