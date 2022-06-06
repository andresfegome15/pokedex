import '../components/style/styleSetting.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePagination } from '../store/slices/pagination.slice';
import { changeBackground } from '../store/slices/background.slice';
import { changeheader1 } from '../store/slices/header1.slice';
import { changeheader2 } from '../store/slices/header2.slice';
import { changecolumn } from '../store/slices/column.slice';
import { useState } from 'react';



const Setting = () => {
    const pagination = useSelector(state => state.pagination)
    const background = useSelector(state => state.background)
    const header1 = useSelector(state => state.header1)
    const header2 = useSelector(state => state.header2)
    const column = useSelector(state => state.column)

    const items = []
    const [Nitem, setNitems] = useState(pagination)
    const [Columns, setColumns] = useState(column)
    const [color, setColor] = useState(background)
    const [header1color, setheader1Color] = useState(header1) 
    const [header2color, setheader2Color] = useState(header2)
    
    const dispatch = useDispatch()
    const navegate = useNavigate()
    
    const cambio = e => {
        dispatch(changePagination(Nitem))
        dispatch(changeBackground(color))
        dispatch(changeheader1(header1color))
        dispatch(changeheader2(header2color))
        dispatch(changecolumn(Columns))
        navegate(-1)
    }

    function getcolumns(pagination) {
        for (let i = 1; i <= pagination; i++) {
            items.push(i)
        }
        console.log(items);
    }

    return (
        <div className='container-setting'>
            <div className='container-left'>
                <label htmlFor="color"> Seleccione color de fondo</label>
                <input id='color' type="color" list={color} onChange={e => setColor(e.target.value)} value={background} />
                <label htmlFor="color"> Seleccione numero de tarjetas</label>
                <select onChange={e => setNitems(e.target.value)}>
                    <option value={pagination}>{pagination}</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                </select>
                <label htmlFor="color"> Seleccione color de barra #1</label>
                <input  type="color" list={color} onChange={e => setheader1Color(e.target.value)} value={header1} />
                <label htmlFor="color"> Seleccione color de barra #2</label>
                <input  type="color" list={color} onChange={e => setheader2Color(e.target.value)} value={header2} />
                <label htmlFor="color"> Seleccione columnas</label>
                <select onChange={e => setColumns(e.target.value)}>
                    <option value={column}>Columns</option>
                    <option value="1fr">1</option>
                    <option value="1fr 1fr">2</option>
                    <option value="1fr 1fr 1fr">3</option>
                    <option value="1fr 1fr 1fr 1fr">4</option>
                    <option value="1fr 1fr 1fr 1fr 1fr">5</option>
                </select>
                <button onClick={() => cambio()}>Guardar cambios</button>
            </div>
            <div className='container-rigth'>
                <div className='container-previw'>
                    <header>
                        <div className='header1' style={{backgroundColor:`${header1color}`}}></div>
                        <div className='header2' style={{backgroundColor:`${header2color}`}}></div>
                    </header>
                    <div className="container-body" style={{ backgroundColor: `${color}`,gridTemplateColumns:Columns}}>
                        {
                            getcolumns(Nitem)
                        }
                        {
                            items.map(() => (
                                <div className="card" >
                                    <div className='card-img'></div>
                                    <div className='card-title'></div>
                                    <ul className='card-ul'>
                                        <li className="card-li"></li>
                                        <li className="card-li"></li>
                                        <li className="card-li"></li>
                                        <li className="card-li"></li>
                                    </ul>
                                </div>

                            ))
                        }
                       
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Setting;