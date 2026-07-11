import type { Config } from 'tailwindcss'
import { Colors } from './src/components/colors'
import { AppFontNames } from './src/components/fonts/font-names'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
  ],

  presets: [
    require('nativewind/preset'),
  ],
  theme: {
    extend: {
      colors: Colors,
      fontFamily: {
        doto: [
          AppFontNames.Doto_400Regular,
        ],
        'doto-thin': [
          AppFontNames.Doto_100Thin,
        ],
        'doto-extralight': [
          AppFontNames.Doto_200ExtraLight,
        ],
        'doto-light': [
          AppFontNames.Doto_300Light,
        ],
        'doto-regular': [
          AppFontNames.Doto_400Regular,
        ],
        'doto-medium': [
          AppFontNames.Doto_500Medium,
        ],
        'doto-semibold': [
          AppFontNames.Doto_600SemiBold,
        ],
        'doto-bold': [
          AppFontNames.Doto_700Bold,
        ],
        'doto-extrabold': [
          AppFontNames.Doto_800ExtraBold,
        ],
        'doto-black': [
          AppFontNames.Doto_900Black,
        ],

        didot: [
          AppFontNames.GFSDidot_400Regular,
          'serif',
        ],

        'geist-mono': [
          AppFontNames.GeistMono_400Regular,
          'monospace',
        ],
        'geist-mono-thin': [
          AppFontNames.GeistMono_100Thin,
        ],
        'geist-mono-extralight': [
          AppFontNames.GeistMono_200ExtraLight,
        ],
        'geist-mono-light': [
          AppFontNames.GeistMono_300Light,
        ],
        'geist-mono-regular': [
          AppFontNames.GeistMono_400Regular,
        ],
        'geist-mono-medium': [
          AppFontNames.GeistMono_500Medium,
        ],
        'geist-mono-semibold': [
          AppFontNames.GeistMono_600SemiBold,
        ],
        'geist-mono-bold': [
          AppFontNames.GeistMono_700Bold,
        ],
        'geist-mono-extrabold': [
          AppFontNames.GeistMono_800ExtraBold,
        ],
        'geist-mono-black': [
          AppFontNames.GeistMono_900Black,
        ],
        'geist-mono-thin-italic': [
          AppFontNames.GeistMono_100Thin_Italic,
        ],
        'geist-mono-extralight-italic': [
          AppFontNames.GeistMono_200ExtraLight_Italic,
        ],
        'geist-mono-light-italic': [
          AppFontNames.GeistMono_300Light_Italic,
        ],
        'geist-mono-italic': [
          AppFontNames.GeistMono_400Regular_Italic,
        ],
        'geist-mono-medium-italic': [
          AppFontNames.GeistMono_500Medium_Italic,
        ],
        'geist-mono-semibold-italic': [
          AppFontNames.GeistMono_600SemiBold_Italic,
        ],
        'geist-mono-bold-italic': [
          AppFontNames.GeistMono_700Bold_Italic,
        ],
        'geist-mono-extrabold-italic': [
          AppFontNames.GeistMono_800ExtraBold_Italic,
        ],
        'geist-mono-black-italic': [
          AppFontNames.GeistMono_900Black_Italic,
        ],
      },
    },
  },

  plugins: [],
}

export default config
