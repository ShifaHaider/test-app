import { StyleSheet, Dimensions, Platform } from 'react-native';
const imageWidth = Dimensions.get('window').width / 1.5;


export default Style = StyleSheet.create({

    Logoimage: {
        width: imageWidth,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
    },

    h1: { justifyContent: "center", alignSelf: "center", color: "#fff", fontSize: 18 },
    h2: { color: "#000", fontSize: 18, fontWeight: "bold" },
    p: { padding: 10, color: "#4b4b4b", fontSize: 16 },
    all: { color: "#f3525c", fontWeight: "bold", fontSize: 18 },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    main: {
        padding: 10,
        flex: 1,
        paddingTop: 30,
        marginTop: 10,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

    },
    heading: {
        color: "#aaaeb9",
        fontSize: 18,
        fontWeight: "bold",
        padding: 20,
        alignSelf: "center"

    },
    row: { flexDirection: "row", alignItems: "center" },
    containView: {
        width: "80%", alignSelf: "center", marginTop: 15
    }
});
