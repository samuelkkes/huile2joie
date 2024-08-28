import React from 'react'
import {createClient} from "@/prismicio";
import {notFound} from "next/navigation";
import {PrismicImage, PrismicRichText, PrismicText} from "@prismicio/react";

export async function generateStaticParams() {
    const client = createClient();

    const posts = await client.getAllByType("publication");

    return posts.map((post) => {
        return {uid: post.uid}
    })
}

const Page = async ({params}: { params: { uid: string } }) => {
    const client = createClient();

    const post = await client.getByUID("publication", params.uid).catch(() => notFound())

    return (
        <div className="lg:px-20 px-4">
            <div className="flex justify-center container">
                <article
                    className="prose prose-ul:list-outside prose-ol:list-outside prose-stone prose-p:text-balance prose-p:text-justify prose-p:hyphens-auto prose-a:text-primary prose-a:font-mono dark:prose-invert lg:prose-xl xl:prose-2xl">
                    <header className="lg:text-center">
                        <h1 className="lg:mb-0">
                            <PrismicText field={post.data.titre}/>
                        </h1>
                        <p className="lg:!text-center lg:my-4">
                            <PrismicText field={post.data.description}/>
                        </p>
                    </header>
                    <PrismicImage field={post.data.image}
                                  className="rounded-md bg-cover"
                    />
                    <PrismicRichText field={post.data.contenue}/>
                </article>
            </div>
        </div>
    )
}
export default Page;
