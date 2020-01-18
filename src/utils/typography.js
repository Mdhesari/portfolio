import Typography from "typography"

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Avenir Next', 'Helvetica Neue','sans-serif'],
    bodyFontFamily: ['Avenir Next', 'Helvetica Neue', 'sans-serif'],
    // See below for the full list of options.
  }
)

export const { scale, rhythm, options } = typography
export default typography