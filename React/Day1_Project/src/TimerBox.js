import React from 'react'
const TimerBox=(props)=>{
    const {minute,seconds}=props
    const width=100*(minute*60+seconds*1)/1200
    const progressWidth=String(width)+'%'
    const Color=width<10?'red':'blue'

  return (<div className=" TimerBox"
               style={{background:'white',                
                      margin:'15px 0px 0px 0x',
                      padding:'22px',
                      color:'black',
                      }}>
                 <h6 id="time" ><strong>
                  Time left:
                  <input type="Number" id="minute" value={minute} readOnly/>:
                  <input type="number" id="seconds" value={seconds} readOnly/> 
                  </strong>
                 </h6>
                 <div className="progress ">
                  <div className="progress-bar" 
                    style={{width:progressWidth,
                            background:Color
                }}></div>
                 </div>
                </div>)}
              
export default TimerBox