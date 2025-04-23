import { onMount, createEffect, onCleanup } from "solid-js";
import { BACKDROP } from "@/constants/";
import type { useVisibility } from "@/hooks/";
const { VISIBLE_CLASSNAME } = BACKDROP;


interface useBackdropProps {
    appVisibility: ReturnType<typeof useVisibility>;
}

export const useBackdrop = ({ appVisibility }: useBackdropProps) => {
    const isVisible = () => {
        return appVisibility.backdrop();
    }

    const updateClassName = () => {
        if (appVisibility.backdrop()) {
            document.body.classList.add(VISIBLE_CLASSNAME);
        } else {
            document.body.classList.remove(VISIBLE_CLASSNAME);
        }
    }

    const updateVisibility = () => {
        if (appVisibility.modals().length > 0) {
            appVisibility.setBackdrop(true);
        } else {
            appVisibility.setBackdrop(false);
        }
    };

    const handleClick = (event: MouseEvent) => {
        const isInside = appVisibility.backdropRef()?.contains(event.target as Node);

        if (isInside) {
            appVisibility.closeModals();
            appVisibility.setBackdrop(false);
        }
    };

    onMount(() => {
        updateVisibility();
        updateClassName();

        document.addEventListener("click", handleClick);
        onCleanup(() => {
            document.removeEventListener("click", handleClick);
        });
    });

    createEffect(() => {
        updateVisibility();
    });

    createEffect(() => {
        updateClassName();
    });

    return {
        ref: appVisibility.backdropRef,
        setRef: appVisibility.setBackdropRef,
        isVisible
    };
}
