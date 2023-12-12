<template>
    <div>
        <h1>Profil de {{ client.nom }} {{ client.prenom }}</h1>
        <p>Dtails sur le client</p>
        <div>Email: {{ client.email }}</div>
        <div>Numero de téléphone: {{ client.numeroDeTelephone }}</div>
        <div>Adresse de livraison: {{ client.adresseDeLivraison }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params



// Fonction/Service qui permet de recuperer un client depuis la base de donnees.
import useClient from '../services/serviceClient';

const { getClientById } = useClient()

const client = ref({})

onBeforeMount(() => {

    if (id)
        getClientById(id).then((data) => {
            console.log('Client', data)
            client.value = data
        }).catch(err => console.log('Detail client', err))

})

</script>

<style lang="scss" scoped></style>