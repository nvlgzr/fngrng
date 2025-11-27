import colors from 'tailwindcss/colors';

// Remove deprecated color names to silence warnings
const { lightBlue, warmGray, trueGray, coolGray: _coolGray, blueGray, ...safeColors } = colors;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    colors: {
      ...safeColors,
      coolGray: {
        100: "hsl(220deg 14% 99%)",
        200: "hsla(220, 13%, 91%, 0.5)",
        300: "hsl(220, 13%, 80%)",
        400: colors.gray[400],
        500: colors.gray[500],
        700: colors.gray[700],
        800: colors.gray[800],
        900: colors.gray[900]
      },
      blue: {
        300: "hsl(195, 86%, 64%)",
        400: "hsl(214, 84%, 56%)",
      },
      red: {
        300: "hsl(360, 50%, 85%)",
        400: "hsl(360, 50%, 65%)",
        500: "hsl(0, 79%, 63%)",
      },
      green: {
        400: "hsl(145, 50%, 62%)",
        500: "hsl(161, 94%, 30%)",
      },
      purple: {
        400: "hsl(284, 59%, 64%)",
        500: "hsl(271, 70%, 60%)",
        800: "hsl(240, 94%, 40%)"
      },
    },
    fontFamily: {
      'sans': "Tauri, sans-serif",
      'serif': "'Libre Baskerville', serif"
    },
    extend: {
      width: {
        'prompt': '35ch',
      }
    },
  },
  plugins: [],
}
