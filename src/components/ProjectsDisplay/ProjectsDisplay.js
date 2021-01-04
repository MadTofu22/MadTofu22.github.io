import React, {Component} from 'react';
import projects from '../../assets/data/projects.data'
import ProjectBlock from './ProjectBlock';
import ProjectModal from './ProjectModal';

class ProjectDisplay extends Component {
    
    state = {
        displayModal: false,
        modalProject: '',
    }

    // This function handles opening the project modal.

    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader'>My Completed Projects</h1>
                <div className='projectsContainer'>
                    {projects.map((project, index) => {
                        return <ProjectBlock key={index} project={project} />
                    })}
                </div>
                <div className='modalContainer'>
                    {this.state.displayModal ? 
                        <ProjectModal project={this.state.modalProject} />
                        :
                        ''
                    }
                </div>
            </div>
        );
    }
}

export default ProjectDisplay;