import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.imagem} source={require('./assets/despesascapa.jpg')} />
			<Text style={styles.titulo2}>Sistema</Text>
			<Text style={styles.titulo}>Calculadora Despesas</Text>
			<TextInput style={styles.input} placeholder='E-mail' />
			<TextInput style={styles.input} placeholder='Senha' secureTextEntry />
			<Text style={styles.botao}>ENTRAR</Text>
			<Text>Criar Conta</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCFBFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	titulo: {
		color: '#121A2C',
		fontSize: 24,
		fontWeight: 'bold'
	},
	titulo2: {
		color: '#121A2C',
		fontSize: 16,
	},
	input: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#747474',
		marginVertical: 20
	},
	botao: {
		backgroundColor: '#121A2C',
		color: '#FFBA26',
		borderRadius: 4,
		paddingVertical: 8,
		paddingHorizontal: 60,
		marginBottom: 4
	},
	imagem: {
		width: '100%',
		height: 200,
		position: 'absolute',
		top: 0
	}
});
