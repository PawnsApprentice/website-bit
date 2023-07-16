export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      pink: "#F40F92",
      "dead-pink": "#C12D5E",
      card: "#F3EAFC",
      background: "#F7F0FF",
      "white-purple": "#C1C0EF",
      "light-purple": "#4D3886",
      purple: "#33126A",
      "deep-purple": "#150136",
      grey: "#9D9D9D",
      peach: "#FFA1A1",
      "faded-purple": "#C795C6",
      "faded-green": "#9AC794",
    },
  },
  backgroundImage: {
    highlight: "linear-gradient(90deg, #8437E6 0%, #F73877 100%)",
  },
  fontFamily: {
    Wix: ["Wix Madefor Display, sans-serif"],
    Roboto: ["Roboto Mono, monospace"],
  },
  screens: {
    sm: "640px",
    md: "768px",
  },
};
export const plugins = [];
