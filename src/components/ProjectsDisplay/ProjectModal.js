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
                    <div className='modalHeader'>
                        <h1 className='modalHeaderText'>{this.state.projectData.name}</h1>
                    </div>
                    <div className='modalContentSection'>
                        {this.state.projectData.video ? 
                            <div className='projectModalVideoWrapper projects'>
                                <iframe 
                                    // width="1280" 
                                    // height="720" 
                                    className='projectModalVideo projects'
                                    src={this.state.projectData.video} 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen >
                                </iframe>
                            </div>
                            :
                            <img 
                                className='projectModalImage projects'
                                src={`assets/images/projects/${this.state.projectData.image}`}
                                alt={`Example image for ${this.state.projectData.name}`}
                            />
                        }
                        <div className='modalContentText'>
                            <h3>Description:</h3>
                            <p className='projectModalDescription'>{this.state.projectData.description}</p>
                            <h3>Technologies Used:</h3>
                            <ul className='projectModalList'>
                                {this.state.projectData.technologies.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                            <div className='modalLinkButtons'>
                                <button 
                                    onClick={
                                        () => window.open(this.state.projectData.repo, '_blank')
                                    }
                                    >View on Github
                                </button>
                                {this.state.projectData.link === '' ? '' 
                                : 
                                <button
                                    onClick={
                                        () => window.open(this.state.projectData.link, '_blank')
                                    }
                                    >Visit the App
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProjectDisplay;
