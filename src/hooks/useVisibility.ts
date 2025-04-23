import { createSignal } from "solid-js";


export const useVisibility = () => {
    const [header, setHeader] = createSignal(true);
    const [headerRef, setHeaderRef] = createSignal<HTMLDivElement>();
    const [headerCollapsible, setHeaderCollapsible] = createSignal(false);
    const [backdrop, setBackdrop] = createSignal(false);
    const [backdropRef, setBackdropRef] = createSignal<HTMLDivElement>();
    const [modals, setModals] = createSignal<string[]>([]);


    const addModal = (id: string) => {
        if (!modals().includes(id)) {
            setModals(current => [...current, id]);
        }
    };
    
    const removeModal = (id: string) => {
        if (modals().includes(id)) {
            setModals(current => current.filter(modalId => modalId !== id));
        }
    };

    const closeModals = () => {
        setModals([]);
    };

    return {
        header,
        setHeader,
        headerRef,
        setHeaderRef,
        headerCollapsible,
        setHeaderCollapsible,
        modals,
        addModal,
        removeModal,
        closeModals,
        backdrop,
        setBackdrop,
        backdropRef,
        setBackdropRef
    };
}