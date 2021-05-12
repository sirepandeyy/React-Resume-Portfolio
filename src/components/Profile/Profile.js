import {Button, Grid, Icon,Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './Profile.css'
import '../../App.css'
import CustomTimeline,{CustomTimelineSeparator} from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonOutLinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem=({title,text,link})=>(
    
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">
        {link?(
        <Typography className="timelineItem_text">
        <span>{title}:</span>{" "}
        <a href={link} target="_blank">
        {text}
        </a>
        </Typography>
        ):(
            <Typography className="timelineItem_text">
                <span>{title}:</span>{text}
            </Typography>
        )}                                                        
        </TimelineContent>
    </TimelineItem>
    
)

const Profile=(props)=>{
    
    const path =   window.location.pathname

        return (
            <div className="profile container_shadow">
                <div className="profile_name">
                    <Typography className="name">{resumeData.name}</Typography>
                    <Typography className="title">{resumeData.title}</Typography>
                </div>

            <figure className="profile_image">
                <img src='../../public/images/bond4.jpg' alt=""/>
            </figure>

            <div className="profile_info">
                <CustomTimeline icon={<PersonOutLinedIcon/>}>
                    <CustomTimelineItem title="Name" text={resumeData.name}/>
                    <CustomTimelineItem title="Title" text={resumeData.title}/>
                    <CustomTimelineItem title="Email" text={resumeData.email}/>

                    {Object.keys(resumeData.socials).map((key)=>(
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}></CustomTimelineItem>
                    ))}
                </CustomTimeline>
                <br/>
                <Grid xs={12} className="button_container">
                        <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
                </Grid>
            </div>

            </div>
        );
}

export default Profile;