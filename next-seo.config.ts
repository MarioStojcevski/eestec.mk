import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
    defaultTitle: "EESTEC MK",
    titleTemplate: "| %s",
    description: "EESTEC MK Website/Webpage",
    canonical: "https://eestec.mk/",
    additionalLinkTags: [{
        rel: "icon",
        href: "/eestec.ico"
    }],
    openGraph: {
        url: "https://eestec.mk/",
        type: "website",
        locale: "mk_MK",
        site_name: "EESTEC MK",
  },
};

export default config;
