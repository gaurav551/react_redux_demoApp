import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators as registerFormRedux } from '../store/redux/registerFormRedux';

class RegisterForm extends Component {
    
    constructor(props) {
		super(props);
	

	}
    state={
        name : ''
    }
    handleChange = (event) =>
    {
       this.setState({name:event.target.value})
    }
    submit = () => {
        var data = this.state.name
        this.props.registerForm(data);
    }
    apiResponseContent=()=>{
        return ( this.props.apiResponse != null? (<div className="benefit-box">
        <div> {<p key={this.props.apiResponse.id}> {this.props.apiResponse.title}  Status {this.props.apiResponse.completed? "Completed" : "NotCompleted"} </p>}  </div>
        
        </div>
        )
        : <div className='error-message'>There is nothing to view...</div>)
    }
    render() {
        return (
            <div>
               
                <input type='text' placeholder='input text' onChange={this.handleChange} value={this.state.name}/>
                <button onClick={this.submit} >SUbmit</button>
                 <h4>Response from registerFormService</h4>
                 {this.apiResponseContent()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  
	return {
		registerForm: (data) => {
			dispatch(registerFormRedux.registerData(data));
		},
    
	};
};
const mapStatesToProps = state => {
	return {
		apiResponse: state.registerFormData.apiResponse,
        isLoading : state.registerFormData.isLoading
	};
};

export default (RegisterForm = withRouter(
	connect(
		mapStatesToProps,
        mapDispatchToProps
    )(RegisterForm)
));