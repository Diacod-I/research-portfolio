import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EMAIL, MOBILE } from '@/constants/socials';

const Hero = () => {
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16'>
			<div className='w-full'>
				<Image
					src='/images/advith.jpg'
					width={100}
					height={100}
					alt='Advith'
					priority
					unoptimized
					className='w-full h-auto object-cover'
				/>
			</div>
			<div className='flex flex-col gap-4'>
				<h1 className='text-lg'>Hi, I&apos;m Advith Krishnan.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolores dolorem cupiditate placeat! Excepturi repellendus
					provident, ipsa consequuntur dolorum eos illum? Lorem ipsum
					dolor sit, amet consectetur adipisicing elit. Sit hic
					eveniet laboriosam voluptatibus explicabo quaerat beatae
					quis, facere reprehenderit officiis?
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Quas maxime ut possimus earum nulla sed, accusamus minima
					consequuntur? Sit, quas.
				</p>
				<hr className='w-10' />
				<div className='flex flex-col'>
					<Link
						href={`mailto:${EMAIL}`}
						className='hover:underline underline-offset-2'
					>
						{EMAIL}
					</Link>
					<Link
						href={`tel:${MOBILE}`}
						className='hover:underline underline-offset-2 font-["PT_Sans"]'
					>
						{MOBILE}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
