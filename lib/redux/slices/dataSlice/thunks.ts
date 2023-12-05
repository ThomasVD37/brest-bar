/* Instruments */
import { createAppAsyncThunk } from '../../createAppAsyncThunk';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchBarApi = createAppAsyncThunk('data/fetch', async () => {
    try {
        const response = await fetch('https://api.brest.bar/items/bars', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        const { data } = await response.json()

        return data
    } catch (error) {
        throw new Error("Une erreur est survenue lors de la récupération des données. Veuillez réessayer")
    }
    
});
