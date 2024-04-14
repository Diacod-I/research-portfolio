import {
	Github,
	Instagram,
	Linkedin,
	LucideIcon,
	Mail,
	Phone,
	Twitter,
} from 'lucide-react';

type SocialLink = {
	name: string;
	Icon: LucideIcon;
	url: string;
};

export const EMAIL = 'advithkrishnan@gmail.com';
export const MOBILE = '+919840737984';

export const SOCIALS: SocialLink[] = [
	{
		name: 'Email',
		Icon: Mail,
		url: `mailto:${EMAIL}`,
	},
	{
		name: 'GitHub',
		Icon: Github,
		url: 'https://github.com/Diacod-I',
	},
	{
		name: 'LinkedIn',
		Icon: Linkedin,
		url: 'https://www.linkedin.com/in/advithkrishnan/',
	},
	{
		name: 'Instagram',
		Icon: Instagram,
		url: 'https://www.instagram.com/diablo_rojo.27/',
	},
	{
		name: 'Twitter',
		Icon: Twitter,
		url: 'https://twitter.com/advith_krishnan',
	},
	{
		name: 'Phone',
		Icon: Phone,
		url: `tel:${MOBILE}`,
	},
];
