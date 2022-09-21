import React from 'react'
import Input from './Input.js'
class Form extends React.Component{
	render(){
      return (<form >
          <div>
            Firstname:{'  '}<Input
              type='text'
              name='firstName'
              holder='First Name'
              change={this.props.change}
            />
          </div>
          <div>
            Lastname:{'  '}<input
              type='text'
              name='lastName'
              placeholder='Last Name'
              onChange={this.props.change}
            />
          </div>
          <div>
            Birth Month:{'  '}<input
              type='month'
              name='month'
              placeholder='Title'
              
              onChange={this.props.change}
            />
          </div>
        </form>)  
       
	}
}
export default Form