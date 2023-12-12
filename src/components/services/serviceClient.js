//Importer les axios.
import axios from 'axios'

//Création des composables

const useClient = () => {
    const getClients = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/clients`)

    return result.data.data
    }

    const getClientById = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/clients/${id}`)
      
        return result.data.data

    }

    const ajouterClient= async (client) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/clients`, client)
       
        return result.data.data

    }

    const supprimerClient= async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/clients/${id}`)
       
        return result.data.data

    }

    const mettreAJourClient= async (id,client) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/clients/${id}`, client)
       
        return result.data.data

    }
    
    return {getClients, getClientById, ajouterClient, supprimerClient, mettreAJourClient}
    
} 
export default useClient
