"use client";

import ImageFallback from "@/components/ImageFallback";
import { markdownify } from "@/app/lib/utils/textConverter";
import { Informations } from "@/app/types";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import config from "@/app/config/config.json";
import "swiper/css";
import "swiper/css/navigation";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    slug: string;
    informations: Array<Informations>;
  };
}

const Informations = ({ data }: { data: PageData }) => {
  const { informasi_folder } = config.settings;
  return (
    <div>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4 text-primary"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!
                  )}
                />
              </div>
              <div className="col-12">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  loop={true}
                  loopedSlides={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.frontmatter.informations.map(
                    (item: Informations, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-lg bg-theme-light px-5 py-7 dark:bg-darkmode-theme-light">
                          <ImageFallback
                            width={445}
                            height={230}
                            src={item.thumbnail}
                            alt={item.judul}
                          />
                          <div className="mt-11 flex items-center">
                            <div className="text-dark dark:text-white">
                              <h4>
                                <Link
                                  href={`/${informasi_folder}/${item.slug}`}
                                >
                                  <div className="h-[1.3em] overflow-hidden">
                                    {item.judul}
                                  </div>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <Link
                            className="btn btn-outline-secondary btn-sm mt-3"
                            href={`/${informasi_folder}/${item.slug}`}
                          >
                            Lihat Selengkapnya
                          </Link>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <Link
                  className="btn btn-primary mt-3"
                  href={data.frontmatter.slug}
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Informations;
