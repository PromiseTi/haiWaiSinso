const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'basr',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'basr.ai',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          label: 'Home',
          position: 'right',
          to: 'docs/home',
        },
        {
          label: 'About Us',
          position: 'right',
          to: 'docs/About/aboutUs',
          items: [
            {
              label: 'Mission and Vision',
              to: 'docs/About/mission',
            },
            {
              label: 'Company Values',
              to: 'docs/About/company',
            },
            {
              label: 'Team',
              to: 'docs/About/team',
            },
            {
              label: 'Products',
              to: 'docs/About/products',
            },
            {
              label: 'Speciality',
              to: 'docs/About/speciality',
            },
          ],
        },
        {
          label: 'Investors Relations',
          position: 'right',
          to: 'docs/belat/relations',
          items: [
            {
              label: 'Why BASR',
              to: 'docs/belat/whyBasr',
            },
            {
              label: 'Timeline',
              to: 'docs/belat/timeLine',
            },
            {
              label: 'Role of Blockchain in Healthcare',
              to: 'docs/belat/blockchain',
            },
            {
              label: 'Role of Cryptocurrency in Healthcare',
              to: 'docs/belat/cryptocurrency',
            },
            {
              label: 'Become a Partner',
              to: 'docs/belat/partner',
            },
          ],
        },
        {
          label: 'In Media',
          position: 'right',
          to: 'docs/inMedia',
        },
        {
          label: 'Contact Us',
          position: 'right',
          to: 'docs/contactUs',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  ],
}
