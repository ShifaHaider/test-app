import { StyleSheet, Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    head: { alignSelf: "center", color: "#fff", fontSize: 24, padding: 10, fontWeight: "bold", justifyContent: "center" },
    h2: { alignItems: "center", marginTop: 40, paddingBottom: 20, },
    hStyle: { fontSize: 28, color: "#fff", fontWeight: "bold" },
    deliver: { borderWidth: 1, paddingHorizontal: 10, borderColor: "#b2b2b2", borderRadius: 20, alignItems: "center" },
    deliverTxt: { color: "#fff", padding: 5 },
    middle: { marginTop: -15, padding: 10, borderRadius: 10, backgroundColor: "#f3525c", width: "80%", alignSelf: "center", },
    white: { color: "#fff", },
    middleView: {
        height: 60, backgroundColor: "#fff", borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    icon: { color: "#fff", fontSize: 20 },
    foot: {
        marginTop: 20,
        backgroundColor: "#f3525c",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 30,
    },
    TabStyle: {
        // scrollEnabled: true,
        // indicatorStyle: { backgroundColor: '#f3525c' },
        // activeTintColor: "#f3525c",
        // inactiveTintColor: "#f3525c",

        // labelStyle: { fontSize: 16, paddingTop: 5, justifyContent: "space-around", },
        // tabStyle: { justifyContent: "space-around" },
        // style: { height: 50, marginVertical: 5, backgroundColor: "#f9f9f9", },
    },


});
