import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import img from "../img/pokedex.png"


const Pokedex = () => {
    /* Estados */
    const background = useSelector(state => state.background)
    const pagination = useSelector(state => state.pagination)
    const user =  useSelector(state => state.user)
    const [pokemons, setPokemons] = useState([])
    const [pokemonstype, setPokemonstype] = useState([])
    const [pokeinput, setPokeinput] = useState("")

    /* iniciacion de redux */
    const navegate = useNavigate();


    /* Funcion cargar pokemons */
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pagination}`)
            .then(res => setPokemons(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setPokemonstype(res.data.results));
    },[pagination])
    
    /* funccion para burcar pokemon por el input */
    const searchPokemonInput =()=>{
        navegate(`/pokedex/${pokeinput}`)
    }

    const filterpokemons = e =>{
         axios.get(e.target.value)
         .then(res => setPokemons(res.data.pokemon))
    }
    return (
        <div style={{backgroundColor:`${background}`}}>
            <header>
                <div className='home-foot-red'>
                <img className='pokedex-deatil-img' src={img} alt="" />
                </div>
                <div className='home-foot-black'>
                <img className='pokedexdetail-pokeboll' src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-4.png" alt="" />
                </div>
            </header>
            <div className="container-pokedex">
          {/*   <button onClick={()=>navegate('/setting')}>setting</button> */}
            <h2 className='pokedex-welcome'>Bienvenido andres{user},</h2><h2 className='pokedex-h2'>   aquí pordrás encontrar tu pokemón favorito</h2>
           
           <div className="pokedex-search">
                <input placeholder='Search pokemon' type="text" className='pokedex-searchInput' onChange={e => setPokeinput(e.target.value)} value={pokeinput} />
                <button type='button' className='pokedex-btnsearch' onClick={()=>searchPokemonInput()}>search</button>
                <select className='pokedex-select' onChange={filterpokemons}>
                    <option value="">Todos los pokemones</option>
                    {   
                        pokemonstype.map(pokemontype =>(
                            <option value={pokemontype.url} key={pokemontype.name}>{pokemontype.name}</option>
                            
                        ))
                    }
                </select>
           </div>
            <div className='pokemon-cards'>
                {
                    pokemons.map((pokemon)=>(
                        <PokemonCard key={pokemon.name!== undefined?pokemon.name:pokemon.pokemon.name} pokemonUrl={pokemon.url !== undefined?pokemon.url : pokemon.pokemon.url} />
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Pokedex;