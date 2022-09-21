import React from 'react'
import Options from './Options.js'
import Button from './Button.js'
class Question extends React.Component{
  constructor(props){
    super(props)
    this.state={question:'',data:''}}
  
  explanationBox=React.createRef()
  static getDerivedStateFromProps(props,state){
    return {data:props.data}
  }

 
  /* function to toggle the explanation to each question*/
  showExplain=()=>{
    let initialMode=this.explanationBox.current.style.display;
    const newMode=initialMode=='none'?'block':'none'
    this.explanationBox.current.style.display=newMode
  }

   render(){
    const codeStyle={padding: '4px',
           background: '#454',
           fontSize: '15px',
           color: 'white',
           margin:'9px',
           maxWidth:'330px',
           borderRadius: '7px',}

    const {question,code,options,Answer,summary}=this.state.data
      return (
       <div id='question'>           
          <h5>{question}</h5>
          <pre style={codeStyle}>{code}</pre>
          <Options click={this.props.click} name={this.props.name} 
          data={options} userAnswer={this.props.userAnswer}/>
          <div id='AnswerBox' className='Answer' 
          style={{display:`${this.props.show}`}}>
          <h5>Answer: {Answer}</h5>
          <Button text='Show explanation' click={this.showExplain}/>
          <p id='summary' style={{display:'none'}} 
          ref={this.explanationBox}>
          {summary}</p>
          </div>
       </div>) }
   }
export default Question