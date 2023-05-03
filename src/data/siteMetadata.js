// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
    title: "Pmentors",
    author: 'Sid Ahmed Sahraoui',
    headerTitle: 'Pmentors for a better interviews preparing',
    description: 'Pmentors is a website for a better interview preparing, especially technical and HR job interviews, Campus France interviews .',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: 'https://pmentors.vercel.app/',
    siteRepo: 'https://github.com/sidahmedsahraoui/pmentors',
    siteLogo: '/public/logo.png',
    image: '/public/logo.png',
    socialBanner: '',
    email: 's.sahraoui@esi-sba.dz',
    github: 'https://github.com/sidahmedsahraoui',
    twitter: 'https://twitter.com/sidahmedsahraoui',
    youtube: 'https://www.youtube.com/@sidahmedsahraoui',
    linkedin: 'https://www.linkedin.com/in/sidahmedsahraoui',
    locale: 'en-US',
    analytics: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // supports plausible, simpleAnalytics, umami or googleAnalytics
        plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
        simpleAnalytics: false, // true or false
        umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
        posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
        googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    },

    comments: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: 'giscus', // supported providers: giscus, utterances, disqus
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'pathname', // supported options: pathname, url, title
            reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: '0',
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: 'light',
            // theme when dark mode
            darkTheme: 'transparent_dark',
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: '',
            lang: 'en',
        },
    },
    // search: {
    //   provider: 'kbar', // kbar or algolia
    //   kbarConfig: {
    //     searchDocumentsPath: 'search.json', // path to load documents to search
    //   },
    //   provider: 'algolia',
    //   algoliaConfig: {
    //     // The application ID provided by Algolia
    //     appId: 'R2IYF7ETH7',
    //     // Public API key: it is safe to commit it
    //     apiKey: '599cec31baffa4868cae4e79f180729b',
    //     indexName: 'docsearch',
    //   },
    // },
}

module.exports = siteMetadata