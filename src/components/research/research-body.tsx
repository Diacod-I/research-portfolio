import React from 'react';

import { PortableText } from '@portabletext/react';
import SanityImage from '../reusable/sanity-image';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	body: ResearchType['body'];
}

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const ResearchBody: React.FC<Props> = ({ body, ...props }) => {
	return (
		<div
			className='prose prose-sm max-w-full text-justify w-fit mx-auto mt-4 prose-invert'
			{...props}
		>
			{body ? (
				<PortableText
					value={body}
					components={portableTextComponents}
				/>
			) : null}
		</div>
	);
};

export default ResearchBody;
