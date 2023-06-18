import config from "@/app/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "@/app/lib/taxonomyParser";
import { humanize } from "@/app/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const tags = () => {
  const { informasi_folder } = config.settings;
  const tags = getTaxonomy(informasi_folder, "tags");
  const alltags = getAllTaxonomy(informasi_folder, "tags");

  return (
    <div>
      <SeoMeta title={"Tags"} />
      <PageHeader title={"Tags"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {tags.map((tag: string) => {
              const count: number = alltags.filter(
                (c: string) => c === tag
              ).length;
              return (
                <li className="m-3 inline-block" key={tag}>
                  <Link
                    href={`/tags/${tag}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(tag)}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default tags;
