import React from 'react';

import { getDefaultMetadata } from '@/lib/metadata';

const title = "Advith Krishnan's Gallery";
export const metadata = getDefaultMetadata({
	title,
	openGraph: { title },
	twitter: { title },
});

const Gallery = () => {
	return <div>Gallery</div>;
};

export default Gallery;
