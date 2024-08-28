import React, {ReactNode} from 'react'

export const Layout = ({children}: { children: ReactNode }) => {
    return (
        <main className="min-h-screen pt-8 sm:pt-16">
            <div className="min-h-full flex flex-col px-0 pt-16 sm:px-14 sm:pt-20 lg:px-[100px] pb-10">
                {children}
            </div>
        </main>
    )
}
