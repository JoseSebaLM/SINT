import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: c("paper"), "paper-2": c("paper-2"), surface: c("surface"),
        ink: c("ink"), "ink-2": c("ink-2"), "ink-3": c("ink-3"),
        line: c("line"), "line-2": c("line-2"),
        accent: c("accent"), "accent-ink": c("accent-ink"), "accent-soft": c("accent-soft"),
        ok: c("ok"), brand: c("brand"),
        "on-night": c("on-night"), "on-night-2": c("on-night-2"), "line-night": c("line-night"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(17 18 20 / 0.04), 0 8px 24px -6px rgb(17 18 20 / 0.08)",
        float: "0 2px 4px rgb(17 18 20 / 0.04), 0 24px 48px -12px rgb(17 18 20 / 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
