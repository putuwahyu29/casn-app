"use client";

import ImageFallback from "@/components/ImageFallback";
import { markdownify } from "@/app/lib/utils/textConverter";
import { Informations } from "@/app/types";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import config from "@/app/config/config.json";

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
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!
                  )}
                />
              </div>
              <div className="col-12">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
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
                        <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light">
                          <ImageFallback
                            height={2800}
                            width={2076}
                            src={item.thumbnail}
                          />
                          <div className="mt-11 flex items-center">
                            <div className="text-dark dark:text-white">
                              <h4>
                                <Link
                                  href={`/${informasi_folder}/${item.slug}`}
                                >
                                  {item.judul}
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <Link
                            className="btn btn-outline-primary btn-sm mt-3"
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
    </>
  );
};

export default Informations;
