// TODO: UNCOMMENT THIS TO RETURN TO DEFAULT SETTINGS
// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     './app/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     '!./node_modules/**', // Exclude everything in node_modules to speed up builds
//   ],
//   theme: {
//     extend: {
//       colors: {
//         transparent: 'transparent',
//         current: 'currentColor',
//         black: '#000000',
//         primary: '#053FB0',
//         secondary: '#3071EF',
//         white: '#FFFFFF',
//         error: {
//           DEFAULT: '#AD0000',
//           secondary: '#C62828',
//         },
//         success: {
//           DEFAULT: '#146622',
//           secondary: '#388E3C',
//         },
//         gray: {
//           100: '#F1F3F5',
//           200: '#CFD8DC',
//           300: '#AFBAC5',
//           400: '#90A4AE',
//           500: '#546E7A',
//           600: '#091D45',
//         },
//       },
//       fontFamily: {
//         sans: ['var(--font-inter)'],
//       },
//       borderColor: {
//         DEFAULT: '#CFD8DC',
//       },
//       keyframes: {
//         revealVertical: {
//           '0%': { transform: 'translateY(-100%)' },
//           '100%': { transform: 'translateY(0%)' },
//         },
//       },
//       animation: {
//         revealVertical: 'revealVertical 400ms forwards cubic-bezier(0, 1, 0.25, 1)',
//       },
//     },
//   },

//   plugins: [
//     // @ts-ignore

//     require('tailwindcss-radix')(),
//     require('tailwindcss-animate'),
//     require('@tailwindcss/container-queries'),
//   ],
// };

// module.exports = config;

const config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './vibes/**/*.{ts,tsx}',
    '!./node_modules/**',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          highlight: 'color-mix(in oklab, hsl(var(--primary)), white 75%)',
          shadow: 'color-mix(in oklab, hsl(var(--primary)), black 75%)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          highlight: 'color-mix(in oklab, hsl(var(--accent)), white 75%)',
          shadow: 'color-mix(in oklab, hsl(var(--accent)), black 75%)',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          highlight: 'color-mix(in oklab, hsl(var(--success)), white 75%)',
          shadow: 'color-mix(in oklab, hsl(var(--success)), black 75%)',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          highlight: 'color-mix(in oklab, hsl(var(--error)), white 75%)',
          shadow: 'color-mix(in oklab, hsl(var(--error)), black 75%)',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          highlight: 'color-mix(in oklab, hsl(var(--warning)), white 75%)',
          shadow: 'color-mix(in oklab, hsl(var(--warning)), black 75%)',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          highlight: 'color-mix(in oklab, hsl(var(--info)), white 75%)',
          shadow: 'color-mix(in oklab, hsl(var(--info)), black 75%)',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        contrast: {
          100: 'hsl(var(--contrast-100))',
          200: 'hsl(var(--contrast-200))',
          300: 'hsl(var(--contrast-300))',
          400: 'hsl(var(--contrast-400))',
          500: 'hsl(var(--contrast-500))',
        },
      },
      fontFamily: {
        heading: [
          'var(--font-family-heading)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-heading)',
            fontVariationSettings: 'var(--font-variation-settings-heading)',
          },
        ],
        body: [
          'var(--font-family-body)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-body)',
            fontVariationSettings: 'var(--font-variation-settings-body)',
          },
        ],
        mono: [
          'var(--font-family-mono)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-mono)',
            fontVariationSettings: 'var(--font-variation-settings-mono)',
          },
        ],
      },
      fontSize: {
        xs: 'var(--font-size-xs, 0.75rem)',
        sm: 'var(--font-size-sm, 0.875rem)',
        base: 'var(--font-size-base, 1rem)',
        lg: 'var(--font-size-lg, 1.125rem)',
        xl: 'var(--font-size-xl, 1.25rem)',
        '2xl': 'var(--font-size-2xl, 1.5rem)',
        '3xl': 'var(--font-size-3xl, 1.875rem)',
        '4xl': 'var(--font-size-4xl, 2.25rem)',
        '5xl': 'var(--font-size-5xl, 3rem)',
        '6xl': 'var(--font-size-6xl, 3.75rem)',
        '7xl': 'var(--font-size-7xl, 4.5rem)',
        '8xl': 'var(--font-size-8xl, 6rem)',
        '9xl': 'var(--font-size-9xl, 8rem)',
      },
      shadows: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-radix')(),
  ],
};

export default config;
