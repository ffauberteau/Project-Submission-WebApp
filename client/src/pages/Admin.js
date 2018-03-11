import React, { Component } from 'react';
import Navs from '../components/nav/Navs.js';
import Cards from '../components/Cards';
import { Row, Col } from 'react-bootstrap';
import {Route} from 'react-router';
import {Redirect} from 'react-router';
import Home from './Home';
import { CardDeck, Container } from 'reactstrap';
class Admin extends Component {

    constructor(props){
        super(props)
        var redirect = new Map();
        redirect.set("Validation",false);
        redirect.set("EditHome",false);
        redirect.set("Export",false);
        this.state = {
            myRedirects : redirect
        }
        this.handleRedirection.bind(this)
    }
    

    handleRedirection = (value) => {
        console.log(value);
        this.setState(this.state.myRedirects.set(value,true))
    }

    render() {
        console.log(this.props.match.path)
        const redirects = this.state.myRedirects
        for(var [key,value] of redirects){
            console.log(redirects.get(key,value))
            if(value){
                return (
                    <div>    
                    <Redirect to = {this.props.match.path + "/"+key}/>
                    </div>
                )
            }
        }
        return (
            <div>
                <Navs />
                <Container>
                    <CardDeck>
                        <Cards
                            titre = "Valider un projet"
                            image='./project_validation.png'
                            dimension='200x200'
                            value = 'Validation' 
                            description = "Voir la liste des projets en attente de validation."
                            addKey = {this.handleRedirection}
                            link = {this.props.match.path + "/Validation"}
                            />
                        <Cards
                            titre = "Modifier la home page"
                            image='./Update_home.png'
                            dimension='200x200'
                            value = 'EditHome' 
                            description = "Modifier la page d'accueil du site."
                            addKey = {this.handleRedirection}
                            link = {this.props.match.path + "/EditHome"}
                            />
                        <Cards
                            titre = "Exporter les projets"
                            image='./Project_exportation.png'
                            dimension='200x200'
                            value = 'Export' 
                            description = "Exportez tous les projets validé au format pdf."
                            addKey = {this.handleRedirection}
                            link = {this.props.match.path + "/Export"}
                            />
                    </CardDeck>
                </Container>
                <Route path = {this.props.match.path + "/test"} />
            </div>
        );
    }
}

export default Admin;