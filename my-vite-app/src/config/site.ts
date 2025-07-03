export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Neighborly",
  description: "Find your perfect community based on culture, lifestyle, and preferences.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Preferences",
      href: "/preferences",
    },
    {
      label: "Explore Areas",
      href: "/explore",
    },

  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Preferences", 
      href: "/preferences",
    },
    {
      label: "Explore Areas",
      href: "/explore",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/ALIA-HAIDER",
  
  },
};
