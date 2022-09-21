import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'
import mypic from './image/Desert.jpg'
/*________________card component_________________________________________*/
/*creating Skills component*/
class Skills extends React.Component{
	render(){

	const spanStyle={
		background:'#8ec0ff',
		color: 'white',
            	margin:'3px',
            	display:'inline-block',
            	padding:'6px',
            	borderRadius:'24%',
            	fontSize: '12px'}	
	const skillsElement=this.props.skills.map((skill)=>
		<span key={skill} style={spanStyle}>{skill}</span>)
      	return (<div>
      		   <hr/>
      		   <h4>SKILLS</h4>
      		   {skillsElement}
      		 </div>)
	}
}

		    		

class UserCard extends React.Component{
	render(){
		const {surname,firstname,job,country,skills}=this.props.data
		const checkboxStyle={height:'10px',
				width:'10px',
				borderRadius:'100%',
				clipPath:'circle(50% at 50% 50%)'
			    }

        const imgStyle={width:'120px',
        		height:'120px',
			borderRadius:'50%'}
	const divStyle={padding:'12px',
			background:'white',
			margin:'11px',
			borderRadius:'11px'}

	return (<div style={divStyle}>
	      <h2 style={{textAlign:'center'}}>MY PROFILE</h2>
		  <img src={mypic} style={imgStyle} alt='mypicture'/>
		  <h5>{surname} {firstname}
		  <input type="checkbox" style={checkboxStyle} checked readOnly/></h5>
		  <small>{job}, {country}</small>
		  <Skills skills={skills} />
	       </div>)

	}
}



/*_____________creating the App component__________________________*/
class App extends React.Component{
	render(){
          const userData={surname:'OLADEJO',
			  firstname:'ABDULLLAHI',
			  job:'Junior Developer',
			  country:'Nigeria',
			  skills:['HTML','CSS','Sass',
			    	 'JS','React','Numpy',
			    	  'SQL','Python','Pandas',
			    	  'Django','graphQL',
			    	  'MySQL']}


		return(<div>
			<Header title='Day4: User Card'
			 info='The following shows little information about a user'/>
			<UserCard data={userData}/>
			<Footer/>
			</div>)
		}
		}

/*________________card component end________________________*/
export default App