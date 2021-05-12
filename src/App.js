import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Container,Grid } from '@material-ui/core'
import './App.css'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import resumeData from './utils/resumeData'

function App(){
return(

    <Container className="top_60">
        <Grid container  spacing={7}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
                <Profile />
            </Grid>
            <Grid item xs>
            <Router>
                <Header />
                
                <div className="main-content container_shadow">
                <Switch>

                <Route exact path='/' component={Resume} />
                
                <Route exact path='/portfolio' component={Portfolio} />
                
                </Switch>

                </div>
                
                </Router>
                
                <Footer />
            </Grid>
        </Grid>
    </Container>
    

)}

export default App;
