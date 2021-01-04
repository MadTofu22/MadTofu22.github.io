import React, {Component} from 'react';
import projects from '../../assets/data/projects.data'
import ProjectBlock from './ProjectBlock';

class ProjectDisplay extends Component {
    
    state = {
        projectData: this.props.project,
    }

    render () {
        return (
            <div className='modalContainer'>
                <div className='modal projectDisplayModal'>
                    <button 
                        className='projectModalButton closeButton' 
                        onClick={this.props.closeProjectModal}
                        >Close
                    </button>
                        <h1 className='modalHeader'>{this.state.projectData.name}</h1>
                        <img 
                        className='projectModalImage projects'
                        src={`assets/images/projects/${this.state.projectData.image}`}
                        alt={`Example image for ${this.state.projectData.name}`}
                    />
                    <h3>Description:</h3> 
                    <p className='projectModalDescription'>{this.state.projectData.description}</p>
                    <h3>Technologies Used:</h3>
                    <ul className='projectModalList'>
                        {this.state.projectData.technologies.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                    <button 
                        onClick={
                            () => window.open(this.state.projectData.repo, '_blank')
                        }
                        >View on Github
                    </button>
                    <button
                        onClick={
                            () => window.open(this.state.projectData.link, '_blank')
                        }
                        >Visit the App
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectDisplay;