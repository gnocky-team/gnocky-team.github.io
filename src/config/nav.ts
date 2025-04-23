import { getUrl } from '@/utilities/url/';
import type { INavItem } from './types';


const navConfig: INavItem[] = [
    {title: 'Proyectos', href: getUrl('/projects')},
    {title: 'Blog', href: getUrl('/blog')},
    {title: 'Equipo', href: getUrl('/team')},
    {title: 'Contacto', href: getUrl('/contact')},
    {title: 'Acerca', href: getUrl('/about')}
];

export default navConfig;