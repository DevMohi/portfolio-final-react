import React from 'react';
import carhub from '../assets/projects/carHub.PNG';
import stockz from '../assets/projects/project2.PNG'
import gainZ from '../assets/projects/project1.PNG'
import axn from '../assets/projects/axn.PNG'
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='work' className='w-full'>
            <div className='max-w-[1248px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-4xl'>
                    Projects
                </p>
                <h2 className='py-4 text-red-400 text-4xl mb-2'>What Ive Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Car Parts '
                        backgroundImg={carhub}
                        projectUrl='carhub'
                    />
                    <ProjectItem
                        title='gainZ'
                        backgroundImg={stockz}
                        projectUrl='gainz'
                    />
                    <ProjectItem
                        title='stockZ'
                        backgroundImg={gainZ}
                        projectUrl='stockz'
                    />
                    <ProjectItem
                        title='Axn Gaming'
                        backgroundImg={axn}
                        projectUrl='axn'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;