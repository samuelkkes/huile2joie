import React from 'react'
import {Content} from "@prismicio/client";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import {PrismicText} from "@prismicio/react";
import * as prismic from "@prismicio/client";
import {Heading} from "@/components/Heading";
import {dateFormatter} from "@/libs/dateFormatter";
interface Props {
    post: Content.PublicationDocument
}

const LastPostCard = ({post}: Props) => {
    const date = prismic.asDate(
        post.data.date || post.first_publication_date,
    );
    return (
        <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
            <PrismicNextLink document={post} tabIndex={-1}>
                <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
                    {prismic.isFilled.image(post.data.image) && (
                        <PrismicNextImage
                            field={post.data.image}
                            className="rounded-xl w-full object-cover bg-center h-60"
                        />
                    )}
                </div>
            </PrismicNextLink>
            <div className="grid grid-cols-1 gap-3 md:col-span-2">
                <Heading as="h2">
                    <PrismicNextLink document={post}>
                        <PrismicText field={post.data.titre}/>
                    </PrismicNextLink>
                </Heading>
                <p className="font-mono italic tracking-tighter text-slate-500">
                    {dateFormatter.format(date)}
                </p>
                <p className="leading-relaxed md:text-lg md:leading-relaxed">
                    <PrismicText
                        field={post.data.description}
                    />
                </p>
            </div>
        </li>
    )
}
export default LastPostCard
