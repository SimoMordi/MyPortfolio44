import './index.css'
import { Button } from '@mui/material';



const Project = ({project}) => {
    return ( 
        <div id="project">
            <img src={project.img} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div id="buttons">
                <a href={project.github} target='_blank'> <Button variant='contained'> Code</Button></a>
                <a href={project.site} target='_blank'> <Button variant='contained' > Site </Button></a>
            </div>
        </div>
     );
}
 
export default Project;