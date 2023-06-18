import ImageFallback from "@/components/ImageFallback";
import { getListPage } from "@/app/lib/contentParser";
import { markdownify } from "@/app/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/app/types";
import { FaStar } from "react-icons/fa/index.js";
import Informations from "@/partials/Informations";

const Home = () => {
  const homepage = getListPage("_index.md");
  const jadwal = getListPage("sections/jadwal.md");
  const pengumuman = getListPage("sections/pengumuman.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <div>
      <SeoMeta />
      <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-16 text-center lg:col-7">
              <h1
                className="mb-4 text-primary"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <a className="btn btn-primary" href={banner.button!.link}>
                  {banner.button!.label}
                </a>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="Banner"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="fill-theme-light dark:fill-darkmode-theme-light"
      >
        <path d="M0,64L26.7,58.7C53.3,53,107,43,160,64C213.3,85,267,139,320,138.7C373.3,139,427,85,480,80C533.3,75,587,117,640,160C693.3,203,747,245,800,240C853.3,235,907,181,960,160C1013.3,139,1067,149,1120,133.3C1173.3,117,1227,75,1280,58.7C1333.3,43,1387,53,1413,58.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${
            index % 2 === 0 && "bg-theme-light dark:bg-darkmode-theme-light"
          }`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4 text-primary"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaStar className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-theme-light dark:fill-darkmode-theme-light">
        <path
          d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,112C840,139,960,181,1080,170.7C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Informations data={jadwal} />
      <Informations data={pengumuman} />
    </div>
  );
};

export default Home;
