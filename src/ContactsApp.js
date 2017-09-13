import React, { Component, PropTypes } from "react";
import { render } from 'react-dom';

class ContactsApp extends Component {

	constructor(){
		super();
		this.state = {
			filterText: ""
		}
	}
	handleUserInput(searchTerm){
		this.setState({
			filterText: searchTerm
		})
	}
	render(){
		return (
			<div className="ContactsMain">
				<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
				<ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
			</div>
			)
	}
}
ContactsApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

class SearchBar extends Component {
	handleChange(event){
		this.props.onUserInput(event.target.value);
	}
	render(){
		return(
				<input type="Search" placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind(this)}/>
			)
	}
}
SearchBar.propTypes = {
	filterText: PropTypes.string.isRequired
}

class ContactList extends Component {
	render(){
		let filteredContects = this.props.contacts.filter( contact => contact.name.indexOf(this.props.filterText) !== -1)
		return (
				<ul>
					{
						filteredContects.map(contact => {
							return <ContactItem 
										key={contact.email}
										name={contact.name}
										email={contact.email}
									/>
						})
					}
				</ul>
			)
	}
}
ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
	render(){
		return (
				<li>{this.props.name} - {this.props.email}</li>
			)
	}
}

let emailText = (props, key) => {
	let emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
	if(props[key]){
		if(!emailReg.test(props[key])){
			return new Error(
				`${key} in ${props} is not email`
				)			
		}
	}
}

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	email: emailText
}


export default ContactsApp;