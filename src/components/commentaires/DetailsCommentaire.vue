<template>
    <div>
        <h1>Commentaire de {{ client.nom }} {{ client.prenom }}</h1>
        <p>Dtails sur le commentaire</p>
        <div>Texte du commentaire: {{ commentaire.texteDuCommentaire }}</div>
        <div>Note: {{ commentaire.note }}</div>
        <div>Date du commentaire: {{ commentaire.dateCommentaire }}</div>
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
import useCommentaire from '../services/servicesCommentaires';

const { getCommentaireById } = useCommentaire()

const commentaire = ref({})

onBeforeMount(() => {

    if (id)
    getCommentaireById(id).then((data) => {
            console.log('Commentaire', data)
            commentaire.value = data
        }).catch(err => console.log('Detail commentaire', err))

})

</script>

<style lang="scss" scoped></style>