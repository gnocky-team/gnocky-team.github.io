import { useApp } from '@/hooks/';
import { Header, Backdrop } from '@/parts';


export const App = () => {
    const { header, backdrop } = useApp();

    return (
        <>
            <div class="app__ui">
                <Header
                    appHeader={header}
                />
            </div>
            <div class="app__modals">
                <Backdrop appBackdrop={backdrop} />
            </div>
        </>
    );
};