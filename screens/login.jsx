import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { styles } from '../style';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    async function handleLogin(){
        if (await login({email, senha})){
            navigation.navigate('Comanda')
        }else{
            setErro("Credenciais Inválidas")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/despesascapa.jpg')} />
            <Text style={styles.titulo2}>Sistema</Text>
            <Text style={styles.titulo}>Calculadora Despesas</Text>
            <TextInput 
                style={styles.input} placeholder='E-mail' 
                value={email} onChangeText={setEmail}/>
            <TextInput style={styles.input} placeholder='Senha' secureTextEntry
                value={senha} onChangeText={setSenha}/>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.botao}>ENTRAR</Text>
            </TouchableOpacity>
            <Text>Criar Conta</Text>

            <Text style={styles.erro}>{erro}</Text>
        </View>
    );
}