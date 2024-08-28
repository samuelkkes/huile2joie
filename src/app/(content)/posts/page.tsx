import React from 'react'
import {createClient} from "@/prismicio";
import {PostCard} from "@/components/post-card";

const Page = async () => {
    const client = createClient();
    const publications = await client.getAllByType("publication", {
        orderings: [
            {
                field: "my.publication.date",
                direction: "desc"
            }
        ],
    });

    return (
        <>
            <div className="w-full flex justify-center items-center">
                <h1 className="text-balance text-center text-xl lg:text-3xl">Nos publications</h1>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-3 sm:pt-20 pt-10">
                {publications.map((publication, index) => (
                    <PostCard
                        key={`${index}`}
                        post={publication}
                    />
                ))}
            </div>
        </>
    )
}
export default Page
