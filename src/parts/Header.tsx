import { For } from 'solid-js';
import { getUrl } from '@/utilities/url';
import nav from '@/config/nav';
import { useHeader } from '@/hooks/';
import { Collapsible } from '@/parts';
import Search from 'lucide-solid/icons/search';
import Menu from 'lucide-solid/icons/menu';


interface HeaderProps {
    appHeader: ReturnType<typeof useHeader>;
}

export const Header = ({ appHeader }: HeaderProps) => {
    return (
        <header ref={appHeader.setRef} class="app__header">
            <div class="app__header__container">
                <a href={getUrl("/")}>
                    <img src={getUrl("/images/logo.svg")} alt="Logo" class="app__header__logo" />
                </a>
                <nav class="app__header__nav">
                    <ul class="app__header__nav__list">
                        <For each={nav}>
                            {(item) => (
                                <li class="app__header__nav__item">
                                    <a href={item.href}>
                                        {item.title}
                                    </a>
                                </li>
                            )}
                        </For>
                    </ul>
                    <a href={getUrl("/search")} id="header-btn-search" class="app__header__btn">
                        <Search class="app__header__btn__icon" size="1em" />
                    </a>
                    <button
                        id="header-btn-menu" class="app__header__btn"
                        onClick={appHeader.toggleCollapsible}
                    >
                        <Menu class="app__header__btn__icon" size="1em" />
                    </button>
                </nav>
            </div>
            <Collapsible />
        </header>
    );
};