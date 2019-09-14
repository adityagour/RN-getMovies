import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    cardSection: {
        width: 160,
        height: 320,
        margin: 8,
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
    },
    image:{
         width: 160, 
         height: 200 
    },
    textSection:{
        flex: 1, 
        alignSelf: 'flex-end',
        paddingBottom:10,
        position:'relative'
    },
    movieTitle:{
     color: '#000', 
     fontSize: 20, 
     margin: 4, 
     width:120
    },
    desc:{
        color: '#000', 
        margin: 5 
    }, 
      buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    },
});
export default styles;