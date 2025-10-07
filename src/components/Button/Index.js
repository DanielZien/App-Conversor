import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";


export function Button({ variali = "primary", onPress, currency }) {
    return (
        <TouchableOpacity style={[styles.button,
        variali === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
        ]}>
            <Text style={styles.buttonText}>
                {currency.code}
            </Text>
        </TouchableOpacity>
    )
}