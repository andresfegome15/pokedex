import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUser } from '../store/slices/user.slice';


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")

    const getname =()=>{
        console.log(userName);
        navigate("/pokedex")
        dispatch(changeUser(userName))
    }
    return (
        <div className='home-container-entrenador'>
            <img src="../img/pokedex.png" alt="imagen" />
            <label className='home-label' htmlFor="nameUser">¡Hola entrenador!</label>
            <h4>Para empezar, escribe tu nombre</h4>
            <input placeholder='Nombre de entrenador' className='home-name-input' type="text"  id="nameUser" onChange={e => setUserName(e.target.value)} value={userName}/>
            <button className='home-btn-start' onClick={()=> getname()}>Enviar</button>

            <footer className='home-footer'>
                <div className='home-foot-red'>
                    <img src="../img/pokeboll.png" alt="" />
                </div>
                <div className='home-foot-black'></div>
            </footer>
        </div>
    );
};

export default Home;