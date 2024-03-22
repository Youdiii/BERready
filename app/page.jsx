import directus from '../lib/directus';
import { readItems } from '@directus/sdk';
import RootLayout from './layout';

async function getGlobals() {
	return directus.request(readItems('global'));
}

export default async function HomePage() {
	const global = await getGlobals();
	return (
		<div>
			<h1>{global.title}</h1>
			<p>{global.description}</p>
		</div>
	);
}