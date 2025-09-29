'use client';
import Link from 'next/link';

export function NavLogo() {
  return (
    <div className='flex-shrink-0'>
      <Link href='/' className='text-2xl font-bold text-gray-900 hover:text-gray-700 transition-transform hover:scale-105'>
        Furnimart.
      </Link>
    </div>
  );
}