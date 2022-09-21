import React,{fragment} from 'react'
import Input from './Input.js'
import Header from './Header.js'
import Footer from './Footer.js'
class Calculator extends React.Component{
	constructor(props){
		super(props)
		this.start=0
	}
	state={screen:''}

	primaryClick=(event)=>{
		const value=event.target.value
		this.setState({screen:this.state.screen+value})
	}
	
	delete=()=>{
		const prev=this.state.screen
        const current=prev.substr(0,prev.length-1)
		this.setState({screen:current})
		}
	equal=()=>this.setState({screen:eval(this.state.screen)})
	Ac=()=>this.setState({screen:''})
	percent=()=>this.setState({screen:eval(this.state.screen)/100})
	
	primary=()=>{
	 	const buttonStyle={background:'#13a3a3',
	 					   color:'white',
	 					   width:'23%',
	 					   height:'50px',
	 					   fontSize:'25px',
	 					   borderRadius:'10px',
	 					   margin:'2px',
	 					  }

		const allPrimaryKeys=[1,2,3,'-',4,5,6,'+',7,8,9,'/',0,'.',
						'*','%']

		const allKeys= allPrimaryKeys.map((key)=>
			{const Button=key=='%'?<Input click={this.percent}
					val={key} type='button' key={key}
					style={buttonStyle}/>:
				<Input click={this.primaryClick}
					val={key} type='button' key={key}
					style={buttonStyle}/>
					return Button})
			
		return allKeys
	}

	special=()=>{
		const buttonStyle={background:'#d94c56',
	 					   color:'white',
	 					   width:'31%',
	 					   height:'45px',
	 					   fontSize:'25px',
	 					   borderRadius:'10px',
	 					   margin:'2px'
	 					  }
     
		const allKeys=(
                    <div>
			        <Input 
					val='=' type='button'
					style={buttonStyle} click={this.equal}/>
					<Input 
					val='del' type='button'
					style={buttonStyle} click={this.delete}/>
					<Input 
					val='A/C' type='button'
					style={buttonStyle} click={this.Ac}/>
					</div>)
		return allKeys
	}


	render(){
		const divStyle={
			background:'black',
			margin:'11px',
			maxWidth:'390px',
			borderRadius:'16px',
		    padding:'15px',
		    textAlign:'center'}
		 const screenStyle={
		 	width:'93%',
		    borderRadius:'8px',
		    marginBottom:'15px',
		    marginTop:'-2px',
		    height:'42px',
		    fontSize:'26px',
		    background:'#9e8338'
		 }

		return (<div style={{background:'white',
							padding:'15px',
							borderRadius:'8px',
						    margin:'15px',


						    }}>
			  <h3>KADIO CALCULATOR</h3>
		      <div style={divStyle}>
		     <input readOnly name='screen' 
		     style={screenStyle} 
		      value={this.state.screen}/><br/>
		    {this.primary()}{this.special()}</div>
		    </div>)
	}
	
}

const CalculatorApp=(<div>
			<Header title='Day7: KADIO Calculator'
			 info=<p>This is a simple calculator project designed with only React js.
			  It can do all the four arithmetic computation.
			  <br/><b>A/C :</b> this is use to clear all the screen<br/>
			  <b>del:</b> this is use to delete the last character from the screen.
			  </p>/>
			<Calculator/>
			<Footer/>
		   </div>)
export default CalculatorApp