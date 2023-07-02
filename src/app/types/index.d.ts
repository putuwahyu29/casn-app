export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    tags: string[];
    author: string;
    date?: string;
    draft?: boolean;
    file: string;
  };
  slug?: string;
  content?: string;
};


export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Informations = {
  judul: string;
  thumbnail: string;
  slug: string;
};


export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
