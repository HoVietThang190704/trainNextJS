'use client'
import Link from 'next/link'

export interface NavLogo {label: string, href: string}

export function NavLogo() {
    return (
        <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors'>
                Furnimart.
            </Link>
        </div>
    )
}