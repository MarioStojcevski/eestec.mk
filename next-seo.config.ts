import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
    titleTemplate: "| %s",
    description: "EESTEC MK Website",
    openGraph: {
        url: "https://eestec.mk/",
        type: "website",
        locale: "mk_MK",
        site_name: "EESTEC MK",
  },
};

export default config;
