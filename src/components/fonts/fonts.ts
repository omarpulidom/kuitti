import {
  Doto_100Thin,
  Doto_200ExtraLight,
  Doto_300Light,
  Doto_400Regular,
  Doto_500Medium,
  Doto_600SemiBold,
  Doto_700Bold,
  Doto_800ExtraBold,
  Doto_900Black,
} from '@expo-google-fonts/doto'
import {
  GeistMono_100Thin,
  GeistMono_100Thin_Italic,
  GeistMono_200ExtraLight,
  GeistMono_200ExtraLight_Italic,
  GeistMono_300Light,
  GeistMono_300Light_Italic,
  GeistMono_400Regular,
  GeistMono_400Regular_Italic,
  GeistMono_500Medium,
  GeistMono_500Medium_Italic,
  GeistMono_600SemiBold,
  GeistMono_600SemiBold_Italic,
  GeistMono_700Bold,
  GeistMono_700Bold_Italic,
  GeistMono_800ExtraBold,
  GeistMono_800ExtraBold_Italic,
  GeistMono_900Black,
  GeistMono_900Black_Italic,
} from '@expo-google-fonts/geist-mono'
import { GFSDidot_400Regular } from '@expo-google-fonts/gfs-didot'
import { LibreBarcode39_400Regular } from '@expo-google-fonts/libre-barcode-39'

const LocalFonts = {
  Merchant: require('@/assets/fonts/Merchant_Regular.ttf'),
  Salbabida: require('@/assets/fonts/Salbabida_Regular.otf'),
} as const

export const AppFonts = {
  Doto_100Thin,
  Doto_200ExtraLight,
  Doto_300Light,
  Doto_400Regular,
  Doto_500Medium,
  Doto_600SemiBold,
  Doto_700Bold,
  Doto_800ExtraBold,
  Doto_900Black,

  GFSDidot_400Regular,

  LibreBarcode39_400Regular,

  GeistMono_100Thin,
  GeistMono_100Thin_Italic,
  GeistMono_200ExtraLight,
  GeistMono_200ExtraLight_Italic,
  GeistMono_300Light,
  GeistMono_300Light_Italic,
  GeistMono_400Regular,
  GeistMono_400Regular_Italic,
  GeistMono_500Medium,
  GeistMono_500Medium_Italic,
  GeistMono_600SemiBold,
  GeistMono_600SemiBold_Italic,
  GeistMono_700Bold,
  GeistMono_700Bold_Italic,
  GeistMono_800ExtraBold,
  GeistMono_800ExtraBold_Italic,
  GeistMono_900Black,
  GeistMono_900Black_Italic,

  Merchant: LocalFonts.Merchant,
  Salbabida: LocalFonts.Salbabida,
} as const

export type AppFontKeys = keyof typeof AppFonts
