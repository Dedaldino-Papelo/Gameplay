import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    Button: {
        width: "100%",
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: "row",
        height: 56,
        alignItems: "center"
    },
    iconWrapper:{
        borderRightWidth: 1,
        height: 56,
        width: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRightColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 18
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold"
    }
})