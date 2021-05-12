import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import  CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography' 
import Grow from '@material-ui/core/Grow'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import React, {useState,Component} from 'react';
import './Portfolio.css'
import resumeData from '../../utils/resumeData'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Gallery from 'react-image-gallery'
import ImageGallery from '../../components/imageGallery/ImageG'


const Portfolio=()=>{

    const [tabValue,SetTabValue] = useState("All");
    const [projectDialog , setProjectDialog] = useState(false)

        return (
           <Grid container spacing={1} className="section pb_45 pt_45">
                {/*title*/}
                <Grid item className="section_title mb_20">
                    <span></span>
                    <h6 className="section_title_text">Portfolio</h6>
                </Grid>
                {/*tab*/}

                <Grid item xs={12} className="mb-5">
                    <Tabs value={tabValue} className="custom_tabs" onChange={(event,newValue) => SetTabValue(newValue)}>

                        <Tab label="All" value="All" className={ tabValue == "All"? "customTabs_item active" : "customTabs_item" } />
                   
                   {[...new Set(resumeData.projects.map((item) => item.tag ))].map((tag) =>(
                    <Tab label={tag} value={tag} className={tabValue == tag? "customTabs_item active" : "customTabs_item"} />
                    
                   ))} 
                   
                   
                    </Tabs>


                </Grid>
                    
                {/*projects*/}
                    <Grid item xs={12}>
                        <Grid container spacing={7}>
                            {resumeData.projects.map((projects) =>(
                                <>
                                { tabValue == projects.tag || tabValue == 'All' ?(
                                <Grid item xs={12} sm={6}  md={4} lg={4}>
                                    <Grow in timeout={1000}>
                                    <Card className="customCard" onClick={() => setProjectDialog(projects)}>
                                        <CardActionArea>
                                            
                                        <CardMedia className="customCard_image"  title={projects.title} images={projects.images}><img src={projects.images} alt=""/></CardMedia>
                                                
                            
                                                
                                                <CardContent>
                                                    <Typography variant="body2" className="customCard_title">{projects.title}</Typography>
                                                    <Typography variant="body2" className="customCard_caption">{projects.caption}</Typography>
                                                </CardContent>
                            
                                        </CardActionArea>
                                    </Card>
                                    </Grow>
                                </Grid>
                                ):null}
                                </>
                            ))}
                        </Grid>
                    </Grid>
           
                    <Dialog open={Boolean(projectDialog)} onClose={()=> setProjectDialog(false)} className="projectDialog" fullWidth maxWidth="md">
        <DialogTitle onClose={()=> setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
        <img src={projectDialog.images} className="projectDialog_image" ></img>
        <DialogContent     style={{height:"50vh"}}>
        {projectDialog.images && ( <ImageGallery  images={projectDialog.images} />)}
    
          <Typography className="projectDialog_description">{projectDialog.description}</Typography>  
        </DialogContent>
            <DialogActions className="projectDialog_actions">
                {projectDialog?.links?.map((link) =>(
                    <a className="projectDialog_icon" href={link.link} target="_blank">{link.icon}</a>
                ))}
            </DialogActions>
        
    </Dialog>

           </Grid>

        );
}

export default Portfolio