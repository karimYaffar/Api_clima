import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { WeatherButton } from './components/boton';
import { WeatherInfo } from './components/api';
import { styles } from "./components/estilos";

export default function App() {
  const cities = ["Pachuca", "Huejutla", "Tampico", "Ciudad de Mexico"];
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (city) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a6db6214fc9c42d1950191808231010&q=${city},es&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      getWeatherData(selectedCity);
    }
  }, [selectedCity]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Clima</Text>
      {cities.map((city, index) => (
        <WeatherButton key={index} city={city} onPress={() => setSelectedCity(city)} />
      ))}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </ScrollView>
  );
}
