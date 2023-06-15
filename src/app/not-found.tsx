import ImageFallback from "@/components/ImageFallback";
import { getListPage } from "@/app/lib/contentParser";
import { markdownify } from "@/app/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/app/types";
import Link from "next/link";

const NotFound = async () => {
  const data: RegularPage = getListPage("pages/404.md");
  const { image, title } = data.frontmatter;
  return (
    <>
      <SeoMeta title={"Page Not Found"} image={"/images/404.png"} />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center sm:col-10 md:col-8 lg:col-6">
              <ImageFallback
                className="mb-8 w-full"
                src={image}
                alt="page not found"
                height={320}
                width={630}
              />
              <h1
                className="h2 mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              ></h1>

              <Link href="/" className="btn btn-primary mt-8">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
