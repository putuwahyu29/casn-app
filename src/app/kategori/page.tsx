import config from "@/app/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "@/app/lib/taxonomyParser";
import { humanize } from "@/app/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const Categories = () => {
  const { informasi_folder } = config.settings;
  const categories = getTaxonomy(informasi_folder, "categories");
  const allCategories = getAllTaxonomy(informasi_folder, "categories");

  return (
    <>
      <SeoMeta title={"Kategori"} />
      <PageHeader title={"Kategori"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {categories.map((category: string) => {
              const count = allCategories.filter(
                (c: string) => c === category
              ).length;
              return (
                <li className="m-3 inline-block" key={category}>
                  <Link
                    href={`/kategori/${category}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(category)}{" "}
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
    </>
  );
};

export default Categories;
