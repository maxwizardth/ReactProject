import React from 'react'
import Question from './Question.js'
import Button from './Button.js'
import TimerBox from './TimerBox.js'
import ResultBox from './ResultBox.js'

 const btnStyle={margin:'4px',
                  padding:'6px',
                  outline:'none',
                  borderRadius:'5px'}

/* below the state comprises of five elements, userAnswers,Answers,score,number and correction
 userAnswers:keep userAnswers,Answers:store correct Answers
   number:index of active question,score: user score,
   correction:toggle the display of correction*/  

class JavaScriptQuiz extends React.Component{
  constructor(props){
    super(props)
    this.state={userAnsers:Array(20),Answers:Array(20),
      score:0,number:0,correction:'none',time:{minute:20,seconds:0}}
  }

  /*pass the data from props to state to get all correct Answers*/
  static getDerivedStateFromProps(props,state){
   const data=props.data
   
   const Answers=data.map((question)=>question.Answer)
   return {Answers:Answers}
  }

  componentDidMount(){
    setInterval(this.timer,1000)
  }
  
     /*Time keeping codes*/

 timer=()=>{
  /*getting the minutes and seconds */
  var {minute,seconds}=this.state.time
  /*check wether time is over*/
  if(minute==='00'&&seconds==='01'){
    document.getElementById('submitbtn').click();
    document.getElementById('respondTime').innerHTML='Your Time is Up'
   }


    /*convert minute to seconds*/
    if(seconds===0||seconds==='00'){
      minute--;
      seconds=59
    }

    else{
      seconds--;
      if(String(minute).length===1){
      minute='0'+String(minute)}
    
      if(String(seconds).length===1){
      seconds='0'+String(seconds)}
      }
     if(minute<0){
       minute='00';
       seconds='00'
     }
  this.setState({time:{minute:minute,seconds:seconds}})
   
    
      } 

 marker=()=>{
    let score=0
    this.state.Answers.forEach((answer,index)=>{
      score+=answer===this.state.userAnsers[index]?1:0
    })
    this.setState({score:score})
  }
   users=Array(30)

   userAnsers=(event)=>{
    const element=  event.target
    this.users[element.name]=element.value
    this.marker()
    this.setState({userAnsers:this.users})

  }  

  Previous=()=>{
    const data=this.props.data
    this.setState({number:(this.state.number-1+data.length)%data.length})
}

  Next=()=>this.setState({number:(this.state.number+1)%this.props.data.length})
  Submit=(event)=>{event.target.style.display='none'
                 this.setState({correction:'block'})}
   
   render(){
    const {minute,seconds}=this.state.time
    const index=this.state.number
    return (<div style={{background:'#fff',
                           padding:'4px',
                           textAlign:'left'}}>
              <div className='sticky-top ' 
                 style={{background:'rgb(5, 136, 176)',
                        color:'white',
                       margin:'-4px 0px 8px -6px',
                       width:'102%'}}>
                <h3 style={{padding:'20px'}}><center>JavaScript Quiz</center></h3>
               <TimerBox minute={minute} seconds={seconds}/>
              </div>


              <h4 style={{marginLeft:'9px'}}>Question {index+1}</h4>
              <Question data={this.props.data[index]} name={index}
               key={index} click={this.userAnsers} 
               show={this.state.correction}
               userAnswer={this.state.userAnsers[index]}/>
               <div id='buttons'>
                <Button click={this.Previous} text='Previous' Class='btn-primary'/>
                <Button click={this.Next} text='Next' Class='btn-primary'/>
                <button onClick={this.Submit} className='btn-danger' 
                data-bs-toggle="modal" data-bs-target="#myModal"
                style={btnStyle} id='submitbtn'>Submit</button>
                <div id="startAgain">
                <a href='#' onClick={()=>"location.reload()"}>Start Again</a>
                </div>
               <ResultBox score={this.state.score}/>
              </div>

            </div>)
   }
 }
          
export default JavaScriptQuiz


