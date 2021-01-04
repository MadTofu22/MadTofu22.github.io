import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './Projects.css'

class ProjectBlock extends Component {


    // This handles displaying a modal for a specific project
    render () {
        return (
            <div 
                className='projectBlockContainer projects' 
                onClick={() => this.props.openProjectModal(this.props.project)}
            >
                <img 
                    className='projectBlockImage projects'
                    src={`assets/images/projects/${this.props.project.image}`}
                    alt={`Example image for ${this.props.project.name}`}
                />
                <div className='projectBlockOverlay projects'>
                    <h2 className='projectBlockLabel projects'>{this.props.project.name}</h2>
                    <div className='projectBlockSynopsis projects' >
                        {this.props.project.synopsis}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectBlock);