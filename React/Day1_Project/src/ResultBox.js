import React from 'react'
class ResultBox extends React.Component{
  constructor(props){
  super(props)
  }
render(){
     const modalStyle={
          textAlign: 'center',
          background: '#455990',
          padding: '9px',
          height: '60%'}

    const contentStyle={
          background: 'rgb(5, 136, 176)',
          color: 'white'}
    const titleStyle={marginLeft: '31px',
                    textAlign: 'center'}
  const score=this.props.score
     return (<div className="modal" id="myModal" 
                  style={modalStyle}>
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content" 
                     style={contentStyle}>        
                      <div className="modal-header text-center">
                       <h4 className="modal-title" 
                            style={titleStyle}>YOUR RESULT</h4>
                       <button type="button" className="btn-close"
                         data-bs-dismiss="modal"></button>
                      </div>
                       
                      <div className="modal-body text-center">
                        <h3 className="text-center">Congratulations!!</h3>
                        <p id='respondTime'>You have completed the quiz</p>
                        <hr/>
                        <h6 className="text-center">Result</h6>
                        <hr/>
                        <h4>{score}/20</h4>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>)
              }
            }
export default ResultBox