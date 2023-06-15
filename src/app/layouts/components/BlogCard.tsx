import config from "@/app/config/config.json";
import { humanize, plainify, slugify } from "@/app/lib/utils/textConverter";
import { Post } from "@/app/types";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa/index.js";
import ImageFallback from "./ImageFallback";

const BlogCard = ({ data }: { data: Post }) => {
  const { informasi_folder } = config.settings;
  const { title, image, author, categories } = data.frontmatter;
  return (
    <div className="bg-body dark:bg-darkmode-body">
      {image && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={image}
          alt={title}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3">
        <Link href={`/${informasi_folder}/${data.slug}`}>{title}</Link>
      </h4>
      <ul className="mb-4">
        <li className="mr-4 inline-block">
          <FaRegUserCircle className={"-mt-1 mr-2 inline-block"} />
          {humanize(author)}
        </li>
        <li className="mr-4 inline-block">
          <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
          {categories?.map((category: string, index: number) => (
            <Link key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== categories.length - 1 && ", "}
            </Link>
          ))}
        </li>
      </ul>
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/${informasi_folder}/${data.slug}`}
      >
        Lihat Selengkapnya
      </Link>
    </div>
  );
};

export default BlogCard;
