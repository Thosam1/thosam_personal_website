// import type { Config } from "tailwindcss";
//
// // using prose creates conflicts when having code blocks
// const disabledCss = {
//   'code::before': false,
//   'code::after': false,
//   'blockquote p:first-of-type::before': false,
//   'blockquote p:last-of-type::after': false,
//   pre: false,
//   code: false,
//   'pre code': false,
// }
//
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       typography: {
//         DEFAULT: { css: disabledCss },
//         sm: { css: disabledCss },
//         lg: { css: disabledCss },
//         xl: { css: disabledCss },
//         '2xl': { css: disabledCss },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//   ],
// };
// export default config;
