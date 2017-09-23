import React from "react";

export class Home extends React.Component {
	render() {
		var text ="something!";
		return(
			<div>
				<p>In a new component!</p>
				<p>{text}</p>
				<p>Your name is {this.props.name} , your age is {this.props.age}</p>
				<p> User Object : {this.props.user.name}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
					<li>{this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}</li>

					</ul>

				</div>
				
			
			</div>
		); 
	}

}
