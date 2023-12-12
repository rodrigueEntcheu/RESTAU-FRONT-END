<template>
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Texte du commentaire</th>
            <th scope="col"> Note du commentaire</th>
            <th scope="col">Date du commentaire</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Commentaires v-for="comment in commentaires" :key="comment.id" :commentaire="comment" @supprimer="supprimer" />
        </tbody>
      </table>
      <button class="btn btn-primary" @click="allerAJouterCommentaire">Ajouter un commentaire</button>
    </div>
  </template>
  

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const commentaires = ref([])
import useCommentaire from '../services/servicesCommentaires.js';
import { useRouter } from 'vue-router';
const router = useRouter()

const {getCommentaire,supprimerCommentaire} = useCommentaire ()
onBeforeMount(() => {

    getCommentaire().then(data => {
    commentaires.value = data

        console.log('Liste commentaires', data)
    })

})
import Commentaires from './Commentaires.vue';


const supprimer = (id) => {
    console.log('emits', id)
    supprimerCommentaire(id).then((data) => {
        console.log('suppression', data)
        getCommentaire().then(data => {
            commentaires.value = data

            console.log('Liste commentaires', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterCommentaire = () => {
    router.push('/ajout')
}

</script>

<style lang="scss" scoped>
table {
  margin-top: 20px;
}
</style>