import { onMount, createEffect, createSignal } from "solid-js";
import { HEADER } from '@/constants/';
import type { useWindow, useVisibility } from "@/hooks/";

const { HEIGHT_CSS_VAR, HIDDEN_CLASSNAME } = HEADER;
const { SCROLL_PAST_HEIGHT_CLASSNAME, COLLAPSIBLE_VISIBLE_CLASSNAME } = HEADER;


interface useHeaderProps {
    appWindow: ReturnType<typeof useWindow>;
    appVisibility: ReturnType<typeof useVisibility>;
}

export const useHeader = ({ appWindow, appVisibility }: useHeaderProps) => {
    const getHeight = (): number => {
        const root = document.documentElement;
        const height = getComputedStyle(root)
            .getPropertyValue(HEIGHT_CSS_VAR).trim();
        const heightNumber = isNaN(parseFloat(height)) ? 64 : parseFloat(height);

        return heightNumber;
    };

    const isScrollPastHeight = () => {
        const height = getHeight();

        return appWindow.isScrollYPast(height);
    };

    const updateClassName = () => {
        if (appVisibility.header()) {
            document.body.classList.remove(HIDDEN_CLASSNAME);
        } else {
            document.body.classList.add(HIDDEN_CLASSNAME);
        }
    };
    
    const updateScrollClassName = () => {
        if (isScrollPastHeight()) {
            document.body.classList.add(SCROLL_PAST_HEIGHT_CLASSNAME);
        } else {
            document.body.classList.remove(SCROLL_PAST_HEIGHT_CLASSNAME);
        }
    };

    const updateVisibility = () => {
        if (appVisibility.headerCollapsible()) {
            appVisibility.setHeader(true);
        } else {
            if (isScrollPastHeight() && appWindow.isScrollDown()) {
                appVisibility.setHeader(false);
            } else {
                appVisibility.setHeader(true);
            }
        }
    };

    const toggleCollapsible = () => {
        appVisibility.setHeaderCollapsible(prev => !prev);
    };

    const updateCollapsibleClassName = () => {
        if (appVisibility.headerCollapsible()) {
            document.body.classList.add(COLLAPSIBLE_VISIBLE_CLASSNAME);
        } else {
            document.body.classList.remove(COLLAPSIBLE_VISIBLE_CLASSNAME);
        }
    }

    const updateCollapsibleVisibility = () => {
        if (appWindow.width() > 1024) {
            appVisibility.setHeaderCollapsible(false);
        }
    };

    onMount(() => {
        updateClassName();
        updateScrollClassName();
        updateCollapsibleClassName();
    });
    
    createEffect(() => {
        updateVisibility();
    });
    
    createEffect(() => {
        updateCollapsibleVisibility();
    });
    
    createEffect(() => {
        updateClassName();
    });
    
    createEffect(() => {
        updateScrollClassName();
    });
    
    createEffect(() => {
        updateCollapsibleClassName();
    });

    return {
        ref: appVisibility.headerRef,
        setRef: appVisibility.setHeaderRef,
        toggleCollapsible
    };
}