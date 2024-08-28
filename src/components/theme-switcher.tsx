"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {ComputerIcon, Moon02Icon, Sun03Icon} from "hugeicons-react";
import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="light"
                    isIconOnly
                >
                    {theme === "system" ? <ComputerIcon className="size-5"/> : theme === "dark" ?
                        <Moon02Icon className="size-5"/> : <Sun03Icon className="size-5"/>}
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="flat">
                <DropdownItem
                    onClick={() => setTheme('light')}
                    startContent={<Sun03Icon className="size-5"/>}
                >
                    Jour
                </DropdownItem>
                <DropdownItem
                    onClick={() => setTheme('dark')}
                    startContent={<Moon02Icon className="size-5"/>}
                >
                    Nuit
                </DropdownItem>
                <DropdownItem
                    onClick={() => setTheme('system')}
                    startContent={<ComputerIcon className="size-5"/>}
                >
                    Système
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
