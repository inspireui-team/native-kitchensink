import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const styles = StyleSheet.create({
	container: { flex: 1, paddingTop: StatusBar.currentHeight },
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 13, paddingTop: 0 },
	customDrawer: {},
	customDrawerTouch: { paddingLeft: 13, paddingBottom: 5 },
	customDrawerIcon: { paddingRight: 7 },
});

export class DataSearch_withTitle extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => {
							this.props.navigation.goBack();
						}}
					>
						<Icon name="md-menu" size={30} />
					</TouchableOpacity>
				</View>
				<View style={styles.innerContainer}>
					<Text>DataSearch_withTitle</Text>
				</View>
			</View>
		);
	}
}

export class DataSearch_withIcon extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => {
							this.props.navigation.goBack();
						}}
					>
						<Icon name="md-menu" size={30} />
					</TouchableOpacity>
				</View>
				<View style={styles.innerContainer}>
					<Text>DataSearch_withIcon</Text>
				</View>
			</View>
		);
	}
}