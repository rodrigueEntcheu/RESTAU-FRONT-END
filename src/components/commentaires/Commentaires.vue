<template>
    <tr>
        <td>
             {{ commentaire.texteDuCommentaire }}
        </td>
        <td>
             {{ commentaire.note }}
        </td>
        <td>
             {{ commentaire.DateCommentaire }}
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

//Importer le module qui permet la redirectiontion vers une autre page
import { useRouter } from 'vue-router';
const router=useRouter()
const props = defineProps({
    commentaire: {
        type: Object,
        default: () => ({
            id: '',
            texteDuCommentaire: 'test',
            note: 'test',
            DateCommentaire: 'test',
            
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.commentaire.id)
    emit('supprimer', props.commentaire.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.commentaire.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.commentaire.id}`)
}

</script>

<style scoped></style>