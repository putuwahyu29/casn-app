"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/app/config/config.json";
import social from "@/app/config/social.json";
import { markdownify } from "@/app/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-darkmode-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="row items-center pt-7">
          <div className="mb-3 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
            <Link href={"/"}>
              <h4 className="text-primary">CASN BPS</h4>
            </Link>
          </div>
          <div className="mb-3 text-center lg:col-6 lg:mb-0">
            <Link href="#">
              <div className="text-darkmode-light dark:text-darkmode-light hover:text-white">
                Kembali ke atas
              </div>
            </Link>
          </div>
          <div className="mb-3 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="pb-7">
        <div className="container text-center text-darkmode-light dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
