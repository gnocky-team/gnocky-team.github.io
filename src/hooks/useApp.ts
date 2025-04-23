import { useWindow, useVisibility, useHeader, useBackdrop } from "@/hooks/";


export const useApp = () => {
    const window = useWindow();
    const visibility = useVisibility();
    const header = useHeader({
        appWindow: window,
        appVisibility: visibility
    });
    const backdrop = useBackdrop({
        appVisibility: visibility
    });

    return {
        header,
        backdrop
    };
}
 