<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="texteDuCommentaire" class="form-label">Texte du commentaire</label>
                <input v-model="commentaire.texteDuCommentaire" type="text" class="form-control" id="texteDuCommentaire">
            </div>
            <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <input v-model="commentaire.note" type="number" class="form-control" id="note">
            </div>
            <div class="mb-3">
                <label for="dateCommentaire" class="form-label">Date du commentaire</label>
                <input v-model="commentaire.dateDuCommentaire" type="date" class="form-control" id="dateCommentaire">
            </div>
            <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params

const router = useRouter()
const commentaire = ref({})

import useCommentaire from '../services/servicesCommentaires';


const { getCommentaireById, mettreAJourCommentaire } = useCommentaire()

onBeforeMount(() => {
    if (id) getCommentaireById(id).then(data => {
        commentaire.value = data
    }).catch(err => console.log('erreur mise a jour', err))
})

const mettreAJour = () => {
    mettreAJourCommentaire(id, commentaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log('Probleme lors de la mise a jour', err))
}
</script>

<style lang="scss" scoped></style>
