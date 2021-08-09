import React,{Component} from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';

export default class DetailsScreen extends Component{
    constructor(props){
     super(props)
     this.state={
        ImagePath: "",
        url: `http://localhost:5000/star?name=${this.props.navigation.getParam( "star_name" )}`,  
     }  
    }
    componentDidMount(){
        this.getDetails()
       }
       getDetails=()=>{
         const {url} = this.state
         axios
         .get(url)
         .then(response=>{
           this.setDetails(response.data.data)  
         })  
         .catch(error=>{
            Alert.alert(error.message) 
         })
       }
    
      /* setDetails=(planetDetails)=>{
        const starType = starDetails.star_type
        let imagePath = "";
        switch(starType){
          case "Gas Giant":
              imagePath = require("../assets/gas_giant.png")  
              break;
          case "Terrestrial":
              imagePath = require("../assets/terrestrial.png")
              break;
          case "Neptune Like":
              imagePath = require("../assets/neptune_like.png")
              break;
          case "Super Earth":
              imagePath = require("../assets/super_earth.png")
              break;
          default:
            imagePath = require("../assets/gas_giant.png")
            }
        this.setState({
           details: starDetails,
           imagePath: imagePath 
        })
    }*/
    
    render(){
        const {details,imagePath} = this.state
        if(details.specifications){
           return(
            <View style={style.container}>
              <Card
               title={details.name}
               image={imagePath}
               imageProps = {{resizeMode:"contain",width: "100%"}}
              >
               <View>
                 <Text style={styles.cardItem}>{``}</Text>    
               </View>   
             </Card>  
            </View>
           ) 
        }
        return(
         <View>
    
         </View>   
        )   
       } 
}

const styles = StyleSheet.create({
    container:{
      flex: 1        
    },
    cardItem:{ 
      marginBottom: 10 
    } 
})