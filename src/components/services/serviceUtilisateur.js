//Importer les axios.
import axios from 'axios'

//Création des composables

const useUtilisateur = () => {
    const getUtilisateur = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs`)

    return result.data.data
    }

    const getUtilisateurById = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`)
      
        return result.data.data

    }

    const ajouterUtilisateur= async (client) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/utilisateurs`, utilisateur)
       
        return result.data.data

    }

    const supprimerUtilisateur= async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`)
       
        return result.data.data

    }

    const mettreAJourUtilisateur= async (id,utilisateur) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`, utilisateur)
       
        return result.data.data

    }
    
    return {getUtilisateur,getUtilisateurById,ajouterUtilisateur, mettreAJourUtilisateur,supprimerUtilisateur}
    
} 
export default useUtilisateur
