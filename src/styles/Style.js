import {StyleSheet} from 'react-native'

module.exports = StyleSheet.create({
    container: {
        //justifyContent: 'flex-start',
        padding: 20,
        //display: 'flex',
        //flexDirection: 'column',
        height: 180,
        backgroundColor: 'rgba(243, 243, 243, 1)'
    },
    questionsContainer: {
        //justifyContent: 'flex-start',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        //display: 'flex',
        //flexDirection: 'column',
        //height: 180,
        backgroundColor: 'rgba(221, 214, 206, 1)'
    },
    questionsMainContainer: {
        backgroundColor: 'rgba(221,214,206,1)'
    },
    cardHeader: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 32, 1)',
        borderRadius: 2,
        paddingTop: 5,
        paddingBottom: 5
        //display: 'flex',
        //flexDirection: 'column',
        //flex: 1
    },
    cardInfo: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "auto",
        backgroundColor: "rgba(255, 255, 255, 1)",
        height: 50,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2
        //display: 'flex',
        //flexDirection: 'column',
        //flex: 1
    },
    cardHeaderFont: {
        color: "rgba(255,255,255,1)",
        fontSize: 20,
        fontWeight: "400",
        padding: 5
    },
    cardHeaderImage: {
        paddingTop: 5,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "rgba(0,77,64,1)"
    },
    imageContainer: {
        lineHeight: 35,
        fontSize: 25,
        textAlign: "center",
        color: "#ffffff"
    },
    progressText: {
        textAlign: 'right',
        paddingRight: 5
    },
    questionCards: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: 5,
        borderRadius: 3
    },
    questionCardsHeadFont: {
        color: "rgba(47,47,47,1)",
        fontSize: 15,
        fontWeight: '500'
    },
    questionCardsDescFont: {
        color: "rgba(47,47,47,1)",
        fontSize: 14
    },
    ratingText: {
        textAlign: 'right',
        marginLeft: 50,
        marginTop: 10
    },
    ratingStars: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingTextMenu: {
        marginLeft: 240
    },
    btncontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnbutton: {
        backgroundColor: '#074b84',
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
    btncontent: {
        color: '#ffffff'
    }
});