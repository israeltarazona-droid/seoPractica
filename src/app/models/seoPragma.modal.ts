export interface Route {
  text: string;
  src: string;
}

export interface Access {
  icon: string;
  src: string;
  info: string;
  setting?: string;
}

export interface ConstantSeo {
  title: string;
  subtitle: string;
  route: Route[];
  access?: Access[];
}