import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCFBFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
    container2: {
        flex: 1,
		backgroundColor: '#FCFBFF',
        padding: 20
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
		backgroundColor: '#171717',
		color: '#2F8F01',
		borderRadius: 4,
		paddingVertical: 8,
		paddingHorizontal: 60,
		marginBottom: 4
	},
    botaoadddesp: {
		backgroundColor: '#4FA5F5',
        fontSize: 16,
		color: '#FFFFFF',
		borderRadius: 4,
		paddingVertical: 8,
		paddingHorizontal: 20,
	},
	imagem: {
		width: '100%',
		height: 200,
		position: 'absolute',
		top: 0
	},
    icon: {
        fontSize: 18,
        color: "#000",
        paddingRight: 8
    },
    botsaida: {
        fontSize: 26,
        color: "#000",
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    div: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        padding: 20
    },
})