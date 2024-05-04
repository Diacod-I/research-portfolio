import { MetadataRoute } from 'next';
import { PORTFOLIO_URL } from '@/constants/app';
import { client } from '../../sanity/lib/client';
import { RESEARCHS_QUERY } from '../../sanity/lib/queries';

type Params = { params: { slug: string } };

const DEFAULT_SITEMAPS: MetadataRoute.Sitemap = [
	{
		url: PORTFOLIO_URL,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	},
	// {
	// 	url: `${PORTFOLIO_URL}/contact`,
	// 	lastModified: new Date(),
	// 	changeFrequency: 'monthly',
	// 	priority: 0.8,
	// },
	{
		url: `${PORTFOLIO_URL}/research`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.7,
	},
	// {
	// 	url: `${PORTFOLIO_URL}/terms`,
	// 	lastModified: new Date(),
	// 	changeFrequency: 'yearly',
	// 	priority: 0.5,
	// },
	// {
	// 	url: `${PORTFOLIO_URL}/privacy`,
	// 	lastModified: new Date(),
	// 	changeFrequency: 'yearly',
	// 	priority: 0.5,
	// },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		const researchs = await client.fetch<Array<ResearchType>>(
			RESEARCHS_QUERY
		);
		const researchsSitemap = researchs.map((researchs) => {
			return {
				url: `${PORTFOLIO_URL}/research/${researchs.slug.current}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		return [
			...DEFAULT_SITEMAPS,
			...researchsSitemap,
		] as MetadataRoute.Sitemap;
	} catch (_) {
		return DEFAULT_SITEMAPS;
	}
}
