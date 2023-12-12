<template>
    <div>
        <h1>Profil de {{ utilisateur.nom }} {{ utilisateur.prenom }}</h1>
        <p>Dtails sur l'utilisateur</p>
        <div>Email: {{ utilisateur.email }}</div>
        <div>Email: {{ utilisateur.naissance }}</div>
        <div>Numero de téléphone: {{ utilisateur.numeroDeTelephone }}</div>
        <div>Photo: {{ utilisateur.photo }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params



// Fonction/Service qui permet de recuperer un utilisateur depuis la base de donnees.
import useUtilisateur from '../services/serviceUtilisateur';

const { getUtilisateurById } = useUtilisateur()

const utilisateur = ref({})

onBeforeMount(() => {

    if (id)
    getUtilisateurById(id).then((data) => {
            console.log('Utilisateur', data)
            utilisateur.value = data
        }).catch(err => console.log('Detail utilisateur', err))

})

</script>

<style lang="scss" scoped></style>