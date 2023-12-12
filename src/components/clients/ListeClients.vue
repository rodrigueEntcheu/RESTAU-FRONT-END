<template>
    <div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            <th scope="col">Numéro de téléphone</th>
            <th scope="col">Adresse de Livraison</th>
            <th scope="col">Mot de passe</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Clients v-for="client in clients" :key="client.id" :client="client" @supprimer="supprimer" />
        </tbody>
      </table>
      <button class="btn btn-primary" @click="allerAJouterClient">Ajouter un client</button>
    </div>
  </template>
  

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const clients = ref([])
import useClient from '../services/serviceClient.js';
import { useRouter } from 'vue-router';
const router = useRouter()

const {getClients,supprimerClient} = useClient ()
onBeforeMount(() => {

    getClients().then(data => {
    clients.value = data

        console.log('Liste clients', data)
    })

})
import Clients from './Clients.vue';

const supprimer = (id) => {
    console.log('emits', id)
    supprimerClient(id).then((data) => {
        console.log('suppression', data)
        getClients().then(data => {
            clients.value = data

            console.log('Liste clients', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterClient = () => {
    router.push('/ajout')
}

</script>

<style lang="scss" scoped>
table {
  margin-top: 20px;
}
</style>