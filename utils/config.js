tailwind.config = {
  darkMode:
    "class" /* 'class' or 'media', we use 'class' to enable dark mode manually */,
  theme: {
    extend: {
      colors: {
        denger: "#ef3b2d",
        success: "#C8E7D3",
        active: "#71B58B",
        Mblue: "#63769d",
        Mbrow: "#4d4d4d",
        old: "#FF892F",
        oldBlu: "#4E86FF",
        blue: "#001542",
        teal: "#085454",
        navy: "#7A7A7A",
        white: "#FFFFFF",
        overRide: "#14b8a6",
        yellow: "#FFC745",
      },
      fontFamily: {
        sans: ["Poppins", "Raleway", "Open Sans", "sans-serif"],
        serif: ["Marcellus", "serif"],
      },
      keyframes: {
        grow_50: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        grow_60: {
          "0%": { width: "0%" },
          "100%": { width: "60%" },
        },
        grow_70: {
          "0%": { width: "0%" },
          "100%": { width: "70%" },
        },
        grow_80: {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
        grow_85: {
          "0%": { width: "0%" },
          "100%": { width: "85%" },
        },
        moveBadge_50: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        moveBadge_60: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-60%)" },
        },
        moveBadge_70: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-70%)" },
        },
        moveBadge_80: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-80%)" },
        },
        moveBadge_85: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-85%)" },
        },
      },
      animation: {
        "progress-50": "grow_50 0.4s ease-in-out forwards",
        "progress-60": "grow_60 0.4s ease-in-out forwards",
        "progress-70": "grow_70 0.4s ease-in-out forwards",
        "progress-80": "grow_80 0.4s ease-in-out forwards",
        "progress-85": "grow_85 0.4s ease-in-out forwards",
        "badge-50": "moveBadge_50 0.4s ease-in-out forwards",
        "badge-60": "moveBadge_60 0.4s ease-in-out forwards",
        "badge-70": "moveBadge_70 0.4s ease-in-out forwards",
        "badge-80": "moveBadge_80 0.4s ease-in-out forwards",
        "badge-85": "moveBadge_85 0.4s ease-in-out forwards",
      },
    },
  },
};
