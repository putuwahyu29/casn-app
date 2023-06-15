import { slugify } from "@/app/lib/utils/textConverter";
import { Post } from "@/app/types";

const taxonomyFilter = (posts: Post[], name: string, key: any) =>
  posts.filter((post) =>
    //@ts-ignore
    post.frontmatter[name].map((name: string) => slugify(name)).includes(key)
  );

export default taxonomyFilter;
