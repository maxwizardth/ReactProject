import React from 'react'
import myImage from './Desert.jpg'

/*creating the header components and styling it.*/


/*creating the header components and styling it.
const Header1=(props)=>(
   
  <div style={headerStyle}>
    <h2 style={{textAlign:'center'}}>30Days Of React Project</h2>
    <h3>{props.projectTitle}</h3>
      {props.projectInfo}
    
  </div>
  )



class Header extends React.Component{
  render(){
  	const headerStyle={background:`url(${myImage})`,
				color:'white',
				padding:'5px 0px 3px 18px',
				margin:'0px'}
    const {title,info}=this.props
        const h2Style={textAlign:'center',
                marginTop:'3px'}
    return (<div style={headerStyle}>
              <h2 style={h2Style}>
               Welcom to 30Days Of React Challenge
              </h2> 
                 
                   <h3>{title}</h3>
                    {info}
                 
        
             </div>)

  }
}

*/
/*creating the header components and styling it.*/


/*creating the header components and styling it.
const Header1=(props)=>(
   
  <div style={headerStyle}>
    <h2 style={{textAlign:'center'}}>30Days Of React Project</h2>
    <h3>{props.projectTitle}</h3>
      {props.projectInfo}
    
  </div>
  )

*/
const headerStyle={background:`url(${myImage})`,
				color:'white',
				padding:'5px 0px 3px 18px',
			    margin:'0px'}

class Header1 extends React.Component{
  render(){
  
    const {title,info}=this.props
        const h2Style={textAlign:'center',
                marginTop:'3px'}
    return (<div style={headerStyle}>
              <h2 style={h2Style}>
               Welcome to 30Days Of React Challenge
              </h2> 
              <h3>{title}</h3>
               {info}  
             </div>)

  }
}


/*creating the header components and styling it.*/
const Header=function(props){
	return(
  <div style={headerStyle}>
    <h2 style={{textAlign:'center'}}>30Days Of React Project</h2>
    <h3>{props.title}</h3>
      {props.info}
    
  </div>
  )}

export default Header
