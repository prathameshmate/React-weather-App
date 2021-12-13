import React, { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "./logo/logo.jpg"

const App = () => {

    const [search, updateaSearch] = useState("Mumbai");
    const [data, updateData] = useState(null);

    const searchFun = (event) => {
        updateaSearch(event.target.value);
    }

    useEffect(() => {
        async function fun() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b269eeda5293e5f924bb7ad1fb1a0bc6`);
            const file = await response.json();

            updateData(file.main)
        }
        fun()

    }, [search])
    return (
        <>
            
            <header>
                <div className="leftside">
                    <div className='logo'>
                        <img src={logo} alt="logo.jpg" />
                    </div>
                    <div className='heading'>Weather App</div>
                </div>
                <div className="rightside">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Serivices</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </div>
            </header>

            <div className='container'>
                <div>
                    <div className='inpdiv'>
                        <input className='inp' type="text" placeholder='Enter City' value={search} onChange={searchFun} />
                    </div>
                    {(data) ? (
                        <div className='data' >

                            < LocationOnIcon />{search}

                            <p className='temp'>Temp : {data.temp}°C</p>
                            <p className='temp_min_max'>Min Temp: {data.temp_min}°C to Max Temp: {data.temp_max}°C </p>
                        </div>) : <h4>Data not found.....!!!</h4>}

                </div>

            </div>
            <footer>
                Copyright @ 2021
             </footer>
        </>
    )
}
export default App; 
