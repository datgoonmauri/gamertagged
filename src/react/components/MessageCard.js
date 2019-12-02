import React, { Component } from 'react'

// const this.props = {
// 	id: 0,
// 	text: "hello world",
// 	username: "testdude",
// 	createdAt: "2019-11-29T08:22:49.952Z",
// 	likes: []
// };
class MessageCard extends Component {
	render() {
		return (
			<div style={ {
				border: "1px solid black",
				padding: "1em",
				margin: "2em",
				borderRadius: "10px",
				width: "550px",
				backgroundColor: "white"
			} }>
				<h4>{ this.props.username }</h4>
				<p>{ this.props.text }</p>
				<p>{ new Date(this.props.createdAt).toDateString() }</p>
				<button onClick>Like</button>
			</div>)

}
}

export default MessageCard
