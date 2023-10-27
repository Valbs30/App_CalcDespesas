import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import { styles } from '../style';

export default function Categorias({ navigation }) {
    return (
        <View style={styles.container2}>
            <TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.botaoadddesp}>
                        <AntDesign style={styles.icon} name="plus" />Adicionar Categoria
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Ionicons style={styles.botsaida} name="exit-outline" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}