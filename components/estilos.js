import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f5fe', // Color de fondo suave
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1565c0', // Azul oscuro
    },
    button: {
        backgroundColor: '#2196f3', // Azul
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginTop: 10, // Espaciado entre botones
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    weatherContainer: {
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco translúcido
    },
    weatherCity: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    weatherTemp: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2196f3', // Azul
    },
    weatherCondition: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    weatherInfo: {
        fontSize: 16,
        color: '#555',
        marginTop: 10, // Espaciado entre información del clima
    },
});
