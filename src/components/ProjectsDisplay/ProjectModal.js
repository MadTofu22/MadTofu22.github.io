import React, {Component} from 'react';
import projects from '../../assets/data/projects.data'
import ProjectBlock from './ProjectBlock';

class ProjectDisplay extends Component {
    
    render () {
        return (
            <div className='modal projectDisplayModal'>
                <h1 className='modalHeader'>My Completed Projects</h1>
                <div className='projectsContainer'>
                    {projects.map((project, index) => {
                        return <ProjectBlock key={index} project={project} />
                    })}
                </div>
            </div>
        );
    }
}

export default ProjectDisplay;