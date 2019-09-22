import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.baseFontSize = '18px'

const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
