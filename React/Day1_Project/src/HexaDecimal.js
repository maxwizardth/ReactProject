import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
/*_----------------------------------------------------------------*/
  
/*creating the color Div functional components and styling it.*/
const Div=()=>{
/*generating the Hexadecimal color codes using array*/
const digit='1234567890abcdef'
 const color=[1,2,3,4,5,6].reduce((prev,curr)=>
prev+=digit[Math.floor(Math.random()*digit.length)],'#')
/*creating a style of the div that will has the color codes generated as background*/
const divStyle={background:color,
        border:'white solid 2px',
        color:'white',
        margin:'1px',
        maxWidth:'90px',
        display:'inline-block',
        textAlign:'center'}
/*creating the div element that has background and text to be the color codes*/
return (<div style={divStyle} className='container'>
            <h2 style={{fontSize:'18px'}}>{color}</h2>
          </div>)
}
/*_----------------------------------------------------------------*/


/*_----------------------------------------------------------------*/
/*creating the functional components that create as many div color as we wish styling it.*/
const Alldiv=({number})=>{
  let divList=Array(number).fill(0)
    const allDivElement=divList.map((div,key)=><Div key={key}/>)
    return (<div>
             <h3>Hexadecimal Codes</h3>
            {allDivElement}
         </div>)
}


class Button extends React.Component{ 
      render(){
         const buttonStyle={
            background:'#0588b0' ,
            color:'white',
            padding:'11px',
            pointer:'corsor',
            margin:'9px',
            borderRadius:'14px',
            border:'solid 3px #8ec0ff'}
         return (
         <button style={buttonStyle} onClick={this.props.click}>Generate New Colors</button>)}
   }



/*embeding all components to the colorApp*/

class ColorApp extends React.Component{ 
   state={hexaCode:<Alldiv number={100}/>}
   generateNew=()=>this.setState({hexaCode:<Alldiv number={100}/>})
    buttonStyle={width:'150px'}
   render(){
    const headerInfo=(<p>The following shows different Hexadecimal 
    codes and their respective color result.
    copy the best color codes for your web. <br/>
    <b>Note:</b> it generate different codes on reload</p>)
    const headerTitle='Day1: Hexadecimal color Generator'

      return (<div style={{background:'#0588b0'}}>
      <Header title={headerTitle} info={headerInfo}/>
      <div style={{padding:'2px',textAlign:'center',
                        background:'white',margin:'15px',
                        borderRadius:'15px'}}>
      {this.state.hexaCode}
      <Button click={this.generateNew}/>
      </div>
      <Footer/>
      </div>)}
  }

export default ColorApp



