import { ConstantSeo } from "../models/seoPragma.modal";

export const BASE_ROUTE_URL: string = 'sp';
export const PAGES: any = {
  home: 'inicio',
  menu: {
    inicio: 'Inicio',
    products: 'Productos',
    about: 'Nosotros',
    blog: 'Blog',
    contant: 'Contactos',
  },
};

export const seoPragma: ConstantSeo = {
  title: 'Productos',
  subtitle: '',
  route: [{ text: 'Inicio', src: '../inicio' }, { text: PAGES.menu.products, src: './products' }],
};
export const seoPragmaBlog: ConstantSeo = {
  title: 'Blog',
  subtitle: '',
  route: [{ text: 'Inicio', src: '../inicio' }, { text:'Blog', src: './blog' }],
};
