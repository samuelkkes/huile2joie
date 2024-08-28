import {Content} from "@prismicio/client";
import {PrismicText} from "@prismicio/react";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";

interface Props {
    post: Content.PublicationDocument
}

export const PostCard = ({post}: Props) => {
    return (
        <PrismicNextLink href={`/posts/${post.uid}`}>
            <div className="flex flex-col gap-y-2 hover:cursor-pointer">
                <PrismicNextImage field={post.data.image} className="rounded-xl w-full object-cover bg-center h-60" />
                <div className="flex flex-col gap-y-2">
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold">
                            <PrismicText
                                field={post.data.titre}
                            />
                        </h2>
                        <p className="line-clamp-4">
                            <PrismicText
                                field={post.data.description}
                            />
                        </p>
                    </div>
                    <h4 className="text-sm text-gray-700">
                        {post.data.date}
                    </h4>
                </div>
            </div>
        </PrismicNextLink>
    )
}
