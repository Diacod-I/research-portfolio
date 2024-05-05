import React from 'react';

import { notFound } from 'next/navigation';
import { QueryParams } from 'sanity';
import { sanityFetch } from '../../../../../sanity/lib/fetch';
import {
	RESEARCHS_QUERY,
	RESEARCH_QUERY,
} from '../../../../../sanity/lib/queries';
import { getDefaultMetadata } from '@/lib/metadata';
import ResearchBody from '@/components/research/research-body';

export async function generateStaticParams() {
	const researchs = await sanityFetch<Array<ResearchType>>({
		query: RESEARCHS_QUERY,
		perspective: 'published',
	});
	return researchs.map((research) => ({
		slug: research.slug.current,
	}));
}

export async function generateMetadata({ params }: { params: QueryParams }) {
	const research = await sanityFetch<ResearchType>({
		query: RESEARCHS_QUERY,
		params,
	});
	return getDefaultMetadata({
		title: research.title,
		description: research.description,
		openGraph: {
			title: research.title,
			description: research.description,
		},
		twitter: {
			title: research.title,
			description: research.description,
		},
	});
}

const IndividualResearch = async ({ params }: { params: QueryParams }) => {
	const research = await sanityFetch<ResearchType>({
		query: RESEARCH_QUERY,
		params,
	});
	if (!research) {
		return notFound();
	}
	return (
		<div className='w-full max-w-3xl mx-auto p-4 lg:p-8'>
			<ResearchBody body={research.body} />
		</div>
	);
};

export default IndividualResearch;
