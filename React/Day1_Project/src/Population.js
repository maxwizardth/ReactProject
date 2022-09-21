import React from 'react'
import data from './countries.js'

const PopulationDiv=(props)=>{
    const newData=data.sort((a,b)=>b.population-a.population).map((country)=>{
      return {name:country.name.common,population:country.population}})
    const world=newData[0].population
    const divStyle={width: '90%',
                  margin: '1px',
                  paddingLeft: '20px',                                 
                  }

    const element=newData.splice(props.start,props.end).map((country,index)=>{ 
          const barWidth=country.population*90/world
          const barStyle={      
        background: '#fca22a',
        paddingLeft:`${barWidth}%`,
        border:'solid #fca22a 8px',
        marginLeft: '4px',
        borderRadius:'5px',
        display:'inline-block', }
      return (<div style={divStyle} key={index}>
                <div >
                 {`${index+1}.`} {country.name} ({country.population})
                </div>
                <div style={barStyle}></div> 
               </div>)})
      return element
   }

const buttonStyle={
  textAlign:'center',
  height:'40px',
  color:'white',
  background:'#8ec0ff',
  margin:'4px',
  border:'#0588b0 solid 3px',
  borderRadius:'10px',
  padding:'8px'
}
class Population extends React.Component{ 
   state={start:0,end:10}
     render(){
  	return <div style={{background:'white',color:'black',margin:'15px',borderRadius:'15px'}}>
          <h4 style={{padding:'8px',textAlign:'center'}}> MOST POPULATED COUNTRIES</h4>
  				<PopulationDiv start={this.state.start} end={this.state.end}/>
          <div style={{padding:'15px'}}>
  				<button style={buttonStyle} onClick={()=>this.setState({start:this.state.start-10,end:this.state.end-10})}>Hide Last ten</button>
  				<button style={buttonStyle} onClick={()=>this.setState({start:this.state.start+10,end:this.state.end+10})}>Show Next ten</button>
  				</div>
  				</div>
  }
}
export default Population