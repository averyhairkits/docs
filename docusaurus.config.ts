import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Discover Program Documentation Template",
  tagline: "A template for creating documentation for your project",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://disc-template.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "disc-template", // Usually your GitHub org/user name.
  projectName: "disc-documentation-template/", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          id: "docs",
          sidebarPath: require.resolve("./sidebars.documentation.ts"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
        pages: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Discover Program - Develop and Innovate for Social Change",
      logo: {
        alt: "Develop and Innovate for Social Change Logo",
        src: "img/disc-logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "overview",
          position: "left",
          label: "Documentation",
          docsPluginId: "docs",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Documentation",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DISC Website",
              href: "https://www.discnu.org/",
            },
            {
              label: "GitHub",
              href: "https://github.com/DISC-NU",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/disc_nu/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/DISC-NU",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Develop and Innovate for Social Change. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
