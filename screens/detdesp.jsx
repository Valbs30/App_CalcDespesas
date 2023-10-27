import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import { styles } from '../style';

export default function Despesas({ navigation }) {
    return (
        <View style={styles.container2}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Ionicons style={styles.botsaida} name="exit-outline"/>
            </TouchableOpacity>
        </View>
    );
}