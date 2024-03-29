import Typography from "typography"

const typography = new Typography({
  baseFontSize: 18,
  scaleRatio: 4,
  headerFontFamily: [
    "Urbanist",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Quicksand", "Urbanist", "Helvetica Neue", "sans-serif"],
  blockMarginBottom: "0.75rem",
  overrideStyles: () => ({
    h2: {
      fontSize: "4.5rem",
      marginBottom: "2.5rem",
    },
    h3: {
      fontWeight: "normal",
      lineHeight: 1.4,
    },
    h5: {
      marginBottom: "2.5rem",
    },
    p: {
      marginBottom: "1rem",
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
