import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
          home: { label: 'Home', },
          projects: { label: 'Projects', },
          submit: { label: 'Submit a project', },
          login: {label: 'Log in', },
          admin: {label: 'Admin', },
          linkLost: {label: 'Project link lost', },
          year: {label: 'Year',},
          partner: {label: 'Proposed by',},
          keywords: {label:'Keywords',},
          comment:{label:'Comments',},
          question:{label:'Feel free to ask your questions ',},
          questionH:{label:'Ask your question ! ',},
          button:{label:'Send ',},
          project:{ title:'List of projects',},
          major:{label:'Major',},
          filter:{label:'Filters',},
          ibo:{label:'Computer science, Big Data and IoT',},
          ne:{label:'New Energies',},
          if:{label:'Financial Engineering',},
          mnm:{label:'Computational Mechanics and Modelling',},
          partnerInfo:{label:'Partner information',},
          projectInfo:{label:'Project Information',},
          submission:{label:'Project Submission',},
          message:{label:' Thank you for your submission, your project is now waiting to be validated by the project team of the school. An email has been sent to your address mail containing a link that allows you to edit your submission if you want to. ',},
          tellus:{label:'Tell us about yourself',},
          email:{label:'Your email address *',},
          field:{label:'This field is required',},
          notvalid:{label:'email is not valid',},
          company:{label:'Your company *',},
          firstname:{label:'Your first name *',},
          lastname:{label:'Your last name *',},
          back:{label:'Back',},
          next:{label:'Next',},
          projectPres:{h2:'Please Present your project',},
          titleproj:{label:'Title of the project *',},
          year4:{label:'4th Year',},
          year5:{label:'5th Year',},
          majors:{label:'Major(s) Concerned *',},
          descriptionProj:{label:'A complete description of your project *',},
          finish:{label:'Finish',},
          delete:{label:'Delete',},
          keyword:{label:'Keywords (Press Enter on your keyboard to validate !)',},
          files:{label:'Others Files',},
          dropfiles:{label:'Drop files here or click to upload',},
          acceptedfiles:{label:'Accepted files : png , pdf , csv ...',}
        },
      },
      fr: {
        translation: {
            home: { label: 'Accueil', },
            projects: { label: 'Projets', },
            submit: { label: 'Soumettre un projet', },
            login: {label: 'Se connecter', },
            admin: {label: 'Admin', },
            linkLost: {label: 'Lien oublié', },
            year: {label: 'Année',},
            partner:{label:'Proposé par',},
            keywords:{label:'Mots-clés',},
            comment:{label:'Commentaires',},
            question:{label:'Posez votre question',},
            questionH:{label:'Posez une question ! ',},
            button:{label:'Envoyer',},
            project:{ title:'Liste des projets',},
            major:{label:'Majeure', },
            filter:{label:'Filtres',},
            ibo:{label:'Informatique, BigData et objets connectés',},
            ne:{label:'Nouvelles Energies',},
            if:{label:'Ingénierie Financière',},
            mnm:{label:'Mécanique numérique et modélisation',},
            partnerInfo:{label:'Des informations sur le partenaire',},
            projectInfo:{label:'Des informations sur le projet',},
            submission:{label:'Soumission du projet',},
            message:{label:'  Merci, votre projet est maintenant en attente de validation par l\'administration de l\'école concerné. Un email vous a été envoyé avec un lien pour modifier votre projet. ',},
            tellus:{label:'Parlez-nous de vous',},
            email:{label:'Votre adresse email * ',},
            field:{label:'Ce champ est obligatoire',},
            notvalid:{label:'Email indiqué n\'est pas valide',},
            company:{label:'Votre entreprise *',},
            firstname:{label:'Prénom *',},
            lastname:{label:'Nom *',},
            back:{label:'Précédent',},
            next:{label:'Suivant',},
            projectPres:{h2:'Présentez votre projet',},
            titleproj:{label:'Intitulé de votre projet *'},
            year4:{label:'Année 4',},
            year5:{label:'Année 5',},
            majors:{label:'Majeur(s) ciblée(s) *',},
            descriptionProj:{label:'Description complete de votre projet *',},
            finish:{label:'Terminer',},
            delete:{label:'Supprimer',},
            keyword:{label:'Mots clés (appuyez sur Entrée sur votre clavier pour valider ! )',},
            files:{label:'Autres Fichiers ',},
            dropfiles:{label:'Déposez les fichiers ici ou cliquez pour télécharger',},
            acceptedfiles:{label:'Types de fichiers acceptés : png , pdf , csv ...',}
           
        },
      },
    },
  })

export default i18next