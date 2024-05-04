import React from 'react';

import { getDefaultMetadata } from '@/lib/metadata';

const title = 'Privacy Policy';
export const metadata = getDefaultMetadata({
	title,
	openGraph: { title },
	twitter: { title },
});

const PrivacyPolicy = () => {
	return <div>PrivacyPolicy</div>;
};

export default PrivacyPolicy;
