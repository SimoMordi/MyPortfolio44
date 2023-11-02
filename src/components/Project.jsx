import './index.css'
import { Button } from '@mui/material';



const Project = ({project}) => {
    return ( 
        <div id="project">
               
                <a href={project.site} target='_blank'> <img src={project.img  } /></a>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div id="buttons">
                <a href={project.github} target='_blank'> <Button variant='contained'> Github</Button></a>
                <a href={project.site} target='_blank'> <Button variant='contained' > Web Page </Button></a>
            </div>
        </div>
     );
}
 
export default Project;