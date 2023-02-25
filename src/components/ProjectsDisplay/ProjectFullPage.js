import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import projects from '../../assets/data/projects.data';
import './Pojects.css'

class ProjectFullPage extends Component {
    
    state = {
        project: {
            
        },
    }
    
    // This function handles getting the project data based on the current url path
    getProjectData = (path) => {
        for (let project in projects) {
            if (project.path === currentPath) {
                this.setState({
                    project,
                });
            }
        }
    }

    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader projects'></h1>
            </div>
        );
    }
}

export default withRouter(ProjectFullPage);