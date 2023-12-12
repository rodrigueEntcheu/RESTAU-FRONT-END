import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeClients from '../components/clients/ListeClients.vue'
import ListeUtilisateurs from '../components/utilisateurs/ListeUtilisateurs.vue'
import ListeCommentaires from '../components/commentaires/ListeCommentaires.vue'
import ListeAdressesDeLivraison from '../components/adresseDeLivraison/ListeAdressesDeLivraison.vue'

import DetailsClients from '../components/clients/DetailsClient.vue'
import DetailsUtilisateur from '../components/utilisateurs/DetailsUtilisateur.vue'
import DetailsCommentaires from '../components/commentaires/DetailsCommentaire.vue'
import DetailsAdressesDeLivraison from '../components/adresseDeLivraison/DetailsAdressesDeLivraison.vue'

import AjouterClient from '../components/clients/AjouterClient.vue'
import AjouterUtilisateur from '../components/utilisateurs/AjouterUtilisateur.vue'
import AjouterCommentaire from '../components/commentaires/AjouterCommentaire.vue' 
import AjouterAdressesDeLivraison from '../components/adresseDeLivraison/AjouterAdresseDeLivraison.vue'

import MettreAJour from '../components/clients/MettreAJour.vue'
import MettreAJourUtilisateur from '../components/utilisateurs/MettreAJourUtilisateur.vue'
import MettreAJourCommentaire from '../components/commentaires/MettreAJourCommentaires.vue'
import MettreAJourAdressesDeLivraison from '../components/adresseDeLivraison/MettreAJourAdresse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListeClients
    },
    {
      path: '/clients/id',
      name: 'details',
      component: ListeClients
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsClients
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: AjouterClient
    },
    {
      path: '/mise-a-jour/:id',
      name: 'mise-a-jour',
      component: MettreAJour
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
   // {
     // path: '/login',
     // name: 'login',
     // component: Login
    //},
   // {
     // path: '/about',
     // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    //}
  ]
})

export default router
