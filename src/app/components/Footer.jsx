'use client';

export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-700 py-6 mt-10 border-t'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
