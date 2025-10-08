import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";


export function Button({ variali = "primary", onPress, currency, isSelected }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,
        isSelected && (variali === 'primary' ? styles.buttonPrimary : styles.buttonSecondary)
        ]}>
            <Text style={styles.buttonText}>
                {currency.code}
            </Text>
        </TouchableOpacity>
    )
}