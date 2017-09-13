import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// class Search extends Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			searchTerm: "React"
// 		}
// 	}
// 	handleChange(event){
// 		this.setState({
// 			searchTerm: event.target.value
// 		})
// 	}
// 	render(){
// 		return(
// 			<div>
// 				Search Term: <input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
// 				<textarea value="this is the description."></textarea>
// 				<select>
// 					<option value="A">A</option>
// 					<option value="B">B</option>
// 					<option value="C">C</option>
// 				</select>
// 			</div>
// 		)
// 	}
// }

// class FormDate extends Component {

// 	handleSubmit(e){
// 		console.log(e.target.name.value,e.target.email.value);
// 		e.preventDefault();
// 	}
// 	render(){
// 		return (
// 				<form onSubmit={this.handleSubmit}>
// 					<div className="formGroup">
// 						Name: <input type="text" name="name" />
// 					</div>
// 					<div className="formGroup">
// 						Eamil: <input type="mail" name="email" />
// 					</div>
// 					<button type="submit">Submit</button>
// 				</form>
// 			)
// 	}
// }

// class FocusText extends Component {
// 	// constructor(){
// 	// 	super(...arguments);
// 	// }
// 	handleClick(){
// 		this.refs.myTextInput.focus();
// 	}
// 	render(){
// 		return (
// 			<div>
// 				{this.props.salutation}<br/>
// 				{this.props.name}<br/>
// 				<input type="text" ref="myTextInput" />
// 				<input type="button"
// 					value="Focus the text input"
// 					onClick={this.handleClick.bind(this)}/>
// 			</div>
// 			)
// 	}
// }
// FocusText.propTypes = {
// 	salutation: PropTypes.string.isRequired,
// 	name: PropTypes.oneOfType([
// 			PropTypes.string,
// 			PropTypes.number,
// 			PropTypes.bool
// 		]).isRequired,
// 	style: PropTypes.shape({
// 				color: PropTypes.string.isRequired,
// 				fontSize: PropTypes.number
// 			}),
// 	arrayOfData: PropTypes.arrayOf(PropTypes.number),
// 	objectOfDate: PropTypes.objectOf(PropTypes.number)
// }

// FocusText.defaultProps = {
// 	salutation: "hello world"
// }

// let style = {
// 	color:"red",
// 	fontSize: 12,
// 	abc:""
// }
// let arrayOfData = [1,1,2,3,4,5];
// let objectOfDate = {key1:1,key2:2};

// ReactDOM.render(<FocusText 
// 	salutation="kai" 
// 	name={true} 
// 	style={style} 
// 	arrayOfData={arrayOfData}
// 	objectOfDate={objectOfDate}/>, document.getElementById('root'));
// registerServiceWorker();

import ContactsApp from "./ContactsApp";
import "./ContactsApp.css";
let contacts = [
	{name: "kai1", email: "11111111111@qq.com"},
	{name: "kai2", email: "22222222222@qq.com"},
	{name: "kai3", email: "33333333333@qq.com"},
	{name: "kai4", email: "44444444444@qq.com"},
	{name: "kai5", email: "55555555555@qq.com"},
	{name: "kai6", email: "66666666666@qq.com"},
]

ReactDOM.render(<ContactsApp contacts={contacts}/>, document.getElementById("root"));