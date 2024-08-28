import {Content} from "@prismicio/client";
import { PrismicText, SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import Link from "next/link";
import {ArrowRight02Icon} from "hugeicons-react";
import {Button} from "@nextui-org/button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({slice}: HeroProps): JSX.Element => {
    return (
        <>
            <div
                data-slice-type={slice.slice_type}
                data-slice-variation={slice.variation}
                className="flex flex-col items-center w-full gap-y-8 sm:gap-y-14 pb-4"
            >
                <div className="flex flex-col text-xl items-center text-center px-4 lg:text-3xl sm:px-0">
                    <h1 className="text-balance dark:text-gray-300">
                        <PrismicText field={slice.primary.titre}/>
                    </h1>
                    <p className="text-zinc-600 dark:text-foreground text-balance sm:tex">
                        <PrismicText field={slice.primary.sous_titre}/>
                    </p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <PrismicNextImage
                        field={slice.primary.image}
                        className="sm:rounded-xl rounded-none object-cover bg-center h-[680px]"
                    />
                    <div className="text-xs leading-none text-center font-mono">
                        {slice.variation === "heroWithCopyrightImage" && (
                            <>
                                <PrismicNextLink className="hover:underline" field={slice.primary.lien_vers_image}>
                                    Photo
                                </PrismicNextLink>
                                &nbsp;de&nbsp;
                                <PrismicNextLink className="hover:underline" field={slice.primary.lien_vers_auteur}>
                                    {slice.primary.auteur_image}
                                </PrismicNextLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
