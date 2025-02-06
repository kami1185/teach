
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionContent from './AccordionContent';


const AccordionJS = ({item, index}) => {
    
    return (
        <>
            <Accordion style={{margin: '1px 0', background: '#31303b', color: '#dbdbdb'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color: '#dbdbdb'}}/>}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`} >
                
                    <Typography> <strong>{item.title}</strong></Typography>
                    
                </AccordionSummary>
                <AccordionDetails>
                        <AccordionContent >
                            {item.component}
                        </AccordionContent>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionJS