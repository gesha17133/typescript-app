import { AuthActionCreators } from "./auth/action-creators"
import { EventActionCreators } from "./event/action-creators"

//For comfortable development I combine different action creators there
export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}