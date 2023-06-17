"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/app/config/config.json";
import menu from "@/app/config/menu.json";
import social from "@/app/config/social.json";
import { markdownify } from "@/app/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
