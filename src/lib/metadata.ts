import { Metadata } from 'next';
import { DEFAULT_METADATA } from '@/constants/app';

export const getDefaultMetadata = (
	metadata?: Metadata | undefined
): Metadata => {
	if (!metadata) return DEFAULT_METADATA;
	return {
		...DEFAULT_METADATA,
		...metadata,
		openGraph: {
			...DEFAULT_METADATA.openGraph,
			...metadata.openGraph,
		},
		twitter: {
			...DEFAULT_METADATA.twitter,
			...metadata.twitter,
		},
	};
};
