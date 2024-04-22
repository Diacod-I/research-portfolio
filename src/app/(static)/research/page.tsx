import React from 'react';
import { sanityFetch } from '../../../../sanity/lib/fetch';
import { ALL_RESEARCH_QUERY } from '../../../../sanity/lib/queries';

const Research = async () => {
	const researches = await sanityFetch<Array<ResearchType>>({
		query: ALL_RESEARCH_QUERY,
	});

	console.log(researches);

	return <div className='w-full max-w-3xl mx-auto p-4 lg:p-8'></div>;
};

export default Research;
