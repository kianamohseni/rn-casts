import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
	return <Text style = {styles.headerStyle}>Hello World!</Text>;
};

const styles = StyleSheet.create({
	headerStyle:{
		fontSize: 30
	}
});

export default ComponentsScreen;