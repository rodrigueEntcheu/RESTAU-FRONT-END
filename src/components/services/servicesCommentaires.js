//Importer les axios.
import axios from 'axios'

//Création des composables

const useCommentaire = () => {
    const getCommentaire = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/commentaires`)

    return result.data.data
    }

    const getCommentaireById = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/commentaires/${id}`)
      
        return result.data.data

    }

    const ajouterCommentaire= async (commentaire) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/commentaires`, commentaire)
       
        return result.data.data

    }

    const supprimerCommentaire= async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/commentaires/${id}`)
       
        return result.data.data

    }

    const mettreAJourCommentaire= async (id,commentaire) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/commentaires/${id}`, commentaire)
       
        return result.data.data

    }
    
    return {getCommentaire,getCommentaireById,ajouterCommentaire,supprimerCommentaire,mettreAJourCommentaire}
    
} 
export default useCommentaire
