import {ReactNode} from 'react'
import UiProvider from "@/providers/ui-provider";
import {ThemeProvider} from "next-themes";
import {LenisProvider} from "@/providers/lenis-provider";

const Providers = ({children}: {children: ReactNode}) => {
    return (
        <UiProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <LenisProvider>
                    {children}
                </LenisProvider>
            </ThemeProvider>
        </UiProvider>
    )
}
export default Providers
