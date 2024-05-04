/**
 * Application Robots Text File
 */

// Dependencies
import { MetadataRoute } from 'next';
import { PORTFOLIO_URL } from '@/constants/app';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/studio/'],
		},
		sitemap: `${PORTFOLIO_URL}/sitemap.xml`,
	};
}
