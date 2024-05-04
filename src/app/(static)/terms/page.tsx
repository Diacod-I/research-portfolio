import React from 'react';

import { getDefaultMetadata } from '@/lib/metadata';

const title = 'Terms and Conditions';
export const metadata = getDefaultMetadata({
	title,
	openGraph: { title },
	twitter: { title },
});

const TermsAndConditions = () => {
	return <div>TermsAndConditions</div>;
};

export default TermsAndConditions;
