import React from 'react'
import ReactDOM from 'react-dom'
/*creating the header components and styling it.*/
const Header=function(props){
  const headerStyle={
        background:'#0588b0',
        color:'white',
        padding:'5px 0px 3px 18px',
        margin:'0px'}
 
  return (
  <div style={headerStyle}>
    <h2 style={{textAlign:'center',
                }}>
      30Days Of React Project</h2>
    <h3>{props.title}</h3>
      {props.info}
  </div>
  )
}


const headerInfo=(<p>The following shows different Hexadecimal 
    codes and their respective color result.
    copy the best color codes for your web. <br/>
    <b>Note:</b> it generate different codes on reload</p>)

const headerTitle='Day1: Hexadecimal color Generator'


/*creating the color Div functional components and styling it.*/
const Div=()=>{
/*generating the Hexadecimal color codes using array*/
const digit='1234567890abcdef'
const colorCode=[1,2,3,4,5,6].reduce((prev,curr)=>
prev+=digit[Math.floor(Math.random()*digit.length)],'#')

/*creating a style of the div that will has the color codes generated as background*/
const divStyle={background:colorCode,
        border:'white solid 2px',
        color:'white',
        margin:'1px',
        width:'80px',
        display:'inline-block',
        textAlign:'center'}

/*creating the div element that has background and text to be the color codes*/
return (<div style={divStyle} className='container'>
            <h2 style={{fontSize:'18px'}}>{colorCode}</h2>
          </div>)
}


/*creating the functional components that create as many div color as we wish and styling it.*/

const Alldiv=({number})=>{
  let divList=Array(number).fill(0)
    const allDivElement=divList.map((div,key)=><Div key={key}/>)
    return (<div style={{textAlign:'center',
                         background:'white',
                         margin:'10px',
                         borderRadius:'12px'}}>
             <h3>Hexadecimal Codes</h3>
            {allDivElement}
         </div>)
}








const Hexadecimal=()=>(<div style={{borderRadius:'15px',margin:'1px'}}>
                        <Header title={headerTitle} info={headerInfo}/>
                        <Alldiv number={100}/>
                        <Button/>
                      </div>)

const Button=(props)=>{ 
         const buttonStyle={
            background:'#0588b0' ,
            color:'white',
            padding:'11px',
            pointer:'corsor',
            margin:'9px',
            borderRadius:'14px',
            border:'solid 3px #8ec0ff'}
         return (<div style={{textAlign:'center'}}>
                     <button style={buttonStyle}
                             onClick={()=>document.location.reload()}>
                       Generate New Colors</button>
                 </div>)
         
       }
   
ReactDOM.render(<Hexadecimal/>, document.getElementById('root'));


