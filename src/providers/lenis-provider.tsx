import React, {ReactNode} from 'react'
import { ReactLenis } from "@/libs/lenis";

export const LenisProvider = ({children}: {children: ReactNode}) => {
    return (
        <ReactLenis root >
            { children }
        </ReactLenis>
    )
}
