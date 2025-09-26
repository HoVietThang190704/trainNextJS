'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface NavItem {
    label: string
    href: string
    hasDropdown?: boolean
    dropdownItems?: DropdownItem[]
}

interface DropdownItem {
    label: string
    href: string
    description?: string
}

export const navItems: NavItem[] = [
    { label: 'SHOP', href: '/shop' },
    { label: 'ABOUT', href: '/about' },
    { 
        label: 'COLLECTIONS', 
        href: '/collections',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Living Room', href: '/collections/living-room', description: 'Sofas, chairs & tables' },
            { label: 'Bedroom', href: '/collections/bedroom', description: 'Beds, dressers & nightstands' },
            { label: 'Dining Room', href: '/collections/dining-room', description: 'Tables & chairs' },
            { label: 'Office', href: '/collections/office', description: 'Desks & office chairs' },
            { label: 'Outdoor', href: '/collections/outdoor', description: 'Patio & garden furniture' }
        ]
    },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT', href: '/contact' }
];

export function NavItems() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    return (
        <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8 p-2'>
                {navItems.map((item) => (
                    <div key={item.label} className='relative'>
                        {item.hasDropdown ? (
                            <>
                                <button
                                    className='flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900'
                                    onMouseEnter={() => setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={12} />
                                </button>
                                
                                {activeDropdown === item.label && (
                                    <div 
                                        className='absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50'
                                        onMouseEnter={() => setActiveDropdown(item.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className='py-2'>
                                            {item.dropdownItems?.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.label}
                                                    href={dropdownItem.href}
                                                    className='block px-4 py-3 hover:bg-gray-50 transition-colors'
                                                >
                                                    <div className='text-sm font-medium text-gray-900'>
                                                        {dropdownItem.label}
                                                    </div>
                                                    {dropdownItem.description && (
                                                        <div className='text-xs text-gray-500 mt-1'>
                                                            {dropdownItem.description}
                                                        </div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                href={item.href}
                                className='text-sm font-medium text-gray-700 hover:text-gray-900'
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}