//I could put this logic into the App.js file, but it's best to keep it as uncluttered as possible.
//This file pulls together the screens which we want to navigate between and utilizes Stack Navigator (installed with yarn add react-navigation)

import NewsDetailScreen from './screens/NewsDetailScreen';
import NewsListScreen from './screens/NewsListScreen';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({ //create a stack of pages - stack navigator takes an object
	List: {screen: NewsListScreen}, //first page needs to use the NewsListScreen.js file
	Detail: {screen: NewsDetailScreen}, //second page needs to use the NewsDetailScreen.js file
	//List and Detail are used as the keys to identify the pages ex. onPress={() => navigate('Detail')}
});