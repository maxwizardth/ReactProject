import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

/*_----------------------------------------------------------------*/
  function prime(number) {
    
    var isPrime=number<2?false:true
    for (var factor=Math.ceil(Math.sqrt(number));factor>1; factor--){
         if(number%factor===0 && number!==2){
          isPrime=false;
          break}        
         }
    return isPrime
  }

const ColorNumber=(number)=>prime(number)?'red':number%2===0?'green':'yellow'
const Grid=({number})=>{
  const color=ColorNumber(number)
  /*creating a style of the div that will has the color codes generated as background*/
const divStyle={background:color,
        border:'white solid 2px',
        color:'white',
        margin:'1px',
        width:'70px',
        fontSize:'10px',
        display:'inline-block',
        textAlign:'center'}
  return (<div style={divStyle} className='container'>
            <h2>{number}</h2>
          </div>)
          }
            
/*creating the functional components that create as many Grids color as we wish styling it.*/
const AllGrid=(props)=>{
            const numberList=Array(100).fill(0).map((key,index)=>props.start+index)
            const allGrid=numberList.map((eachNumber)=>
              <Grid key={eachNumber} number={eachNumber}/>)
           
            return (<div className='container' 
            style={{padding:'2px',textAlign:'center'}}>
            {allGrid}
         </div>)
} 


class Button extends React.Component{ 
      render(){
         const buttonStyle={
            background:'#0588b0',
            color:'white',
            width:'120px',
            padding:'11px',
            pointer:'corsor',
            margin:'9px',
            borderRadius:'14px',
            border:'solid 3px white'}
         return (
         <button style={buttonStyle} onClick={this.props.click}>{this.props.text}</button>)}
   }

/*embeding all components to the colorApp*/
class NumberApp extends React.Component{ 
   state={start:0}
   Next=()=>this.setState({start:this.state.start+100})
   Previous=()=>this.setState({start:this.state.start-100})
   render(){

    const headerInfo=(<p>
                       <b>Red means Prime<br/>
                        Green means even<br/>
                        Yellow means odd<br/>
    click the buttons to get Next or Previous set of numbers</b>. <br/>
    <b>Note:All prime numbers are also odd except 2</b> </p>)
    const headerTitle='Day3: Number Generator'

      return (<div style={{background:'#0588b0'}}>
      {<Header title={headerTitle} info={headerInfo}/>}
      <div style={{background:'white',
                  textAlign:'center',
                  margin:'15px',
                  borderRadius:'11px'}}>
      <h2>NUMBER APP</h2>
      <AllGrid start={this.state.start}/>
      <Button click={this.Previous} text='Previous'/>
      <Button click={this.Next} text='Next Set'/>
      </div>
      {<Footer/>}
      </div>
      )}
  }

export default NumberApp




