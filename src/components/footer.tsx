import React from 'react'
import Content from "@/components/content";

export const Footer = () => {
    return (
        <div
            className='relative h-[400px]'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='fixed bottom-0 h-[400px] w-full'>
                <Content/>
            </div>
        </div>
    )
}
