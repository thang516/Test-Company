import {useEffect, useState} from "react";

export function useWindowResize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            setWidth(currentWidth);
            setIsMobile(currentWidth <= 440);
            setIsTablet(currentWidth > 440 && currentWidth <= 820);
            setIsDesktop(currentWidth > 820);

        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return {width, isDesktop, isTablet, isMobile};
}