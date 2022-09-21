import React from 'react'

/* listing out titems in a list for readability*/
class ListItems extends React.Component{

	render(){
		const items=this.props.items
		const start=items.splice(0,items.length-1).join(', ')
		const end=start.length>0?' and '+items:items
		const wordItems=start+end
	return wordItems
	}

}

export default ListItems