const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    // auth: {
    //   logo: AuthLogo,
    // },
    // Replace the favicon
    // head: {
    //   favicon: AuthLogo,
    // },
    // Add a new locale, other than 'en'
    locales: ["fr", "de"],
    // Replace the Strapi logo in the main navigation
    // menu: {
    //   logo: AuthLogo,
    // },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#ac73e6",
          primary600: "#9736e8",
          primary700: "#8312d1",
          danger700: "#b72b1a",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
    // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "SHIFTBOOLEAN",
        "app.components.LeftMenu.navbrand.workplace": "SHIFTBOOLEAN",
        "Auth.form.email.label": "email",
        "Auth.form.email.placeholder": "email",
        "Auth.form.welcome.title": "Welcome To SHIFTBOOLEAN!",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },

      fr: {
        "Auth.form.email.label": "test",
        Users: "Utilisateurs",
        City: "CITY (FRENCH)",
        // Customize the label of the Content Manager table.
        Id: "ID french",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
