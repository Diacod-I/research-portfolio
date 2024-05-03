import React from 'react';

import { sanityFetch } from '../../../../sanity/lib/fetch';
import { RESEARCHS_QUERY } from '../../../../sanity/lib/queries';
import { getDefaultMetadata } from '@/lib/metadata';
import ResearchCard from '@/components/research/research-card';

const title = "Advith Krisnan's Research Work";
export const metadata = getDefaultMetadata({
	title,
	openGraph: { title },
	twitter: { title },
});

const Research = async () => {
	const researches = await sanityFetch<Array<ResearchType>>({
		query: RESEARCHS_QUERY,
	});

	return (
		<div className='w-full max-w-3xl mx-auto p-4 lg:p-8'>
			<h1 className='text-lg'>Research Work</h1>
			<ul className='flex flex-col mt-8 gap-4'>
				{researches.map((research) => (
					<ResearchCard research={research} key={research._id} />
				))}
			</ul>
		</div>
	);
};

export default Research;
