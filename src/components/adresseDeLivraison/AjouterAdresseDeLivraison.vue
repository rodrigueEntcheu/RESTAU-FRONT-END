<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nomDestinataire" class="form-label">Nom du destinataire</label>
                <input v-model="adresseDeLivraison.nomDestinaire" type="text" class="form-control" id="nomDestinataire">
            </div>
            <div class="mb-3">
                <label for="prenomDestinataire" class="form-label">Prénom du destinataire</label>
                <input v-model="adresseDeLivraison.prenomDestinataire" type="text" class="form-control" id="prenomDestinataire">
            </div>
            <div class="mb-3">
                <label for="adresseDestinataire" class="form-label">Adresse du destinataire</label>
                <input v-model="adresseDeLivraison.adresseDestinataire" type="text" class="form-control" id="adresseDestinataire">
            </div>
            <div class="mb-3">
                <label for="numero de telephone" class="form-label">Numéro de téléphone</label>
                <input v-model="adresseDeLivraison.numeroDeTelephone" type="number" class="form-control" id="numero de telephone">
            </div>
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAdresseDeLivraison from '../services/serviceAdresseDeLivraison.js';
const router = useRouter()
const { ajouterAdressesDeLivraison } = useAdresseDeLivraison()

const adresseDeLivraison = ref({
            nomDestinaire: '',
            prenomDestinataire: '',
            adresseDestinataire: '',
            numeroDeTelephone: '',
})

const soumettre = () => {
    console.log('adresse de livraison', adresseDeLivraison.value)
    ajouterAdressesDeLivraison(adresseDeLivraison.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout", err))
}
</script>

<style lang="scss" scoped></style>
