<template>
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nom du destinataire</th>
            <th scope="col">Prenom de destinataire</th>
            <th scope="col">Numéro de téléphone</th>
            <th scope="col">Adresse du destinataire</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Clients v-for="adresseDeLivraison in adressesDeLivraison" :key="adresseDeLivraison.id" :adresseDeLivraison="adresseDeLivraison" @supprimer="supprimer" />
        </tbody>
      </table>
      <button class="btn btn-primary" @click="allerAJouterAdresseDeLivraison">Ajouter une adresse de Livraison</button>
    </div>
  </template>
  

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const adressesDeLivraison = ref([])
import useAdresseDeLivraison from '../services/serviceAdresseDeLivraison.js'
import { useRouter } from 'vue-router';
const router = useRouter()

const {getAdressesDeLivraison,supprimerAdressesDeLivraison} = useAdresseDeLivraison ()
onBeforeMount(() => {

    getAdressesDeLivraison().then(data => {
        adressesDeLivraison.value = data

        console.log('Liste adresses de livraison', data)
    })

})
import adresseDeLivraison from './AdresseDeLivraison.vue';

const supprimer = (id) => {
    console.log('emits', id)
    supprimerAdressesDeLivraison(id).then((data) => {
        console.log('suppression', data)
        getAdressesDeLivraison().then(data => {
            adressesDeLivraison.value = data

            console.log('Liste adresses de livraison', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const ajouterAdressesDeLivraison = () => {
    router.push('/ajout')
}

</script>

<style lang="scss" scoped>
table {
  margin-top: 20px;
}
</style>