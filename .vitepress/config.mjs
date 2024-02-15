import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  description: "Portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Blog", link: "/blog/" }
    ],

    sidebar: [
      {
        text: "Projects",
        items: [
          { text: "Home", link: "/projects/" },
          { text: "Todo", link: "/projects/todo" }
        ]
      },
      {
        text: "Blog",
        items: [
          { text: "Home", link: "/blog/" },
          { text: "Blog 1", link: "/blog/b1" }
        ]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/gigagrug/" }]
  }
})
