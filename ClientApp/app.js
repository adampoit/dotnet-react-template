import * as React from 'react';
import { Grid, Input, Header} from 'semantic-ui-react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({message: event.target.value});
	}

	render() {
		return (
			<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
				<Grid.Column>
					<Header as='h3' textAlign='center'>Title</Header>
					<Input placeholder='Enter message' onChange={this.handleChange} />
					<p>Your message: {this.state.message}</p>
				</Grid.Column>
			</Grid>
		);
	}
}
