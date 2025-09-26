'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Search} from 'lucide-react'
import { useSearchStore } from '../../../stores/searchStore'
import { useCartStore } from '../../../stores/cartStore'

export function NavActions() {
    const { isSearchOpen, searchQuery, setIsSearchOpen, setSearchQuery } = useSearchStore();
    const { cartCount } = useCartStore()
    return (
        <div className='hidden md:flex items-center space-x-6'> 
            <Link href='/cart' className='flex item-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors'>
                <ShoppingCart size={18} />
                <span>CART ({cartCount})</span>
            </Link>

            <div className='relative'>
                <button 
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className='flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors'
                >
                    <Search size={18} />
                    <span>SEARCH</span>
                </button>

                {isSearchOpen && (
                    <div className='absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
                        <div className='p-4'> 
                            <div className='flex items-center space-x-2'>
                                <div className='flex-1 relative'>
                                    <input 
                                        type="text"
                                        placeholder='Search products...'
                                        value={searchQuery} 
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm'
                                        autoFocus
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                )}
                {isSearchOpen && (
                    <div 
                        className='fixed inset-0 z-40' 
                        onClick={() => setIsSearchOpen(false)}
                    />
                )}
            </div>
            
        </div>
    )
}