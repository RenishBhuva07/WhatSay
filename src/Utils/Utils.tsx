import { Platform } from "react-native";

export const isIos = () => Platform.OS === "ios";

export const stringToDecimal = (amountToAdd: any) => {
    const finalAmount = amountToAdd.toString();
    return finalAmount.replace(/[^\d.-]/g, "");
};