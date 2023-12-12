<template>
    <div>
        <h1>Adresse de {{ adresseDeLivraison.nomDestinataire }} {{ adresseDeLivraison.prenomDestinataire }}</h1>
        <p>Details sur l'adresse de livraison</p>
        <div>Adresse de livraison: {{ adresseDeLivraison.adresseDestinataire }}</div>
        <div>Numero de téléphone: {{ adresseDeLivraison.numeroDeTelephone }}</div>

    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params



// Fonction/Service qui permet de recuperer une adresse de livraison depuis la base de donnees.
import useAdresseDeLivraison from '../services/serviceAdresseDeLivraison';

const { getAdressesDeLivraisonById } = useAdresseDeLivraison()

const adresseDeLivraison = ref({})

onBeforeMount(() => {

    if (id)
    getAdressesDeLivraisonById(id).then((data) => {
            console.log('Adresse de livraison', data)
            adresseDeLivraison.value = data
        }).catch(err => console.log('Detail de l adresse de livraison', err))

})

</script>

<style lang="scss" scoped></style>