import { allActionCreators } from './../store/reducers/action-craetors';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

//simplify usage of dispatch actions ( use it like a function ) 
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators( allActionCreators, dispatch );
}