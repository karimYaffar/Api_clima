import { View, Text } from "react-native";
import { styles } from "./estilos";

export const WeatherInfo = ({ weatherData }) => {
    return (
        <View style={styles.weatherContainer}>
        <Text style={styles.weatherCity}>{weatherData.location.name}</Text>
        <Text style={styles.weatherTemp}>{weatherData.current.temp_c}°C</Text>
        <Text style={styles.weatherCondition}>{weatherData.current.condition.text}</Text>
        <Text style={styles.weatherInfo}>
            Wind: {weatherData.current.wind_kph} km/h | Humidity: {weatherData.current.humidity}%
        </Text>
    </View>
    )
};