import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    user: {
        flexDirection: "row"
    },
    greetings: {
        color: theme.colors.heading,
        fontSize: 24,
        fontFamily: theme.fonts.title500,
        marginRight: 6
    },
    username: {
        color: theme.colors.heading,
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        marginRight: 6
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight

    }
})