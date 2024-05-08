import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

const LOGO_URL = 'https://i.imgur.com/BbYaucd.png';

const DrawerHeader = ({ navigation }) => (
	<TouchableOpacity onPress={() => navigation.navigate('Home')}>
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: '#0033FF',
				paddingLeft: 17,
				paddingTop: StatusBar.currentHeight + 10,
				alignItems: 'center',
			}}
		>
			<Image
				source={{
					uri: LOGO_URL,
					width: 40,
					height: 40,
				}}
			/>
			<Text style={{ color: '#FFF', paddingLeft: 9, fontSize: 16 }}>
				NetizenTeknologi
			</Text>
		</View>
	</TouchableOpacity>
);

export default DrawerHeader;