import React, { useState } from 'react';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SheetNav = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const handleToggle = (state: boolean) => {
		setOpen(state);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Sheet open={open} onOpenChange={handleToggle}>
			<SheetTrigger className='lg:hidden'>
				<Menu />
			</SheetTrigger>
			<SheetContent className='bg-[#202124] text-white border-l-0'>
				<SheetHeader>
					<SheetTitle className='text-white text-left font-medium uppercase tracking-widest'>
						Advith Krishnan
					</SheetTitle>
				</SheetHeader>
				<ul className='gap-4 flex flex-col mt-8 text-left text-sm'>
					{NAV_LINKS.map((link) => (
						<li
							key={`nav-link-${link.href}`}
							className={`${
								pathname === link.href
									? 'text-white'
									: 'text-zinc-300'
							} hover:text-white transition-all duration-300`}
							onClick={handleClose}
						>
							<Link href={link.href} target={link.target}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default SheetNav;
