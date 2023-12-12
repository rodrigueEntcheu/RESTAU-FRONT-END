<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="client.nom" type="text" class="form-control" id="nom">
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input v-model="client.prenom" type="text" class="form-control" id="prenom">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="client.email" type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="adresse" class="form-label">Adresse de livraison</label>
                <input v-model="client.adresseDeLivraison" type="text" class="form-control" id="adresse">
            </div>
            <div class="mb-3">
                <label for="numero de telephone" class="form-label">Numéro de téléphone</label>
                <input v-model="client.numeroDeTelephone" type="number" class="form-control" id="numero de telephone">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input v-model="client.motDePasse" type="password" class="form-control" id="mdp">
            </div>
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useClient from '../services/serviceClient.js';
const router = useRouter()
const { ajouterClient } = useClient()

const client = ref({
            nom: '',
            prenom: '',
            email: '',
            numeroDeTelephone: '',
            adresseDeLivraison: '',
            motDePasse: ''
})

const soumettre = () => {
    console.log('client', client.value)
    ajouterClient(client.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout", err))
}
</script>

<style lang="scss" scoped></style>
