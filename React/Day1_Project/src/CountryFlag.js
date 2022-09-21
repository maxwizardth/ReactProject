import React,{Component} from 'react'
import data from './countries.js'
import giftImg from './gift1.jpg'
import ListItems from './ListItem.js'
import Form from './Form.js'

class Country extends Component{
	
     state={countryPredicted:''}

	predict=()=>{
	const AllKeys=['name','capital',
              'flags',
 					    'region','languages',
 					    'currencies','coatOfArms']

 	const newCountry=data.sort((a,b)=>b.population-a.population).map((country)=>{
 		const countries=AllKeys.reduce((init,key)=>{
 			return {...init,[key]:country[key]}},{})
      return countries})
 	return newCountry[Math.floor(Math.random()*200)]
 	}

    currency=(currencyObject)=>{
    		const currencyArray=Object.values(currencyObject).map((obj)=>obj.name)
    		return <ListItems items={currencyArray}/>
    }

    language=(languageObject)=>{
    	const languageArray=Object.values(languageObject)
    	return <ListItems items={languageArray}/>
    }

    Destiny=()=>this.setState({countryPredicted:this.predict()})

    render(){
 	 const predictedCountry=this.predict()
 	 console.log(predictedCountry)
 	  const {name, capital, flags, 
 	        region, languages, currencies,
          coatOfArms}=predictedCountry
 	
 	return ( <div style={{textAlign:'center',display:`${this.props.display}`}}>
  <h2>YOUR DESTINY</h2>
  <b>Dear {this.props.Firstname},</b><br/>
  <p>Either you like it or not, You have been destined to travel to a country in  
  {' '}{region}. A place where you will be spending {this.currency(currencies)}. 
  Don't you get it? I mean a country full of people speaking{'  '} 
   {this.language(languages)}. Yeah! I am talking about {name.common}. </p>
   <p>
   when you end up there you are going to meet people who are going to guide you on your life path, to help make the right decisions. 
   So don't hesitate a single second because meeting someone who has the ower to change your life is rare and precious.
   All you have to know is who they are, where they will be and when, and it's something I'm honored to reveal to you. 
   you can easily meet the person if you stay in
  ({capital}) for that is where your turning point located. You can thank me later when finally meet the person. </p> 
  
  <div className=" container" >
    <h2>{name.common}</h2>
      
    <img src={`${flags.png}`} alt="Paris" width="200" height="40" /> 
    <br/>
    <img src={`${coatOfArms.png}`} width='200' height='200' alt="Paris"/>
    <br/>
    Capital: {capital}
    </div>
</div>
  )
		  }
}


class DestinyApp extends React.Component{
state={destiny:'none',gift:'inline-block',firstName:'',lastName:'',month:''}
change=()=>this.setState({destiny:'inline-block',gift:'none'})
handleChange = (e) => {
    const value = e.target.value
    const name=e.target.name
    this.setState({ [name]: value })
  }

render(){
const imgStyle={display:`${this.state.gift}`,
				margin:'2px',
				width:'120px',
			    height:'200x'}


 return (<div style={{background:'white',
 					 color:'black',
 					 margin:'10px',
 					 borderRadius:'15px',
 					 textAlign:'center'}}>          
          <div style={{padding:'5px'}}>
            <Country display={this.state.destiny} Firstname={this.state.firstName}/>

            
            <div style={{display:`${this.state.gift}`}}>
          
           <h4>Fill the following form and click on anyone of the box below to see the information 
            we have about your destiny</h4>
            <Form change={this.handleChange}/>
           <img src={giftImg} style={imgStyle} onClick={this.change} alt='gift'/>
           <img src={giftImg} style={imgStyle} onClick={this.change} alt='gift'/>
           <img src={giftImg} style={imgStyle} onClick={this.change} alt='gift'/>
           <img src={giftImg} style={imgStyle} onClick={this.change} alt='gift'/>
            </div>
           </div>
  		</div>)
  }
}
export default DestinyApp