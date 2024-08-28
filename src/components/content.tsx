import React from 'react';
import logoBlanc from "@/../public/logoBlanc.svg";
import Image from "next/image";
import {PrismicNextLink} from "@prismicio/next";
import {createClient} from "@/prismicio";

export default async function Content() {
    const client = createClient();
    const footerLinks = await client.getSingle("external_link");

    return (
        <div className='bg-primary text-white font-mono pt-8 pb-2 px-12 h-full w-full flex flex-col justify-between'>
            <div>
                <div className='flex shrink-0 gap-20'>
                    <div className='flex flex-col gap-2'>
                        {footerLinks.data.item.map((item, i) => {
                            const {label, link} = item;
                            return (
                                <PrismicNextLink
                                    key={`el_${label}${i}`}
                                    field={link}
                                    className="group w-fit"
                                >
                                    {label}
                                    <div
                                        className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"/>
                                </PrismicNextLink>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Section2/>
        </div>
    );
}

const Section2 = () => {
    return (
        <div className='flex justify-end items-end -ml-[18px]'>
            <Image
                src={logoBlanc}
                alt=""
                className="w-[50vw]"
            />
            <h1 className='hidden text-[6vw] sm:text-[10vw] tracking-tight leading-[0.8] mt-10'>Huile de Joie</h1>
        </div>
    )
}