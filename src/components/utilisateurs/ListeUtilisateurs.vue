<template>
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Date de naissance</th>
            <th scope="col">Email</th>
            <th scope="col">Numéro de téléphone</th>
            <th scope="col">Photo </th>
            <th scope="col">Mot de passe</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Utilisateurs v-for="user in utilisateurs" :key="user.id" :utilisateur="user" @supprimer="supprimer" />
        </tbody>
      </table>
      <button class="btn btn-primary" @click="allerAJouterUtilisateur">Ajouter un utilisateur</button>
    </div>
  </template>
  

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const utilisateurs = ref([])

import useUtilisateur from '../services/serviceUtilisateur.js'
import { useRouter } from 'vue-router';
const router = useRouter()

const {getUtilisateur,supprimerUtilisateur} = useUtilisateur ()
onBeforeMount(() => {

    getUtilisateur().then(data => {
    utilisateurs.value = data

        console.log('Liste utilisateur', data)
    })

})
import Utilisateur from './Utilisateur.vue';


const supprimer = (id) => {
    console.log('emits', id)
    supprimerUtilisateur(id).then((data) => {
        console.log('suppression', data)
        getUtilisateur().then(data => {
            utilisateurs.value = data

            console.log('Liste utilisateurs', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterUtilisateur = () => {
    router.push('/ajout')
}

</script>

<style lang="scss" scoped>
table {
  margin-top: 20px;
}
</style>