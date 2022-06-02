import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUser } from '../store/slices/user.slice';
import img from '../img/pokedex.png'


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
            <div className='home-modal'>
                <img className='home-deatil-img' src={img} alt="" /><br />
            <label className='home-label' htmlFor="nameUser">¡Hola entrenador!</label><br />
            <h4>Para empezar, escribe tu nombre</h4><br /><br />
            <input placeholder='Nombre de entrenador' className='home-name-input' type="text"  id="nameUser" onChange={e => setUserName(e.target.value)} value={userName}/>
            <button className='home-btn-start' onClick={()=> getname()}>Enviar</button>
            </div>
            

            <footer className='home-footer'>
                <div className='home-foot-red'>
                <img className='pokedexdetail-pokeboll' src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-4.png" alt="" />
                </div>
                <div className='home-foot-black'></div>
            </footer>
        </div>
    );
};

export default Home;