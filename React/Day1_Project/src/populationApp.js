import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'
import Population from './Population.js'


const header1Info=(<p>In 2011, the global population reached the 7billion mark, it stands at almost 
7.9billion in 2021,with the study of the data and the analysis of the growth rate,
 it's expected to grow to around 8.5billion in 2030, 9.7billion in 2050 and 10.9billion in 2100.</p>)

const headerTitle='Day5: World Population Analysis'

class PopulationApp extends React.Component{
	render(){return(
		<div>
			<Header title={headerTitle} info={header1Info}/>
			<Population/>
			<Footer/>
		   </div>)}
		}
export default PopulationApp