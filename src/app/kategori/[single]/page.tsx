import InformationCard from "@/components/InformationCard";
import config from "@/app/config/config.json";
import { getSinglePage } from "@/app/lib/contentParser";
import { getTaxonomy } from "@/app/lib/taxonomyParser";
import taxonomyFilter from "@/app/lib/utils/taxonomyFilter";
import { humanize } from "@/app/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/app/types";

const { informasi_folder } = config.settings;
type StaticParams = () => { single: string }[];

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: StaticParams = () => {
  const categories = getTaxonomy(informasi_folder, "categories");

  const paths = categories.map((category) => ({
    single: category,
  }));

  return paths;
};

const CategorySingle = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(informasi_folder);
  const filterByCategories = taxonomyFilter(posts, "categories", params.single);

  return (
    <div>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByCategories.map((post: Post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <InformationCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySingle;
