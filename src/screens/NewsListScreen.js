import React, { Component } from 'react';
import { Button } from 'react-native';

// constructor(props) {
// 		super();
// 	}

class NewsListScreen extends React.Component {
	static navigationOptions = {
		title: 'BBC News',
	};

	render () {
		const { navigate } = this.props.navigation;
		return (
			<Button
			title="Go to detail screen"
			onPress={() =>
				navigate('Detail')
			}
			/>
		);
	}
}

export default NewsListScreen;