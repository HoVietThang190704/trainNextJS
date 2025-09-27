'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { NavItems } from '../ui/NavItems'
import { NavLogo } from '../ui/NavLogo'
import { NavActions } from '../ui/NavActions'

interface NavbarProps {
  cartCount?: number
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
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
    
  )
}