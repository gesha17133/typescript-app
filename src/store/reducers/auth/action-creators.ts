/* import { AuthActionCreators } from './action-creators'; */
import { AppDispatch } from './../../index';
import { IUser } from './../../../models/IUser';
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction  } from "./types"
import axios from 'axios';

export const AuthActionCreators = {
    
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    
    setIsLoading: ( payload: boolean ): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
    
    setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
    
    login: ( username: string, password: string ) => async( dispatch: AppDispatch ) => {

        try{
        
            dispatch(AuthActionCreators.setIsLoading( true ));
            setTimeout( async() => {
                const response = await axios.get<IUser[]>('./users.json'); 
                
                const mockUser = response.data.find( user => user.username === username );
                
                if( mockUser ){
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setIsAuth(true) );
                } else {
                    dispatch(AuthActionCreators.setError('Wrong Login or Password'));
                }   
            
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)

        } catch( e ){

            dispatch( AuthActionCreators.setError('Error appeared during login') )
        }

    },
    logout: ( ) => async(dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsAuth(false) );
    }

}