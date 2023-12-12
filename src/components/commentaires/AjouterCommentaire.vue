<template>
    <div>
        <form @submit.prevent="soumettre">
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
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import useCommentaire from '../services/servicesCommentaires';

const router = useRouter()
const { ajouterCommentaire } = useCommentaire()

const commentaire = ref({
            texteDuCommentaire: '',
            note: '',
            dateDuCommentaire: '',
})

const soumettre = () => {
    console.log('commentaire', commentaire.value)
    ajouterCommentaire(commentaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout", err))
}
</script>

<style lang="scss" scoped></style>
