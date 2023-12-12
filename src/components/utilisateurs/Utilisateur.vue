<template>
    <tr>
        <td>
             {{ utilisateur.nom }}
        </td>
        <td>
             {{ utilisateur.prenom }}
        </td>
        <td>
             {{ utilisateur.naissance }}
        </td>
        <td>
             {{ utilisateur.email }}
        </td>
        <td>
             {{ utilisateur.photo }}
        </td>
        <td>
             {{ utilisateur.numeroDeTelephone }}
        </td>
        <td>
             {{ utilisateur.motDePasse }}
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
    utilisateur: {
        type: Object,
        default: () => ({
            id: '',
            nom: 'test',
            prenom: 'test',
            naissance:'test',
            photo:'test',
            email: 'test',
            numeroDeTelephone: 'test',
            motDePasse: 'test'
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.utilisateur.id)
    emit('supprimer', props.utilisateur.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.utilisateur.id}`)
}

// La fonction pour la redirection vers la page Mise à jour
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.utilisateur.id}`)
}

</script>

<style scoped></style>