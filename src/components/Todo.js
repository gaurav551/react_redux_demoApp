import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators as todoRedux } from '../store/redux/todoRedux';


export class Todo extends Component {
    componentDidMount() {
		this.props.getTodo();
	}
    constructor(props) {
		super(props);
		this.todoContent = this.todoContent.bind(this);
        this.handleClick = this.handleClick.bind(this);

	}
    todoContent() {
        return ( this.props.todoData != null && this.props.todoData != [] ? (<div className="benefit-box">
        <div> {this.props.todoData.map(x=> {return <p key={x.id}> {x.title}  Status {x.completed? "Completed" : "NotCompleted"} </p>})}  </div>
        
        </div>
        )
        : <div className='error-message'>There is nothing to view...</div>)
}
handleClick() {
   alert("CLick")
   this.props.deleteTodoItem()
  }
   
    render() {
        return (
            <div>
                   

                 <button onClick={this.handleClick}>DeleteToDO</button>
                {this.props.isLoading?  <p>Loading data</p> :  this.todoContent()}
                  
               
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
	return {
		getTodo: () => {
			dispatch(todoRedux.load());
		},
        deleteTodoItem: ()=>{
           
            dispatch(todoRedux.deleteTodo());
        }
	};
};
const mapStatesToProps = state => {
	return {
		todoData: state.todoData.todoData,
        isLoading : state.todoData.isLoading
	};
};

export default (Todo = withRouter(
	connect(
		mapStatesToProps,
        mapDispatchToProps
    )(Todo)
));
