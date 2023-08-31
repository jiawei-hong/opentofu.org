// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenTF Documentation",
  favicon: "/img/favicon32.png",
  url: "https://docs.opentf.org",

  baseUrl: "/",

  // TODO: Provide final values
  organizationName: "opentf",
  projectName: "docs",

  // TODO: Once we clean up links we can switch to "throw"
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
      }),
    ],
  ],

  plugins: [
    async function tailwindPlugin() {
      return {
        name: "tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: Do we want to support light mode?
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: "OpenTF",
          src: "img/nav-logo.svg",
        },
        items: [
          {
            to: "/manifesto",
            label: "Manifesto",
            position: "left",
          },
          {
            to: "/supporters",
            label: "Supporters",
            position: "left",
          },
          {
            to: "/faq",
            label: "FAQs",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/doc",
            label: "Docs",
            position: "left",
          },
          // TODO: This link is important but there's no design for it yet
          // {
          //   type: "dropdown",
          //   label: "Community",
          //   position: "right",
          //   items: [
          //     {
          //       label: "GitHub Discussions",
          //       href: "https://github.com/orgs/opentffoundation/discussions",
          //     },
          //   ],
          // },
          {
            // TODO: replace href with opentf repo once it's public
            // TODO: replace icon github-button
            href: "https://github.com/opentffoundation/manifesto",
            position: "right",
            className: "header-github-link",
          },
          {
            href: "https://twitter.com/opentforg",
            position: "right",
            className: "header-twitter-link",
          },
          {
            // TODO: add actual slack link
            href: "https://slack.com/",
            position: "right",
            className: "header-slack-link",
          },
          {
            label: "Support Us",
            to: "https://github.com/opentffoundation/manifesto",
            className: "bg-brand px-6 py-3 mx-3 hover:text-white",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["hcl"],
      },
    }),
};

module.exports = config;