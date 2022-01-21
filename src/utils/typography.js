import Typography from "typography"

const typography = new Typography({
  scaleRatio: 6,
  headerFontFamily: [
    "Urbanist",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Urbanist", "sans-serif"],
  blockMarginBottom: "0.5rem",
  overrideStyles: () => ({
    h3: {
      fontWeight: "normal",
      lineHeight: 1.4,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
