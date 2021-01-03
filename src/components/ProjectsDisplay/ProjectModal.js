import React, {Component} from 'react';
import projects from '../../assets/data/projects.data'
import ProjectBlock from './ProjectBlock';

class ProjectDisplay extends Component {
    
    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader'>My Completed Projects</h1>
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