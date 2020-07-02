import { StyleSheet, Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Colors from "../../utils/colorConstant"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        marginBottom :12

    },

    deliverBox: {
        width: "90%",
        backgroundColor: Colors.LIGHT_GRAY_BACKGROUND,
        padding: 12,
        paddingBottom: 0,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 15,
        borderTopColor: "lightgray",
        borderTopWidth: 1
    },
    sumaryBox: {
        width: "90%",
        backgroundColor: Colors.LIGHT_GRAY_BACKGROUND,
        padding: 12,
        paddingBottom: 0,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 15,
    },

    Box: {
        width: "90%",
        borderRadius: 60,
        backgroundColor: "white",
        elevation: 1,
        paddingHorizontal: "10%",
        paddingTop: "10%",
        // opacity:1
        // alignItems: "center",
        // justifyContent: "center",
    },
    Heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#b2b2b2",
        textAlign:"left"

    },

});
