<template>
    <tr>
        <td>
             {{ client.nom }}
        </td>
        <td>
             {{ client.prenom }}
        </td>
        <td>
             {{ client.email }}
        </td>
        <td>
             {{ client.adresseDeLivraison }}
        </td>
        <td>
             {{ client.numeroDeTelephone }}
        </td>
        <td>
             {{ client.motDePasse }}
        </td>
        <td>
            <button @click="allerADetail" class="btn btn-primary btn-sm">Details</button>
      <button @click="allerAMiseAJour" class="btn btn-success btn-sm">Editer</button>
      <button @click="gererSuppression" class="btn btn-danger btn-sm">Supprimer</button>
        </td>
    </tr>
</template>

<script setup>
import { ref, reactive } from 'vue';

//Importer le module qui permet la reidrection vers une autre page
import { useRouter } from 'vue-router';
const router=useRouter()
const props = defineProps({
    client: {
        type: Object,
        default: () => ({
            id: '',
            nom: 'test',
            prenom: 'test',
            email: 'test',
            numeroDeTelephone: 'test',
            adresseDeLivraison: 'test',
            motDePasse: 'test'
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.client.id)
    emit('supprimer', props.client.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.client.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.client.id}`)
}

</script>

<style scoped></style>