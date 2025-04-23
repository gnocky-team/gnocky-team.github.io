import { For } from "solid-js";
import nav from '@/config/nav';


export const Collapsible = () => {
    return (
        <div class="app__collapsible">
            <div class="app__collapsible__container">
                <ul class="app__collapsible__list">
                    <For each={nav}>
                        {(item) => (
                            <li class="app__collapsible__item">
                                <a href={item.href}>
                                    {item.title}
                                </a>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </div>
    );
}