import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText, Container, CardBlock, Dropdown, DropdownToggle, DropdownItem } from 'reactstrap';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

class ProjectsListCard extends React.Component{
    constructor(){
        super();
        this.state = {projects : []};
    }

    componentDidMount() {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({ projects }))
            .catch((err) =>{console.log(err);});
    }

    render(){
        console.log(this.state.projects);
        return(
        <div>
            <Container>
                <Card className="lead">
                    <CardHeader style={{fontSize:20}} >Liste des projets</CardHeader>
                    <CardBlock>
                        <Container><ProjectFilter style={{fontSize:15}} /></Container><hr/>
                        {this.state.projects.map(project => <Container><ProjectCard key = {project.id} project = {project}/></Container>)}
                    </CardBlock>
                </Card>    
            </Container>
        </div>);
    }
}

export default ProjectsListCard;
