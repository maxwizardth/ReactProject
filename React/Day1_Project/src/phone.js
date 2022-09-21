import React from 'react'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state={data:[{name:'Abdullahi',number:'091 5303 6869'},{name:'Maxwizard',number:'070 4522 5718'}]}
    } 
  static getDerivedStateFromProps(props,state){
   return {data:props.contacts}
}
   render(){
    const contacts=this.state.data
    const contactsDiv=contacts.map((contact)=>{
        const digit='1234567890abcdef'
          const backgroundColor=[1,2,3,4,5,6].reduce((prev,curr)=>
          prev+=digit[Math.floor(Math.random()*digit.length)],'#')
          const logoStyle={backgroundColor,
                           maxWidth:'40px',
                           maxHeight:'40px',
                           fontWeight:'bold',
                           borderRadius: '25px',
                           fontSize: '25px',
                           lineHeight: '39px',
                           marginRight: '9px',
                           }

           const nameLogo=contact.name[0]
           const style={}
               return (
                <div className='row' style={{maxWidth:'100%'}} key={contact.name}>

                   <div className='text-capitalize text-start col-7 col'
                           >
                            <div className="row" style={{height:'100%'}}>
                              <span className="col-sm-3" style={logoStyle}>
                                      {nameLogo}</span>
                            <span className="col-sm-9 ">{contact.name}</span>
                         </div>
                    </div>
                    <p className='col col-5' 
                       style={{marginTop:'15px',}}>
                     {contact.number}
                    </p> 
                </div>)})
    return (<div id='allContact'>{contactsDiv}</div>)
      }
    }







const App = () => {
  const localContact = JSON.parse(localStorage.getItem('contactItemss'))
  const defaultContact=[{name:'Abdullahi',number:'091 5303 6869'},{name:'Maxwizard',number:'070 4522 5718'}]
  const contactItem=localContact?localContact:defaultContact
  const [contacts, setContacts] = React.useState(contactItem)
  const name=React.createRef()
  const phoneDigit=React.createRef()

  const appendContact = () => {
    const newName=name.current.value
    const number=phoneDigit.current.value
    const newContact={name:newName,number:number}
    setContacts([...contacts,newContact])
  }
  localStorage.setItem('contactItemss', JSON.stringify(contacts));

  return (     
<div className="container">
  <div className="header">
    <div className="row">
      <div className="col col-md-4">
        <p>
        <i className='fas fa-user-alt' 
         style={{backgroundColor:'blue',
                color:'white',
                borderRadius:'25px',
                width:'45px',
                height:'45px',
                textAlign:'center',
                padding:'6px',
                fontSize:'30px'}}>
        </i>Phonebook
        </p>
      </div>
      <div className="col col-md-4 ">
        <input type="search" name="" id="inputBox"/>
      </div>
      <div className="col col-sm-4" style={{textAlign: 'right'}}>
        <button className="btn" id="createBtn">Create contact</button>
      </div>
    </div>
    <div>   
    <input ref={name} placeholder="Name"/>
    <input ref={phoneDigit} placeholder="phone number"/>
    <input type="submit" value="Save Contact" onClick={appendContact}/>
   </div>
    </div>
      <div className='row'>
      <p className='col col-sm-6'>Name</p>
       <p className='col col-sm-6'>Phone Number</p>
        <hr/>
    </div>
    <div>
    <p id="numbersOfContact">Contact ({contacts.length})</p>
      <Contact contacts={contacts}/>
      </div>
    </div>
  )
}
export default App