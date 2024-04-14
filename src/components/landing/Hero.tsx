import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EMAIL, MOBILE } from '@/constants/socials';
import Footer from '@/components/layouts/Footer';

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
			<div className='flex flex-col gap-3 text-justify'>
				<h1 className='text-lg'>Hi, I&apos;m Advith Krishnan. </h1>
				<p>
					I was born and raised in <b><i>Chennai, India.</i></b><br/><br/>
					I have been interested in neuroscience since the age of 15
					and spent most of my life, reading and adoring the grand scheme of dynamics 
					in the brain that invoke thought and perception.<br/><br/>
					I am pursuing Bachelor of Technology at <b><i>SRM Institute of Science &
					Technology</i></b>, studying Artificial Intelligence.<br/>
					<br/>Currently, I am working on spiking neural networks, neuro-dynamical
					systems and computational neuroscience.


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
			<Footer />
			</div>
		</section>
	);
};

export default Hero;
