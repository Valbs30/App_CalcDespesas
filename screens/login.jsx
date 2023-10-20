import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { styles } from '../style';

export default function Login() {
    return (
        /*<View style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/despesascapa.jpg')} />
            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <TextInput style={styles.input} placeholder='e-mail' />
            <TextInput style={styles.input} placeholder='senha' secureTextEntry />
            <TouchableOpacity>
                <Text style={styles.button}>entrar</Text>
            </TouchableOpacity>
        </View>*/
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