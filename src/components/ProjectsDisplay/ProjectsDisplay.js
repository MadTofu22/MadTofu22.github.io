import React, {Component} from 'react';
import projects from '../../assets/data/projects.data';
import ProjectBlock from './ProjectBlock';
import ProjectModal from './ProjectModal';

class ProjectDisplay extends Component {
    
    state = {
        displayModal: false,
        modalProject: '',
    }

    // This function handles opening the project modal.
    openProjectModal = (project) => {
        this.setState({
            displayModal: true,
            modalProject: project,
        });
    }
    
    // This function handles closing the project modal.
    closeProjectModal = () => {
        this.setState({
            displayModal: false,
            modalProject: '',
        });
    }

    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader'>My Completed Projects</h1>
                <div className='projectsContainer'>
                    {projects.map((project, index) => {
                        return <ProjectBlock key={index} project={project} openProjectModal={this.openProjectModal} />
                    })}
                </div>
                {this.state.displayModal ? 
                    <ProjectModal 
                        project={this.state.modalProject} 
                        closeProjectModal={this.closeProjectModal}
                    />
                    :
                    ''
                }
            </div>
        );
    }
}

export default ProjectDisplay;