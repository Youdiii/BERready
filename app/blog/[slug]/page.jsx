    import directus from '../../../lib/directus';
    import { readItem } from '@directus/sdk';
    import { notFound } from 'next/navigation';

    async function getPost(slug) {
        try {
            const post = await directus.request(
                readItem('posts', slug, {
                    fields: ['*', { image: ['filename_disk'], author: ['name'] }],
                })
            );
            return post;
        } catch (error) {
            notFound();
        }
    }   

    export default async function DynamicPage({ params }) {
        const post = await getPost(params.slug);
        return (
            <>
                <img src={`${directus.url}assets/${post.image.filename_disk}?width=600`} alt="" />
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </>
        );
    }