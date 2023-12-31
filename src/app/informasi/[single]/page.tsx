import config from "@/app/config/config.json";
import { getSinglePage } from "@/app/lib/contentParser";
import { humanize, markdownify, slugify } from "@/app/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/app/types";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa/index.js";

const { informasi_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(informasi_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(informasi_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const {
    title,
    meta_title,
    description,
    image,
    author,
    categories,
    date,
    tags,
    file,
  } = frontmatter;
  // const similarPosts = similerItems(post, posts, post.slug!);

  return (
    <div>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section pt-7">
        <div className="container">
          <div className="row justify-center">
            <h1
              dangerouslySetInnerHTML={markdownify(title)}
              className="h2 mb-4 text-primary"
            />
            <ul className="mb-4">
              <li className="mr-4 inline-block">
                <FaRegUserCircle className={"-mt-1 mr-2 inline-block"} />
                {humanize(author)}
              </li>
              <li className="mr-4 inline-block">
                <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
                {categories?.map((category: string, index: number) => (
                  <Link key={category} href={`/kategori/${slugify(category)}`}>
                    {humanize(category)}
                    {index !== categories.length - 1 && ", "}
                  </Link>
                ))}
              </li>
            </ul>
            <div className="row items-start justify-between">
              <div className="mb-10 flex items-center lg:col-5 lg:mb-0">
                <h5 className="mr-3">Tags :</h5>
                <ul>
                  {tags?.map((tag: string) => (
                    <li key={tag} className="inline-block">
                      <Link
                        className="m-1 block rounded bg-theme-light px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-theme-light dark:hover:bg-darkmode-primary dark:hover:text-dark"
                        href={`/tags/${slugify(tag)}`}
                      >
                        {humanize(tag)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <article className="lg:col-10">
              {file && (
                <div className="mt-3">
                  <iframe
                    src={file}
                    height={800}
                    width={1000}
                    className="w-full rounded border-collapse border-4 border-gray-300 dark:border-darkmode-theme-light"
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </article>
          </div>

          {/* <!-- Related posts --> */}
          {/* <div className="section pb-0">
            <h2 className="h3 mb-12 text-center">Informasi Lainnya</h2>
            <div className="row justify-center">
              {similarPosts.map((post) => (
                <div key={post.slug} className="lg:col-4">
                  <InformationCard data={post} />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default PostSingle;
