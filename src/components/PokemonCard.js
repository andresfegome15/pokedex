import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {
    const navegate = useNavigate();
    const [pokemon, setPokemon] = useState({})
    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res=> setPokemon(res.data))
       
    },[pokemonUrl])
    console.log(pokemon);
     const h1 = Math.floor(Math.random()*99)
     const h2 = Math.floor(Math.random()*99)
     const h3 = Math.floor(Math.random()*99)
     const h4 = Math.floor(Math.random()*99)


    
    return (
        <div className='pokemon-card' style={{backgroundColor:`rgba(${h1}, ${h2}, ${h3}, ${h4})`}} onClick={()=> navegate(`/pokedex/${pokemon.id}`)}>
            <div className='container-image' style={{backgroundColor:`rgba(${h1 + 10}, ${h2+15}, ${h3+10}, ${h4})`}}>
                <img src={pokemon.sprites?.other.home.front_default} alt="" />
            </div>
            <div className='container-detail' >
                <div className='container-items'>
                    <h1 style={{color:`rgba(${h1 + 10}, ${h2+15}, ${h3+10}, ${h4})`}}>{pokemon.name}</h1>
                    <h3>{pokemon.types?.[0].type.name}</h3>
                    <h6>tipe</h6>
                </div>
                <div className='container-hability'>
                    <div>
                        <h6>hp</h6>
                        <p>{pokemon.stats?.[0].base_stat}</p>
                    </div>
                    <div>
                        <h6>Ataque</h6>
                        <p>{pokemon.stats?.[1].base_stat}</p>
                    </div>
                    <div>
                        <h6>Defesna</h6>
                        <p>{pokemon.stats?.[2].base_stat}</p>
                    </div>
                    <div>
                        <h6>Velocidad</h6>
                        <p>{pokemon.stats?.[3].base_stat}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default PokemonCard;