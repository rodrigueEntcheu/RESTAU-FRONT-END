<template>
    <tr>
        <td>
             {{ adresseDeLivraison.nomDestinaire }}
        </td>
        <td>
             {{ adresseDeLivraison.prenomDestinataire }}
        </td>
        <td>
             {{ adresseDeLivraison.adresseDestinataire }}
        </td>
        <td>
             {{ adresseDeLivraison.numeroDeTelephone }}
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
    adresseDeLivraison: {
        type: Object,
        default: () => ({
            id: '',
            nomDestinaire: 'test',
            prenomDestinataire: 'test',
            adresseDestinataire: 'test',
            numeroDeTelephone: 'test',
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.adresseDeLivraison.id)
    emit('supprimer', props.adresseDeLivraison.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.adresseDeLivraison.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.adresseDeLivraison.id}`)
}

</script>

<style scoped></style>