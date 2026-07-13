import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { StarRating } from "@/components/Elements/StarRating";

export default function ProfileTab() {
  const [ticketRenderSize, setTicketRenderSize] = useState({ width: 0 });

  const sizes = {
    photo: {
      width: ticketRenderSize.width * 0.29,
      height: ticketRenderSize.width * 0.61,
    },
    title: ticketRenderSize.width * 0.25,
    label: ticketRenderSize.width * 0.03,
    content: ticketRenderSize.width * 0.026,
    gap: ticketRenderSize.width * 0.023,
    barcode: ticketRenderSize.width * 0.1,
  };

  return (
    <SafeAreaView className="flex-1 items-center p-8 bg-gray-50">
      <View
        className="w-full bg-gray-400/0"
        onLayout={(e) => {
          setTicketRenderSize({
            width: e.nativeEvent.layout.width,
          });
        }}
      >
        {/* CORRECTO 2.85 */}
        <View style={{ paddingHorizontal: sizes.gap * 4.65 }}>
          {/* Label */}
          <Text
            className="font-salbabida text-center text-[#523F43] leading-none"
            style={{ fontSize: sizes.title }}
          >
            KUITTI
          </Text>
          {/* Data */}
          <View
            style={{
              gap: sizes.gap * 0.75,
              marginBottom: sizes.gap * 3.5,
              marginTop: sizes.gap * 1.2,
            }}
          >
            <Text
              className="font-merchant text-center text-[#342D2A]"
              style={{ fontSize: sizes.label }}
            >
              ORDEN:#23
            </Text>
            <Text
              className="font-merchant text-center text-[#342D2A]"
              style={{ fontSize: sizes.content }}
            >
              JULIO 2, 2026
            </Text>
            <Text
              className="font-merchant text-center text-[#6E6E6E]"
              style={{ fontSize: sizes.content }}
            >
              RESUMEN DIARIO
            </Text>
          </View>
          {/* Table */}
          <View style={{ position: "relative" }}>
            {/* Separator */}
            <Text
              className="font-merchant text-center text-[#E0E0E0]"
              style={{
                fontSize: sizes.content,
                position: "absolute",
                alignSelf: "center",
                top: sizes.gap * 2.14,
              }}
            >
              *****************************************
            </Text>
            {/* Table */}
            <View className="w-full flex-row justify-between">
              {/* Column 1 */}
              <View style={{ gap: sizes.gap * 3.14 }}>
                {/* Label */}
                <Text
                  className="font-merchant text-[#342D2A]"
                  style={{ fontSize: sizes.label }}
                >
                  ACTIVIDAD
                </Text>
                {/* List */}
                <View style={{ gap: sizes.gap }}>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    GYM
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    LECTURA
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    AGUA 2L
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    MEDITAR
                  </Text>
                  <View style={{ height: sizes.content }} />
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    CORRER
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    PROGRAMAR
                  </Text>
                </View>
              </View>
              {/* Column 2 */}
              <View style={{ gap: sizes.gap * 3.14 }}>
                {/* Label */}
                <Text
                  className="font-merchant text-[#342D2A]"
                  style={{ fontSize: sizes.label }}
                >
                  ESTATUS
                </Text>
                {/* List */}
                <View style={{ gap: sizes.gap }}>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    OK
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    OK
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    OK
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    OK
                  </Text>
                  <View style={{ height: sizes.content }} />
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    PENDIENTE
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    PENDIENTE
                  </Text>
                </View>
              </View>
              {/* Column 3 */}
              <View style={{ gap: sizes.gap * 3.14 }}>
                {/* Label */}
                <Text
                  className="font-merchant text-[#342D2A]"
                  style={{ fontSize: sizes.label }}
                >
                  HORA
                </Text>
                {/* List */}
                <View style={{ gap: sizes.gap, alignItems: "center" }}>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    12:24
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    19:56
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    20:12
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    14:31
                  </Text>
                  <View style={{ height: sizes.content }} />
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    -
                  </Text>
                  <Text
                    className="font-merchant text-[#342D2A]"
                    style={{ fontSize: sizes.content }}
                  >
                    -
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Separator */}
          <Text
            className="font-merchant text-center text-[#E0E0E0]"
            style={{
              fontSize: sizes.content,
              alignSelf: "center",
              marginTop: sizes.gap * 3.14,
            }}
          >
            *****************************************
          </Text>
          {/* Price info */}
          <View
            style={{
              marginTop: sizes.gap,
              marginBottom: sizes.gap * 1.28,
            }}
          >
            <View
              className="flex-row justify-between"
              style={{ marginBottom: sizes.gap * 1.28 }}
            >
              <Text
                className="font-merchant text-[#342D2A]"
                style={{ fontSize: sizes.content }}
              >
                SUBTOTAL
              </Text>
              <Text
                className="font-merchant text-[#342D2A]"
                style={{ fontSize: sizes.content }}
              >
                6
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text
                className="font-merchant text-[#342D2A]"
                style={{
                  fontSize: sizes.content,
                  marginBottom: sizes.gap * 2.28,
                }}
              >
                DESCUENTO
              </Text>
              <Text
                className="font-merchant text-[#342D2A]"
                style={{ fontSize: sizes.content }}
              >
                -2
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text
                className="font-merchant text-[#342D2A]"
                style={{ fontSize: sizes.label }}
              >
                TOTAL
              </Text>
              <Text
                className="font-merchant text-[#342D2A]"
                style={{ fontSize: sizes.label }}
              >
                4/6
              </Text>
            </View>
          </View>

          {/* Rating */}
          <View className="self-center">
            <StarRating
              percentage={0.7}
              size={sizes.label * 1.33}
              color="#342D2A"
            />
          </View>

          <Text
            className="font-merchant text-center text-[#342D2A]"
            style={{ fontSize: sizes.label, marginVertical: sizes.gap * 1.28 }}
          >
            ************ DIA CERRADO ************
          </Text>

          <View className="flex-row justify-between">
            <Text
              className="font-merchant text-[#342D2A]"
              style={{ fontSize: sizes.content }}
            >
              Jueves 2 @ 02:12 AM
            </Text>
            <Text
              className="font-merchant text-[#342D2A]"
              style={{ fontSize: sizes.content }}
            >
              @OMARPM
            </Text>
          </View>

          <Text
            className="font-barcode-39 text-center text-[#342D2A]"
            style={{
              fontSize: sizes.barcode,
              marginTop: sizes.gap * 0.75,
              marginBottom: -sizes.gap,
            }}
          >
            1111111111111111
          </Text>

          <Text
            className="font-merchant text-center text-[#342D2A]"
            style={{ fontSize: sizes.content }}
          >
            Gracias por usar KUITTI!
          </Text>
          <Text
            className="font-merchant text-center text-[#6E6E6E]"
            style={{ fontSize: sizes.content, marginTop: sizes.gap * 1.75 }}
          >
            Todo lo que repites, te convierte.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
