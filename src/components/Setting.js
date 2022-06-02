
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePagination } from '../store/slices/pagination.slice';
import { changeBackground } from '../store/slices/background.slice';



const Setting = () => {
    const dispatch = useDispatch()
    const navegate = useNavigate()

    const background = useSelector(state => state.background)
    const pagination = useSelector(state => state.pagination)
    const cambio = e =>{
        dispatch(changePagination(e.target.value))
        navegate(-1)
   }

   const changeColor = e =>{
       alert(e.target.value)
       dispatch(changeBackground(e.target.value))
   }

    return (
        <div>
            <input type="checkbox"  value={background ===""?"#000":"#ccc"} onClick={changeColor}/>
            <select  onChange={cambio}>
                <option value={pagination}>{pagination}</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
            </select>

        </div>
    );
};

export default Setting;