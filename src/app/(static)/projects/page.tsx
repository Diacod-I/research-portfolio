import React from 'react';

import { getDefaultMetadata } from '@/lib/metadata';

const title = "Advith Krishnan's Projects";
export const metadata = getDefaultMetadata({
	title,
	openGraph: { title },
	twitter: { title },
});

const Projects = () => {
	return <div>Projects</div>;
};

export default Projects;
