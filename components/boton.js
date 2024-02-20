import { Text, TouchableOpacity } from "react-native";
import { styles } from "./estilos";

export const WeatherButton = ({ city, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(city)}>
            <Text style={styles.buttonText}>Clima en {city}</Text>
        </TouchableOpacity>
    );
};
