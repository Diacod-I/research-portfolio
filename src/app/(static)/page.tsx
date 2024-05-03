import React from 'react';

import Hero from '@/components/landing/Hero';
import { getDefaultMetadata } from '@/lib/metadata';

export const metadata = getDefaultMetadata();

const Home = () => {
	return (
		<div className='w-full max-w-3xl mx-auto p-4 lg:p-8'>
			<Hero />
		</div>
	);
};

export default Home;
