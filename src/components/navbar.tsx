"use client";

import {ThemeSwitcher} from "@/components/theme-switcher";
import {UseScrollTop} from "@/hooks/use-scroll-top";
import {usePathname} from "next/navigation";
import {Button} from "@nextui-org/button";
import Image from "next/image";
import logoOr from "@/../public/logoOr.svg"
import logoBlanc from "@/../public/logoBlanc.svg";
import {cn} from "@nextui-org/theme";
import {Content} from "@prismicio/client";
import {PrismicNextLink} from "@prismicio/next";
import Link from "next/link";

type Props = {
}

const nav = [
    {
        label: "Acceuil",
        link: "/"
    },
    {
        label: "Publications",
        link: "/posts"
    },
    {
        label: "A propos",
        link: "/about"
    }
]

const NavBar = ({}: Props) => {
    const scrolled = UseScrollTop(70);
    const pathname = usePathname();
    console.log(pathname);

    return (
        <header className={cn(
            scrolled && "border-b shadow-sm ",
            "z-50 bg-background fixed top-0 flex py-4 justify-between items-center w-full px-4 sm:px-[100px]"
        )}>
            <nav className="hidden sm:flex gap-x-6 items-center">
                {nav.map((link, index) => {
                    return (
                        <Link
                            scroll={true}
                            className={cn("inline-flex text-zinc-600 dark:text-zinc-200", pathname == link.link && "font-medium text-foreground underline underline-offset-4")}
                            key={`${link.label}Link${index}`}
                            href={link.link}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </nav>
            <div className="flex-1 flex justify-start items-center sm:justify-center">
                <Link href="/">
                    <Image
                        src={logoOr}
                        alt=""
                        className="w-40 block dark:hidden"
                    />
                    <Image
                        src={logoBlanc}
                        alt=""
                        className="w-40 hidden dark:block"
                    />
                </Link>
            </div>
            <div className="flex w-[253px] justify-end gap-x-4 items-center">
                <Button
                    className="px-6 hidden"
                    color="primary"
                    variant="solid"
                >
                    Connexion
                </Button>
                <div className="hidden sm:flex">
                    <ThemeSwitcher/>
                </div>
            </div>
        </header>
    )
}
export default NavBar
