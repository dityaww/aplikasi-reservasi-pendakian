import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapperSearch: {
        // backgroundColor: 'red'
        borderWidth: 1
    },
    wrapperData: {
        // backgroundColor: 'red'
        borderWidth: 1,
        paddingVertical: 20,
        gap: 10,
    },
    inputSearch: {
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 100/2,
        marginHorizontal: 20,
        marginVertical: 20
    },
    searchData: {
        borderWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descUser: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    buttons: {
        flexDirection: 'row',
        gap: 5
    }
})

export default styles