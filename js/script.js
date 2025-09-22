tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7f1581",
        "background-light": "#f8f6f8",
        "background-dark": "#201220",
        "foreground-light": "#1f2937",
        "foreground-dark": "#d1d5db",
        "muted-foreground-light": "#6b7280",
        "muted-foreground-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151",
      },
      fontFamily: {
        display: "Inter",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
