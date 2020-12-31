module.exports = {
  title: 'Netkit-JH Docs',
  tagline: 'Documentation about using, developing and debugging netkit.',
  url: 'https://netkit-jh.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'netkit-jh',
  projectName: 'netkit-jh.github.io',
  themeConfig: {
    navbar: {
      title: 'Netkit-JH Docs',
      logo: {
        alt: 'netkit-jh-logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/netkit-jh/netkit-jh-build',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About Netkit',
              to: 'docs/about',
            },
            {
              label: 'Installing Netkit',
              to: 'docs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/netkit-jh/netkit-jh-build',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Netkit-JH Docs. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/netkit-jh/netkit-jh.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/netkit-jh/netkit-jh.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
