import { HTMLAttributeAnchorTarget } from 'react';

type NavLink = {
	href: string;
	name: string;
	target: HTMLAttributeAnchorTarget;
};

const COMMON_LINKS: NavLink[] = [
	{
		href: '/',
		name: 'About',
		target: '_self',
	},
	{
		href: '/research',
		name: 'Research',
		target: '_self',
	},
	{
		href: '/gallery',
		name: 'Gallery',
		target: '_self',
	},
	{
		href: '/projects',
		name: 'Projects',
		target: '_self',
	},
];

export const NAV_LINKS: NavLink[] = [...COMMON_LINKS];

export const FOOTER_LINKS: NavLink[] = [
	...COMMON_LINKS,
	// {
	// 	href: '/terms',
	// 	name: 'Terms & Conditions',
	// 	target: '_self',
	// },
	// {
	// 	href: '/privacy',
	// 	name: 'Privacy Policy',
	// 	target: '_self',
	// },
];
