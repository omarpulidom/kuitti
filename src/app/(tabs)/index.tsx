import { useState } from "react";
import { Text, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GrainyImage, HoloCard } from "@/components/Skia";
import { Pdf417View } from "@reeq/react-native-pdf417";

const cardBackground = require("@/assets/images/id_card_bg2.png");
const photo = require("@/assets/mock/omar.png");
const signature = require("@/assets/mock/sign.png");

export default function HomeTab() {
  const { width: cardWidth, height: cardHeight } =
    Image.resolveAssetSource(cardBackground);
  const [cardRenderSize, setCardRenderSize] = useState({ width: 0, height: 0 });
  const sizes = {
    photo: {
      width: cardRenderSize.width * 0.29,
      height: cardRenderSize.height * 0.61,
    },
    grain: cardRenderSize.height * 0.22,
    barcode: {
      width: cardRenderSize.width * 0.29,
      height: cardRenderSize.height * 0.1,
    },
    signature: {
      width: cardRenderSize.width * 0.15,
      height: cardRenderSize.height * 0.096,
    },
    title: cardRenderSize.height * 0.091,
    subtitle: cardRenderSize.height * 0.04,

    itemTitle: cardRenderSize.height * 0.03,
    itemContent: cardRenderSize.height * 0.051,

    padding: cardRenderSize.height * 0.081,

    footer: cardRenderSize.height * 0.025,
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-50">
      <Text>ID</Text>
      <View className="w-full p-4 items-center justify-center">
        <View
          onLayout={(e) => {
            setCardRenderSize({
              width: e.nativeEvent.layout.width,
              height: e.nativeEvent.layout.height,
            });
          }}
          style={{
            width: "100%",
            aspectRatio: cardWidth / cardHeight,
          }}
        >
          <HoloCard
            width={cardRenderSize.width}
            height={cardRenderSize.height}
            borderRadius={16}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          >
            <ImageBackground
              source={cardBackground}
              style={{ width: "100%", height: "100%" }}
            >
              <View className="flex-1" style={{ padding: sizes.padding }}>
                <View className="flex-row">
                  {/* Left Column: Photo + Barcode */}
                  <View>
                    <View
                      className="border-[0.2px] border-[#A9A9A9]"
                      style={{
                        borderRadius: sizes.padding * 0.45,
                      }}
                    >
                      <GrainyImage
                        source={photo}
                        width={sizes.photo.width}
                        height={sizes.photo.height}
                        borderRadius={sizes.padding * 0.45}
                        grainTileSize={sizes.grain}
                      />
                    </View>
                    <Pdf417View
                      text="@omarpm"
                      style={{
                        height: sizes.barcode.height,
                        width: sizes.barcode.width,
                        marginTop: sizes.padding * 0.375,
                        mixBlendMode: "color-burn",
                      }}
                    />
                  </View>
                  {/* Right Column: Text */}
                  <View className="flex-1" style={{ gap: sizes.padding }}>
                    {/* Title + Subtitle */}
                    <View
                      className="items-center justify-center"
                      style={{
                        paddingTop: sizes.padding * 0.375,
                        marginRight: -sizes.padding,
                      }}
                    >
                      <Text
                        className="font-didot leading-none"
                        style={{ fontSize: sizes.title }}
                      >
                        IDENTITY CARD
                      </Text>
                      <Text
                        className="font-geist-mono-medium leading-none"
                        style={{ fontSize: sizes.subtitle }}
                      >
                        KUITTI
                      </Text>
                    </View>
                    {/* Data + Photo */}
                    <View
                      className="flex-row items-center"
                      style={{
                        gap: sizes.padding * 0.75,
                        paddingLeft: sizes.padding * 0.75,
                      }}
                    >
                      {/* Data */}
                      <View
                        className="flex-1"
                        style={{ gap: sizes.padding * 0.5 }}
                      >
                        {/* Row - SURNAME + STAGE NAME */}
                        <View className="flex-row justify-between items-center">
                          {/* Item - SURNAME */}
                          <View style={{ gap: sizes.padding * 0.15 }}>
                            <Text
                              className="font-doto-extrabold leading-none"
                              style={{
                                color: "#202020",
                                fontSize: sizes.itemTitle,
                                letterSpacing: 0.15 * sizes.itemTitle,
                              }}
                            >
                              SURNAME
                            </Text>
                            <Text
                              className="font-geist-mono-light leading-none"
                              style={{
                                fontSize: sizes.itemContent,
                                letterSpacing: 0.08 * sizes.itemContent,
                              }}
                            >
                              PULIDO
                            </Text>
                          </View>
                          {/* Item - STAGE NAME */}
                          <View style={{ gap: sizes.padding * 0.15 }}>
                            <Text
                              className="font-doto-extrabold leading-none"
                              style={{
                                color: "#202020",
                                fontSize: sizes.itemTitle,
                                letterSpacing: 0.15 * sizes.itemTitle,
                              }}
                            >
                              STAGE NAME
                            </Text>
                            <Text
                              className="font-geist-mono-light leading-none"
                              style={{
                                fontSize: sizes.itemContent,
                                letterSpacing: 0.08 * sizes.itemContent,
                              }}
                            >
                              @OMARPM
                            </Text>
                          </View>
                        </View>
                        {/* Item - NAME */}
                        <View style={{ gap: sizes.padding * 0.15 }}>
                          <Text
                            className="font-doto-extrabold leading-none"
                            style={{
                              color: "#202020",
                              fontSize: sizes.itemTitle,
                              letterSpacing: 0.15 * sizes.itemTitle,
                            }}
                          >
                            NAME
                          </Text>
                          <Text
                            className="font-geist-mono-light leading-none"
                            style={{
                              fontSize: sizes.itemContent,
                              letterSpacing: 0.08 * sizes.itemContent,
                            }}
                          >
                            OMAR
                          </Text>
                        </View>
                        {/* Item - MEMBER SINCE */}
                        <View style={{ gap: sizes.padding * 0.15 }}>
                          <Text
                            className="font-doto-extrabold leading-none"
                            style={{
                              color: "#202020",
                              fontSize: sizes.itemTitle,
                              letterSpacing: 0.15 * sizes.itemTitle,
                            }}
                          >
                            MEMBER SINCE
                          </Text>
                          <Text
                            className="font-geist-mono-light leading-none"
                            style={{
                              fontSize: sizes.itemContent,
                              letterSpacing: 0.08 * sizes.itemContent,
                            }}
                          >
                            04/07/2026
                          </Text>
                        </View>
                        {/* Row - CHECK-INS + SIGNATURE */}
                        <View className="flex-row justify-between items-start">
                          {/* Item - CHECK-INS */}
                          <View style={{ gap: sizes.padding * 0.15 }}>
                            <Text
                              className="font-doto-extrabold leading-none"
                              style={{
                                color: "#202020",
                                fontSize: sizes.itemTitle,
                                letterSpacing: 0.15 * sizes.itemTitle,
                              }}
                            >
                              CHECK-INS
                            </Text>
                            <Text
                              className="font-geist-mono-light leading-none"
                              style={{
                                fontSize: sizes.itemContent,
                                letterSpacing: 0.08 * sizes.itemContent,
                              }}
                            >
                              34
                            </Text>
                          </View>
                          {/* Item - SIGNATURE */}
                          <View style={{ gap: sizes.padding * 0.15 }}>
                            <Text
                              className="font-doto-extrabold leading-none"
                              style={{
                                color: "#202020",
                                fontSize: sizes.itemTitle,
                                letterSpacing: 0.15 * sizes.itemTitle,
                              }}
                            >
                              SIGNATURE
                            </Text>
                            <View style={{ mixBlendMode: "darken" }}>
                              <Image
                                style={{
                                  height: sizes.signature.height,
                                  width: sizes.signature.width,
                                  resizeMode: "contain",
                                }}
                                source={signature}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      {/* Photo */}
                      <View style={{ mixBlendMode: "color-burn" }}>
                        <GrainyImage
                          source={photo}
                          width={sizes.photo.width * 0.425}
                          height={sizes.photo.height * 0.425}
                          borderRadius={sizes.padding * 0.25}
                          grainTileSize={sizes.grain}
                          grayscale
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex-row justify-between mt-auto">
                  <Text
                    className="font-doto-black"
                    style={{ fontSize: sizes.footer }}
                  >
                    DATE OF ISSUE 04/07/2026
                  </Text>
                  <Text
                    className="font-doto-black"
                    style={{ fontSize: sizes.footer }}
                  >
                    DESIGNED BY PM
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </HoloCard>
        </View>
      </View>
    </SafeAreaView>
  );
}
