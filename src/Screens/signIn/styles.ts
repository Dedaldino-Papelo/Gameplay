import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background
    },
    input: {
        width: 200,
        borderBottomWidth: 1,
        marginTop: 10,
        fontSize: 15,
        padding: 6
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 16,
        fontFamily: theme.fonts.title700
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 15,
        marginBottom: 38,
        fontFamily: theme.fonts.title500
    }
})