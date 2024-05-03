// Application Constants

// Dependencies
import { Metadata } from 'next';

export const PORTFOLIO_URL =
	process.env.NODE_ENV === 'production'
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'http://localhost:3000';

export const DEFAULT_METADATA = {
	title: 'Advith Krishnan',
	description:
		'Chennai-based Neuroscience Enthusiast & AI Student at SRM IST',
	openGraph: {
		title: 'Advith Krishnan',
		description:
			'Chennai-based Neuroscience Enthusiast & AI Student at SRM IST',
		images: ['/images/advith-work.jpg'],
		type: 'website',
		countryName: 'India',
	},
	twitter: {
		title: 'Advith Krishnan',
		description:
			'Chennai-based Neuroscience Enthusiast & AI Student at SRM IST',
		images: ['/images/advith-work.jpg'],
		card: 'summary_large_image',
	},
} as Metadata;
