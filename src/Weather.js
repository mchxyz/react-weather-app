import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Weather(props) {
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                let apiKey = "f5029b784306910c19746e40c14d6cd3";
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
                
                const response = await axios.get(apiUrl);
                setWeather(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the weather data:", error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [props.city]);

    if (loading) {
        return (
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                timeout={3000} // Adjust timeout as needed
            />
        );
    }

    if (!weather) {
        return <div>Error fetching weather data.</div>;
    }

    return (
        <div>
            <p>The weather in {weather.name} is {weather.main.temp} °C</p>
        </div>
    );
}
