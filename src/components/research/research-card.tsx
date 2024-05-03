import React from 'react';

import Link from 'next/link';

interface Props extends React.HTMLAttributes<HTMLLIElement> {
	research: ResearchType;
}

const ResearchCard: React.FC<Props> = ({ research }) => {
	console.log(research);
	return (
		<li className='w-full'>
			<Link
				href={`/research/${research.slug.current}`}
				className='block w-full h-full hover:-translate-y-1 transition-all duration-300'
			>
				<h2 className='flex items-center justify-between gap-2'>
					<span className='font-semibold'>{research.title}</span>
					<span>
						{new Date(research.publisehdAt).toLocaleDateString([], {
							dateStyle: 'medium',
						})}
					</span>
				</h2>
				<p className='line-clamp-2 mt-1'>{research.description}</p>
			</Link>
		</li>
	);
};

export default ResearchCard;
