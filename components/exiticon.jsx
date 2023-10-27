import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function ExitIcon({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Ionicons style={styles.botsaida} name="exit-outline" />
        </TouchableOpacity>
    );
}