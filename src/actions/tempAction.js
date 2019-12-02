export default function tempAction () {
    return function new1 (dispatch) {
        return dispatch({
            type : "temp",
            payload : "for temp reducer"
        })
    }
}