import { useBackdrop } from "@/hooks/";


interface BackdropProps {
    appBackdrop: ReturnType<typeof useBackdrop>;
}

export const Backdrop = ({ appBackdrop }: BackdropProps) => {
    const BackdropComponent = () => {
        if (appBackdrop.isVisible()) {
            return (
                <div ref={appBackdrop.setRef} class="app__backdrop"></div>
            );
        } else {
            return (
                <></>
            );
        }
    }
    return (
        <>
            {BackdropComponent()}
        </>
    );
};