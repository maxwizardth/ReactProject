import React from 'react'

class Input extends React.Component{
	render(){
		return <input onClick={this.props.click} 
				onChange={this.props.change}
				placeholder={this.props.holder}
				value={this.props.val}
				name={this.props.name}
				type={this.props.type}
				style={this.props.style}/>}

}

export default Input