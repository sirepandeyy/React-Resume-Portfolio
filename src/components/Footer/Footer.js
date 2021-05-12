import { Typography } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import React, { Component } from 'react';
import resumeData from '../../utils/resumeData';
import '../Header/Header.css'
import './Footer.css'

const Footer=()=>{
   
        return (
            <div className="footer">
                <div className="footer_left">
                    <Typography className="footer_name">{resumeData.name}</Typography>
                </div>
                <div className="footer_right">
                    <Typography className="footer_copyright">
                        Developed and designed by <a href="/" target="_blank">sirepandey</a>
                        <br/>
                        Clone idea from <a href="https://tavonline.net">travonline.net</a>
                    </Typography>
                </div>
            </div>
        );

}

export default Footer