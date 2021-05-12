import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import resumeData from '../../utils/resumeData';
import WorkIcon from '@material-ui/icons/Work'
import School from '@material-ui/icons/School'
import TextField from '@material-ui/core/TextField'
import './Resume.css'
import '../../App.css'
import CustomButton from '../../components/Button/Button'
import CustomTimeline from '../../components/Timeline/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import { Icon } from '@material-ui/core';

const Resume=(props)=>{
        return (
            <div>
                {/*about me*/}
                < Grid container className="section pb_45">
                    <Grid item className="section_title mb_30" >
                        <span></span>
                        <h6  className="section_title_text" >About me</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" className="aboutme_text">{resumeData.about}</Typography>
                    </Grid>
                </Grid>   

                
        {/*Experiences + Education*/}
        <Grid container className="section pb_45" >
          <Grid item className="section_title top_30">
            <span></span>
            <h6 className="section_title_text">Resume</h6>
          </Grid>

            <Grid item xs={12}>
                <Grid container className="resume_timeline"> 
                    {/* exp*/}
                        <Grid item xs={12} md={6} style={{overflow:"auto",maxHeight:'500px'}}>
                            <CustomTimeline
                                title="Work experiences"
                                icon={<WorkIcon/>}>
                                {resumeData.experiences.map(experiences =>(
                                    <TimelineItem>
                                        <TimelineSeparator className="separator_padding">
                                                <TimelineDot variant="outlined" className="timeline_dot"/>
                                                <TimelineConnector/>
                                        </TimelineSeparator>
                                            <TimelineContent className="timeline_content">
                                                <Typography className="timeline_title">{experiences.title}</Typography>
                                                <Typography variant="caption" className="timeline_date">{experiences.date}</Typography>
                                                <Typography variant="body2" className="timeline_description"> {experiences.description}</Typography>
                                            </TimelineContent>

                                    </TimelineItem>
                                ))}

                            </CustomTimeline>

                        </Grid>

                    {/*edu*/}
                    <Grid item xs={12} md={6} >
                            <CustomTimeline
                                title="Education"
                                icon={<School/>}>
                                {resumeData.education.map(education =>(
                                    <TimelineItem>
                                        <TimelineSeparator className="separator_padding">
                                                <TimelineDot variant="outlined" className="timeline_dot"/>
                                                <TimelineConnector/>
                                        </TimelineSeparator>
                                            <TimelineContent className="timeline_content">
                                                <Typography className="timeline_title">{education.title}</Typography>
                                                <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                                <Typography variant="body2" className="timeline_description"> {education.description}</Typography>
                                            </TimelineContent>

                                    </TimelineItem>
                                ))}

                            </CustomTimeline>

                        </Grid>

                        </Grid>

                        </Grid>
            </Grid>
                        {/* services*/}
                        <Grid  className="section pb_45 top_60">
          <Grid item className="section_title mb_30 " style={{marginBottom:"40px"}}>
            <span></span>
            <h6 className="section_title_text ">My Services</h6>
          </Grid>

          <Grid >
          <Grid container spacing={5} justify="space-between">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography variant="h6" className="service_title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          </Grid>
        </Grid> 
                        

                        
                        {/*skills*/}
                        <Grid container className="section graybg p_50 pb_50">
          <Grid container spacing={5} justify={"space-between"}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skills">
                  <Typography variant="h6" className="skills_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((el) => (
                    <Typography variant="body2" className="skills_description">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {el}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

                {/*contact*/}
          
        <Grid container className="section p_50 pb_50" spacing={10}>
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title top_30">
                <span></span>
                <h2>Contact Form</h2>
              </Grid>

              <Grid item className="top_30">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label="E-mail" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" multiline rows={4} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text={"Submit"}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Grid container>
              <Grid item className="section_title top_30">
                <span></span>
                <h2>Contact Information</h2>
              </Grid>
              <Grid item xs={12} className="top_30">
                <Grid container>
                  <Grid item>
                    <Typography className="contactInfo_item">
                      <span>Address:</span> {resumeData.address}
                    </Typography>
                    <Typography className="contactInfo_item">
                      <span>Phone:</span> {resumeData.phone}
                    </Typography>
                    <Typography className="contactInfo_item">
                      <span>Email:</span> {resumeData.email}
                    </Typography>
                    <Grid container className="contactInfo_socialsContainer">

                      {Object.keys(resumeData.socials).map(key => (
                          <Grid item className="contactInfo_social">
                            <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
                          </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        
        
          
            </div>
        );
}

export default Resume;