import Link from 'next/link';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<nav>
					<Link href="/">Home</Link>{' | '}
					<Link href="/about">About</Link>{' | '}
					<Link href="/conduct">Code of Conduct</Link>{' | '}
					<Link href="/privacy">Privacy Policy</Link>{' | '}
					<Link href="/blog">Blog</Link>
				</nav>
				<main>{children}</main>
			</body>
		</html>
	);
}