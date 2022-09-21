import React from 'react'
class Button extends React.Component{
  render(){ 
  const btnStyle={margin:'4px',
                  padding:'6px',
                  outline:'none',
                  borderRadius:'5px'}
  const {click,Class,text}=this.props
  return (<button type="button" 
           onClick={click}
           className={Class} 
           style={btnStyle}  
           >{text}
           </button>)}
}
export default Button