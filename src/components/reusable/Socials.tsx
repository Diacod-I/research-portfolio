import React from 'react';
import { SOCIALS } from '@/constants/socials';
import Link from 'next/link';

const Socials = () => {
	return (
		<section className='w-full'>
			<div className='max-w-3xl w-full mx-auto p-4 lg:p-8'>
				<ul className='w-full flex justify-end gap-4'>
					{SOCIALS.map((social) => (
						<li key={`social-${social.name}`}>
							<Link
								href={social.url}
								target='_blank'
								rel='noreferrer'
								className='block bg-white p-2 rounded-full text-zinc-900 transition-all duration-300 bg-opacity-80 hover:bg-opacity-100'
							>
								{<social.Icon size={16} strokeWidth={2} />}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Socials;
