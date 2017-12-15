import React, { Component } from 'react'; //entending component from the react-component class
import { Button } from 'react-native';

class NewsDetailScreen extends Component { //this is a class component.
	static navigationOptions = ({navigation}) => ({
			title: 'BBC News', //title is the same on both pages so can just insert it as static - it is always 'BBC News'
	});

  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back"
        onPress={() => goBack()} 
      />
    );
  }
}

export default NewsDetailScreen;
