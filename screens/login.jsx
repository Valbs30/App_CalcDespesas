import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { styles } from '../style';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/despesascapa.jpg')} />
            <Text style={styles.titulo2}>Sistema</Text>
            <Text style={styles.titulo}>Calculadora Despesas</Text>
            <TextInput style={styles.input} placeholder='E-mail' />
            <TextInput style={styles.input} placeholder='Senha' secureTextEntry />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.botao}>ENTRAR</Text>
            </TouchableOpacity>
            <Text>Criar Conta</Text>
        </View>
    );
}