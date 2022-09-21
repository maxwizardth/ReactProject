import React from 'react'

class Options extends React.Component{
  constructor(props){
    super(props)
    this.state={data:''}
    this.A=React.createRef()
    this.B=React.createRef()
    this.C=React.createRef()
    this.D=React.createRef()}
  static getDerivedStateFromProps(props,state){
    return {data:props.data}
  }     

  /*function to monitor and display selected option by user*/
  componentDidMount(){
    const optionSelected=this.props.userAnswer
    if(optionSelected){
    this[optionSelected].current.checked=true}
     }

  render(){
    const options=this.state.data    
      return (
          <div>
            <input type="radio" name={this.props.name} 
              className='option' value='A' onClick={this.props.click}
              ref={this.A}/>
              A. {options.A}<br/>      
            <input type="radio" name={this.props.name} 
              className='option' value='B' onClick={this.props.click}
              ref={this.B}/>
              B. {options.B}<br/>
            <input type="radio" name={this.props.name} 
              className='option' value='C' onClick={this.props.click}
              ref={this.C}/>
              C. {options.C}<br/>
            <input type="radio" name={this.props.name} 
              className='option' value='D' onClick={this.props.click}
              ref={this.D}/>
               D. {options.D}<br/>
          </div>)
   }
}

export default Options