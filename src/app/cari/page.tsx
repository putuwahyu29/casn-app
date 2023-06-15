import config from "@/app/config/config.json";
import Search from "@/app/layouts/Search";
import { getSinglePage } from "@/app/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/app/types";

const { informasi_folder } = config.settings;

// Retrieve all articles
const posts: Post[] = getSinglePage(informasi_folder);

// List of items to search in
const searchList = posts.map((item) => ({
  slug: item.slug!,
  frontmatter: item.frontmatter,
  content: item.content,
}));

const SearchPage = () => {
  return (
    <>
      <SeoMeta title={"Pencarian"} />
      <Search searchList={searchList} />
    </>
  );
};

export default SearchPage;
