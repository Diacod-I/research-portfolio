import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

export default function StaticRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className={`bg-background-dark w-full min-h-screen text-white`}>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
