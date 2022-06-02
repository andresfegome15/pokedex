import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../PokedexDetail.css'
import img from '../img/pokedex.png'

const PokedexDetail = () => {
    const navegate = useNavigate()
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=> setPokemon(res.data))
    },[id])
    console.log(pokemon);
    return (
        <div className='div-body'>
            <div className='container-body-detail'>
                <div className='home-foot-red'>
                    <button className='btnreturn' onClick={()=>navegate(-1)}>pokedex</button>
                    <img className='pokedex-deatil-img' src={img} alt="" />
                </div> 
                <div  className='home-foot-black'>
                <img className='pokedexdetail-pokeboll' src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-4.png" alt="" />
                </div>
                <div className="container-img">
                    <img src={pokemon.sprites?.other.home.front_default} alt="" />
                </div>
                <div>
                    <h1 className='h1-id'>#{id}</h1>
                     <h1>{pokemon.name}</h1>
                     <div className='camp'>
                            <h3>Peso</h3>
                            <h3>Altura</h3> 
                            <h5>{pokemon.weight}</h5>
                            <h5>{pokemon.height}</h5>
                        </div>
                        <div className='camp'>
                            <h3>Tipo</h3>
                            <h3>Habilidades</h3>
                        </div>
                    <div className='container_h3info'>
                        <div className="div_h3info"><h2>{pokemon.types?.[0].type.name}</h2></div>
                        <div className="div_h3info"><h2>{pokemon.types?.[1].type.name}</h2></div>
                        <div className="div_h3info"><h2>{pokemon.abilities?.[0].ability.name}</h2></div>
                        <div className="div_h3info"><h2>{pokemon.abilities?.[1].ability.name}</h2></div>
                    </div>

                    <div className="stats">
                        <h1>STATS</h1>
                        <h4>HP</h4><h6 style={{marginLeft:pokemon.stats?.[0].base_stat -7 + "%"}}>{pokemon.stats?.[0].base_stat} / 100</h6>
                        <div style={{width:pokemon.stats?.[0].base_stat + "%"}}></div>
                        <h4>ATACK</h4><h6 style={{marginLeft:pokemon.stats?.[1].base_stat -10 + "%"}}>{pokemon.stats?.[1].base_stat} /100</h6>
                        <div style={{width:pokemon.stats?.[1].base_stat + "%"}}></div>
                        <h4>DEFENSE</h4><h6 style={{marginLeft:pokemon.stats?.[2].base_stat -12 + "%"}}>{pokemon.stats?.[2].base_stat} /100</h6>
                        <div style={{width:pokemon.stats?.[2].base_stat + "%"}}></div>
                        <h4>SPEED</h4><h6 style={{marginLeft:pokemon.stats?.[3].base_stat -10 + "%"}}>{pokemon.stats?.[3].base_stat} /100</h6>
                        <div style={{width:pokemon.stats?.[3].base_stat + "%"}}></div>
                    </div>
                        <div className='container-movements'>
                        <h1>Movements</h1>

                            <div className="movements">
                                
                                        {
                                            pokemon.moves?.map((move)=>(
                                                <h3 key={move?.move.name}>
                                                    {move?.move.name}
                                                </h3>
                                            ))
                                        }
                            </div>
                        </div> 
    </div>
</div>

</div>

/* 
 */

    );
};

export default PokedexDetail;