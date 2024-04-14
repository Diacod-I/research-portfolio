'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants/navigation';
import { usePathname } from 'next/navigation';
import SheetNav from './SheetNav';

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className='w-full'>
			<div className='w-full max-w-3xl mx-auto flex items-center justify-between p-4 lg:p-8 gap-4'>
				<Link
					href={'/'}
					className='font-medium text-lg uppercase tracking-widest'
				>
					Advith Krishnan
				</Link>
				<ul className='items-center gap-4 hidden lg:flex'>
					{NAV_LINKS.map((link) => (
						<li
							key={`nav-link-${link.href}`}
							className={`${
								pathname === link.href
									? 'text-white'
									: 'text-zinc-300'
							} hover:text-white transition-all duration-300`}
						>
							<Link href={link.href} target={link.target}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				<SheetNav />
			</div>
		</nav>
	);
};

export default Navbar;
