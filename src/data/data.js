import Doctor from "../assets/projects/Doctor.png";
import Delivery from "../assets/projects/Delivery.png";
import Portfolio from "../assets/projects/Portfolio.png";

import Doctor1 from "../assets/projects/Doctor(1).png";
import Doctor2 from "../assets/projects/Doctor(2).png";
import Doctor3 from "../assets/projects/Doctor(3).png";
import Doctor4 from "../assets/projects/Doctor(4).png";
import Doctor5 from "../assets/projects/Doctor(5).png";

import Delivery2 from "../assets/projects/Delivery(2).png";
import Delivery3 from "../assets/projects/Delivery(3).png";
import Delivery4 from "../assets/projects/Delivery(4).png";
import Delivery5 from "../assets/projects/Delivery(5).png";

import Portfolio1 from "../assets/projects/potfolio(1).png";
import Portfolio2 from "../assets/projects/potfolio(2).png";
import Portfolio3 from "../assets/projects/potfolio(3).png";
import Portfolio4 from "../assets/projects/potfolio(4).png";

import menu from "../assets/projects/menu.png";
import menu1 from "../assets/projects/menu1.jpg";
import menu2 from "../assets/projects/menu2.jpg";
import menu3 from "../assets/projects/menu3.jpg";

import spice from "../assets/projects/spice.jpg";
import spice1 from "../assets/projects/spice1.jpg";
import spice2 from "../assets/projects/spice2.jpg";
import spice3 from "../assets/projects/spice3.jpg";
import spice4 from "../assets/projects/spice4.jpg";
import spice5 from "../assets/projects/spice5.jpg";
import spice6 from "../assets/projects/spice6.jpg";
import spice7 from "../assets/projects/spice7.jpg";
import spice8 from "../assets/projects/spice8.jpg";
import spice9 from "../assets/projects/spice9.jpg";

import mail from "../assets/projects/mail.png";
import mail1 from "../assets/projects/mail1.png";
import mail2 from "../assets/projects/mail2.png";
import mail3 from "../assets/projects/mail3.png";
// import mail4 from "../assets/projects/mail4.png";
export const data = [
  {
    id: 1,
    name: "Truck Delivery Optimization",
    image: Delivery,
    github: "#",
    description:
      "The project involves optimizing delivery routes for INSOFT, a company that serves 1,500 clients spread across a vast geographical area using a fleet of 25 trucks. The main challenge lies in minimizing the total distance traveled to reduce costs, improve customer service, and comply with the trucks' capacity constraints. The input data used includes an Excel file containing the GPS coordinates and order capacities of the 1,500 clients, as well as a distance matrix between clients. The entire project was developed using Python, incorporating artificial intelligence techniques and optimization algorithms such as geographic client clustering with the OPTICS algorithm, shortest path calculations with Bellman-Ford, and route optimization using the Nearest Neighbor algorithm. The project culminated in a web application built with the Flask framework.",
    type: "fullstack",
    gallery: [Delivery, Delivery2, Delivery3, Delivery4, Delivery5],
  },
  {
    id: 2,
    name: "Healthcare Website",
    image: Doctor,
    github: "#",
    description:
      "This project is an online healthcare booking platform, allowing patients to streamline the process of scheduling appointments with their chosen doctors and hospitals. Patients can browse the website to view available services, select a doctor and hospital, and submit a request for an appointment, pending confirmation from the admin. Upon approval, the admin selects a suitable date, and an email is sent to the patient containing the appointment details, including the invoice, date, location, doctor, and assigned room. The platform also includes an internal notification system to keep the admin updated on pending appointment confirmations, ensuring timely and efficient management. Built with Django, Python, and Bootstrap, this platform combines an intuitive user experience with robust functionality to improve both patient satisfaction and healthcare service management.",
    type: "fullstack",
    gallery: [Doctor, Doctor1, Doctor2, Doctor3, Doctor4, Doctor5],
  },

  {
    id: 3,
    name: "HappyShopp oficial",
    image: Portfolio,
    github: "#",
    description:
      "A portfolio website for a software engineer showcasing professional experience, projects, and a contact form for email inquiries. It includes CRUD functionality for adding new information and projects, developed using ASP.NET Core MVC and Bootstrap.",
    type: "fullstack",
    gallery: [Portfolio, Portfolio1, Portfolio2, Portfolio3, Portfolio4],
  },

  // _______________________________________________________________________________________
  // Projects added recently, not yet integrated into the main portfolio display
  // _______________________________________________________________________________________
  {
    id: 4,
    name: "Menu",
    image: menu,
    github: "https://menu1.infinityfreeapp.com/",
    description: `Menu Dynamique – Une Expérience Moderne et Intuitive Notre site web de menu dynamique, développé avec Laravel, offre une interface fluide et interactive pour afficher et gérer un large éventail de produits alimentaires et de boissons. 
      Grâce à une conception soignée et une navigation intuitive, les utilisateurs peuvent facilement parcourir les différentes catégories, filtrer les articles et consulter les détails de chaque produit. 
      🔹 Caractéristiques principales :
      ✅ Interface ergonomique et moderne : Un design attractif avec une disposition claire et responsive pour une expérience utilisateur optimale sur tous les appareils. 
      ✅ Filtrage et catégorisation : Les produits sont organisés en différentes catégories (boissons froides, salades, sucreries, fast-food, etc.) pour une recherche rapide et efficace. 
      ✅ Affichage dynamique des prix et des images : Chaque article est présenté avec son image, sa description et son prix mis à jour en temps réel. 
      ✅ Personnalisation et gestion facile : Grâce à l'intégration de Laravel, l'administrateur peut facilement ajouter, modifier ou supprimer des produits via un panneau de gestion sécurisé. 
      ✅ Performance et rapidité : Développé avec Laravel et optimisé pour offrir une expérience utilisateur fluide, même avec un grand volume de produits.`,
    type: "fullstack",
    gallery: [menu, menu1, menu2, menu3],
  },
  {
    id: 5,
    name: "QuietPlace",
    image: spice,
    github: "#", // A remplacer par le lien du projet
    description: `Présentation du Site Web Développé

Ce site web a été conçu avec une approche moderne et performante, intégrant les dernières technologies pour offrir une expérience utilisateur fluide et optimisée. 

🔹 Technologies Utilisées 
- Laravel : Un framework PHP puissant garantissant une structure sécurisée et évolutive. 
- Bootstrap & CSS : Un design responsive et esthétique, adapté à tous les écrans. 
- SQL : Une base de données robuste assurant une gestion efficace des informations. 
- HTML, JS & PHP : Un développement dynamique et interactif pour une navigation intuitive. 

🔹 Caractéristiques du Site 
- Interface utilisateur ergonomique et moderne. 
- Performance optimisée avec un chargement rapide des pages. 
- Sécurité renforcée pour protéger les données des utilisateurs. 
- Compatibilité multi-appareils (ordinateur, tablette, mobile). 

🌟 Site Web d'Hôtel et Restaurant 
Le site développé pour Quiet Place est une plateforme complète permettant aux visiteurs de réserver des chambres facilement grâce à un système fluide et intuitif. Une section dédiée au restaurant met en avant un menu raffiné avec une expérience immersive en 3D pour explorer les lieux avant même leur visite. La section témoignages clients apporte une touche d'authenticité et de confiance pour les futurs visiteurs. Une solution digitale idéale pour valoriser un établissement hôtelier et offrir une expérience unique aux clients.`,
    type: "fullstack",
    gallery: [Portfolio, Portfolio1, Portfolio2, Portfolio3, Portfolio4],
  },
  {
    id: 6,
    name: "SPICE",
    image: spice,
    github: "#", // A remplacer par le lien du projet
    description: `Présentation du site web – Spice (Développé avec Laravel)
Le site web Spice a été conçu pour offrir une expérience utilisateur fluide, moderne et entièrement responsive, tout en répondant aux besoins spécifiques d'un restaurant dynamique. Développé avec le framework Laravel, il garantit performance, sécurité et évolutivité.

🎯 Fonctionnalités clés du site Spice :
Réservation en ligne : Système de réservation simple et intuitif permettant aux clients de choisir une date, une heure et le nombre de personnes en quelques clics.

Commande en ligne : Interface complète de commande avec panier, choix des plats, options personnalisées et paiement sécurisé intégré.

Catalogue de plats : Menu digital interactif avec filtres (catégorie, végétarien, etc.), descriptions détaillées, photos et mise à jour facile depuis l'interface d'administration.

Service de traiteur : Formulaire dédié pour les demandes de prestations de restauration événementielle avec possibilité de personnaliser les services souhaités.

Espace d'administration : Tableau de bord sécurisé permettant au personnel du restaurant de gérer les réservations, les commandes, les plats, et de consulter les statistiques en temps réel.

💡 Pourquoi Laravel ?

Sécurité renforcée (gestion des utilisateurs, validations, CSRF, etc.)

Architecture MVC claire pour une maintenance simplifiée

Intégration facile avec des outils tiers (paiement en ligne, API de messagerie, etc.)

Performances optimisées pour un site rapide et réactif, même avec du trafic élevé`,
    type: "fullstack",
    gallery: [
      spice,
      spice1,
      spice2,
      spice3,
      spice4,
      spice5,
      spice6,
      spice7,
      spice8,
      spice9,
    ],
  },
  {
    id: 7,
    name: "Ophtalmologie",
    image:
      "https://oussamaassmaoui.serv00.net/storage/images/2679OrDnAMDiugZjLwIEDG3YN5EvOia8YSkNQ386.jpg",
    github: "#",
    description: `Ophtalmologie est un site web moderne et fonctionnel conçu pour un hôpital spécialisé en soins oculaires. Le site permet aux patients de prendre facilement rendez-vous avec des ophtalmologistes qualifiés grâce à une interface simple et intuitive. En plus de la prise de rendez-vous, le site propose une riche collection d'articles sur les maladies oculaires, leur prévention, leurs symptômes et leurs traitements.
      
    En tant que développeur, j'ai utilisé Laravel pour assurer une architecture solide et évolutive, combinée avec Bootstrap et CSS pour un design responsive et moderne. Le site repose sur une base de données SQL pour une gestion efficace des informations, et les fonctionnalités dynamiques sont gérées par PHP et JavaScript pour une interactivité optimale. Le résultat est un site sécurisé, rapide et facile à utiliser, offrant une expérience fluide à tous les utilisateurs.`,
    type: "fullstack",
    gallery: [
      "https://oussamaassmaoui.serv00.net/storage/images/2679OrDnAMDiugZjLwIEDG3YN5EvOia8YSkNQ386.jpg",
      Portfolio1,
      Portfolio2,
      Portfolio3,
      Portfolio4,
    ],
  },
  {
    id: 8,
    name: "BulkMailerX",
    image:
      "https://oussamaassmaoui.serv00.net/storage/images/Kk5r9Cb9Oqy6GjXqvOa7S4bZ6hes604yle2JXNxo.png",
    github: "#", // A remplacer par le lien du projet
    description: `BulkMailerX - La solution ultime pour vos communications par email en masse.
Que vous soyez à la recherche d'un emploi, que vous promouviez des programmes de formation, que vous gériez une boutique en ligne ou que vous souhaitiez atteindre des entreprises, BulkMailerX simplifie l'envoi de volumes importants d'emails de manière efficace et sécurisée.

Conçu pour répondre aux besoins des particuliers comme des entreprises, BulkMailerX optimise vos campagnes en vous offrant une plateforme intuitive et fiable. Gagnez du temps, maximisez votre portée, et engagez votre audience avec aisance. BulkMailerX transforme votre communication en un atout stratégique.`,
    type: "fullstack",
    gallery: [mail, mail1, mail2, mail3],
  },
];
