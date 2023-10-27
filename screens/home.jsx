import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import { styles } from '../style';

export default function Home({ navigation }) {
    return (
        <View style={styles.container2}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.botaoadddesp}>
                        <AntDesign style={styles.icon} name="addfile" />Adicionar Despesa
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Ionicons style={styles.botsaida} name="exit-outline" />
                </TouchableOpacity>
            </View>

            <View style={styles.div}>
                <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
                    <Text style={styles.botaoadddesp}>
                        Ver Categorias
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.div}>
                <TouchableOpacity onPress={() => navigation.navigate('Despesas')}>
                    <Text style={styles.titulo2}>Despesa</Text>
                    <Text>Data: 32/12/3021</Text>
                    <Text>Categoria: Domestica</Text>
                    <Text>Valor: R$435,43</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}