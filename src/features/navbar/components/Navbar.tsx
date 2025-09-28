'use client';

import { NavItems } from './NavItems';
import { NavLogo } from './NavLogo';
import { NavActions } from './NavActions';

export default function Navbar() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <NavLogo />
          <NavItems />
          <NavActions />
        </div>
      </div>
    </nav>
  );
}