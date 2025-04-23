import { createSignal, onCleanup, onMount } from "solid-js";


export const useWindow = () => {
    const [width, setWidth] = createSignal(0);
    const [scrollY, setScrollY] = createSignal(0);
    const [previousScrollY, setPreviousScrollY] = createSignal(0);
    const [isScrollDown, setIsScrollDown] = createSignal(false);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    const updateScrollY = () => {
        setPreviousScrollY(scrollY());
        setScrollY(window.scrollY);
        setIsScrollDown(scrollY() > previousScrollY());
    }

    const isScrollYPast = (position: number) => {
        return scrollY() > position;
    }

    onMount(() => {
        updateWidth();

        window.addEventListener('resize', updateWidth);
        onCleanup(() => {
            window.removeEventListener('resize', updateWidth);
        });

        window.addEventListener('scroll', updateScrollY);
        onCleanup(() => {
            window.removeEventListener('scroll', updateScrollY);
        });
    });

    return {
        width,
        isScrollDown,
        isScrollYPast
    };
};