import React from "react";
import {Metadata} from "next";

import {SliceZone} from "@prismicio/react";
import * as prismic from "@prismicio/client";

import {createClient} from "@/prismicio";
import {components} from "@/slices";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import {ArrowRight02Icon} from "hugeicons-react";
import LastPostCard from "@/components/last-post-card";
import {Bounded} from "@/components/Bounded";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const home = await client.getByUID("page", "landing-page");

    return {
        title: prismic.asText(home.data.title),
        description: home.data.meta_description,
        openGraph: {
            title: home.data.meta_title ?? undefined,
            images: [{url: home.data.meta_image.url ?? ""}],
        },
    };
}

export default async function Index() {
    // The client queries content from the Prismic API
    const client = createClient();
    const home = await client.getByUID("page", "landing-page");

    const publications = await client.getAllByType("publication", {
        orderings: [
            {
                field: "my.publication.date",
                direction: "desc"
            }
        ],
        limit: 5
    });

    return (
        <>
            <SliceZone slices={home.data.slices} components={components}/>
            <div className="mt-10 px-4 sm:px-0">
                <h2 className="text-xl font-semibold">
                    Posts récents
                </h2>
                <Bounded size="widest">
                    <ul className="grid grid-cols-1 gap-16">
                        {publications.map((publication, index) => (
                            <LastPostCard
                                key={`${index}`}
                                post={publication}
                            />
                        ))}
                    </ul>
                </Bounded>
                <div className="flex justify-center items-center mt-10">
                    <Button
                        as={Link}
                        scroll={true}
                        color="primary"
                        href="/posts"
                        variant="ghost"
                        className="hover:!text-white"
                    >
                        Voir tous les post
                        <ArrowRight02Icon className="size-5 ml-2"/>
                    </Button>
                </div>
            </div>
        </>
    );
}
