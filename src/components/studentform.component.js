import { Component } from 'react';
export default class AddStudentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            rollnum:0,
            maths:0,
            physics:0,
            chemistry:0,
            submitted:false,

        };
    }
    newForm(e){

    }

    

    render(){

        return (
            <div className="form-container">
                {
                this.state.submitted ? (
                    <div className="aftersubmit">
                        <button onClick="this.newForm">
                            Add another Form
                        </button>
                    </div>
                ) : 
                (
                    <div className="newform">
                        <div className="field">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" id="name" required value={ this.state.name } />
                        </div>
                        <div className="field">
                            <label htmlFor="rollnum">
                                Roll No.
                            </label>
                            <input type="number" id="rolllnum" required value={ this.state.rollnum } />
                        </div>
                        <div className="field">
                            <label htmlFor="maths">
                                Mathematics
                            </label>
                            <input type="number" id="maths" required value={ this.state.maths }/>
                        </div>
                        <div className="field">
                            <label htmlFor="physics">
                                Physics                            
                            </label>
                                    <input type="number" id="physics" required value={ this.state.physics } />
                        </div>
                        <div className="field">
                            <label htmlFor="chemistry">
                                Chemistry
                            </label>
                            <input type="number" id="chemistry" required value={ this.state.chemistry }/>
                        </div>


                    </div>

                )
                }
                
            </div>
        );
    }
}