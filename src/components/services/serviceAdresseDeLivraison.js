//Importer les axios.
import axios from 'axios'

//Création des composables

const useAdresseDeLivraison = () => {
    const getAdressesDeLivraison = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/adresseDeLivraison`)

    return result.data.data
    }

    const getAdressesDeLivraisonById = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/adresseDeLivraison/${id}`)
      
        return result.data.data

    }

    const ajouterAdressesDeLivraison= async (adresseDeLivraison) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/adresseDeLivraison`, adresseDeLivraison)
       
        return result.data.data

    }

    const supprimerAdressesDeLivraison= async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/adresseDeLivraison/${id}`)
       
        return result.data.data

    }

    const mettreAJourAdressesDeLivraison= async (id,adresseDeLivraison) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/adresseDeLivraison/${id}`, adresseDeLivraison)
       
        return result.data.data

    }
    
    return {getAdressesDeLivraison,getAdressesDeLivraisonById,ajouterAdressesDeLivraison,supprimerAdressesDeLivraison,mettreAJourAdressesDeLivraison}
    
} 
export default useAdresseDeLivraison
