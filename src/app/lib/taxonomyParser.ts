import { getSinglePage } from "@/app/lib/contentParser";
import { slugify } from "@/app/lib/utils/textConverter";

// get all taxonomies from frontmatter
export const getTaxonomy = (folder: string, name: string): Array<string> => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages?.length; i++) {
    const taxonomyArray = taxonomyPages[i];
    for (let j = 0; j < taxonomyArray?.length; j++) {
      taxonomies.push(slugify(taxonomyArray[j]));
    }
  }
  const taxonomy = Array.from(new Set(taxonomies));

  return taxonomy;
};

export const getAllTaxonomy = (folder: string, name: string) => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages?.length; i++) {
    const taxonomyArray = taxonomyPages[i];
    for (let j = 0; j < taxonomyArray?.length; j++) {
      taxonomies.push(slugify(taxonomyArray[j]));
    }
  }

  return taxonomies;
};
