/* Instruments */
import { createAppAsyncThunk } from '../../createAppAsyncThunk';

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
