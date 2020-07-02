import { StyleSheet, Dimensions, Platform } from 'react-native';


export default Style = StyleSheet.create({
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
        padding: 10,

    },
    container: {
        flex: 1,
        // marginHorizontal: 6
    },
    item: {
        backgroundColor: "#fff",
        marginVertical: 2,
        borderBottomColor: "#f9f9f9",
        borderBottomWidth: 2,
        flexDirection: "row"
    },
    icon: { color: "#f3525c", fontSize: 16 },

    header: {
        fontSize: 24,
        // backgroundColor: "#fff"
    },
    title: {
        fontSize: 22,
    },
    view: { justifyContent: "center", alignItems: "center", borderRadius: 20, flexDirection: "row", justifyContent: "space-around", borderWidth: 1, padding: 3, margin: 2, borderColor: "#5baa5b" },
    addtxt: { paddingHorizontal: 5, color: "#fff", },
    add: { borderRadius: 20, padding: 3, margin: 2, backgroundColor: "#f3525c" },
    upto: { color: "#fff", fontWeight: "bold", fontSize: 10, paddingVertical: 3 },
    uptoView: { top: 10, width: "80%", backgroundColor: "#f3525c", alignItems: "center" },
    row: { flexDirection: "row", alignItems: "center" }
});
