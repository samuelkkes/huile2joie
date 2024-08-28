import {useEffect, useState} from 'react'

export const UseScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            window.scrollY > threshold ? setScrolled(true) : setScrolled(false)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return scrolled;
}
