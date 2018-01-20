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
        flexBasis: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 50
        //display: 'flex',
        //flexDirection: 'column',
        //flex: 1
    },
    cardHeaderFont: {
        color: 'rgba(255,255,255,1)',
        fontSize: 20,
        fontWeight: '400',
        padding: 5
    },
    cardHeaderImage: {
        paddingTop: 5,
        height: 50,
        width: 50
    },
    progressText: {
        textAlign: 'right',
        paddingRight: 5
    }
});