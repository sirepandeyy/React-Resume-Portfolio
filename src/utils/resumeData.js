import React from 'react'
import Facebook  from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Github  from "@material-ui/icons/GitHub";
import LinkdIn  from "@material-ui/icons/LinkedIn";
import WebOutlined from '@material-ui/icons/WebOutlined'
import AssignmentOutlined from '@material-ui/icons/AssessmentOutlined'
import Youtube from '@material-ui/icons/YouTube'
import Language from '@material-ui/icons/Language';


export default{
    name:'James Bond',
    title:'007',

    birthday:'01-01-1800',
    email:'commander_bond@james',
    address:'MI6_London',
    phone:'0000000',

    socials:{
        Facebook:{
            link:'https:facebook.com',
            text:'license to kill',
            icon:<Facebook/>
        },
        Twitter:{
            link:'https:facebook.com',
            text:'license to twiiter',
            icon:<Twitter/>
        },
        Github:{
            link:'https:facebook.com',
            text:'license to github',
            icon:<Github/>
        },
        LinkedIn:{
            link:'https:facebook.com',
            text:'license to linkdIn',
            icon:<LinkdIn/>
        }
    },
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum qui voluptas quo eius nihil sunt. Placeat atque itaque eveniet optio numquam impedit quisquam, dolorum rerum molestiae! Omnis facere illum quam, sint corrupti, sed unde illo eaque veritatis, incidunt nihil nobis saepe voluptatum sunt voluptas iusto voluptates. Adipisci est nesciunt, perspiciatis autem maxime alias, inventore saepe maiores praesentium vel corrupti, corporis voluptate reiciendis commodi aspernatur. Voluptatem enim hic quisquam odit possimus rem, beatae est, totam expedita fugiat cum quaerat, sapiente eligendi magnam eum modi mollitia exercitationem quas suscipit unde. Quod odit voluptate vitae, ratione porro rerum cum officia quidem impedit.",
    experiences: [
        {
          title: "Work 1",
          description:
            "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
          date: "2010 - Present",
        },
        {
          title: "Work 2",
          description:
            "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
          date: "2008 - 2010",
        },
        {
          title: "Work 3",
          description:
            "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
          date: "2005 - 2008",
        },

        {
        title: "Work 1",
          description:
            "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
          date: "2010 - Present",
        },
        {
          title: "Work 2",
          description:
            "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
          date: "2008 - 2010",
        },
        {
          title: "Work 3",
          description:
            "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
          date: "2005 - 2008",
        },


      ],
    
      education: [
        {
          title: "Abc University of Los Angeles",
          description:
            "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
          date: "2004 - 2009",
        },
        {
          title: "Education 2",
          description:
            "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
          date: "2003 - 2004",
        },
        {
          title: "Education 3",
          description:
            "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
          date: "2000 - 2003",
        },
      ],
    
      services: [
        {
          title: "Web Development",
          description: "I have been working on web design for 10 years.",
          icon: <WebOutlined />,
        },
        {
          title: "Branding Identity",
          description:
            "We will make you a brand that is catchy and leaves a trace.",
          icon: <AssignmentOutlined />,
        },
        {
          title: "Web Development",
          description: "I have been working on web design for 10 years.",
          icon: <WebOutlined />,
        },
      ],
    
      skills: [
        {
          title: "FRONT-END",
          description: [
            "ReactJS",
            "JavaScript",
            "TypeScript",
            "Bootstrap",
            "Material UI",
          ],
        },
        {
          title: "BACK-END",
          description: ["NodeJS", "Java", "Python", "Solidity"],
        },
        {
          title: "DATABASES",
          description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
        },
        {
          title: "SOURCE CONTROL",
          description: ["Git", "GitHub", "SCRUM/Agile"],
        },
      ],
      projects:[
          {
              tag:'React',
              images:["https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1604153138516-28db213cf26b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cGN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1599922796091-c63c77b4fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxwY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
              title:'Project 1',
              caption:'A short description',
              description:'This is project description. Please fill it in.',
              links:[
                  {
                      link:'www.google.com',icon:<Youtube />
                  },
                  {
                    link:'www.google.com',icon:<Github />
                }, {
                    link:'www.google.com',icon:<Language />
                }
              ]
          },
          {
            tag:'Python',
            images:["https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1604153138516-28db213cf26b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cGN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1599922796091-c63c77b4fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxwY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
            title:'Project 2',
            caption:'A short description',
            description:'This is project description. Please fill it in.',
            links:[
                {
                    link:'www.google.com',icon:<Youtube />
                },
                {
                  link:'www.google.com',icon:<Github />
              }, {
                  link:'www.google.com',icon:<Language />
              }
            ]
        },
        {
            tag:'Kotlin',
            images:["https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1604153138516-28db213cf26b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cGN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1599922796091-c63c77b4fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxwY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
            title:'Project 3',
            caption:'A short description',
            description:'This is project description. Please fill it in.',
            links:[
                {
                    link:'www.google.com',icon:<Youtube />
                },
                {
                  link:'www.google.com',icon:<Github />
              }, {
                  link:'www.google.com',icon:<Language />
              }
            ]
        },
        {
            tag:'React',
            images:["https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1604153138516-28db213cf26b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cGN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1599922796091-c63c77b4fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxwY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
            title:'Project 4',
            caption:'A short description',
            description:'This is project description. Please fill it in.',
            links:[
                {
                    link:'www.google.com',icon:<Youtube />
                },
                {
                  link:'www.google.com',icon:<Github />
              }, {
                  link:'www.google.com',icon:<Language />
              }
            ]
        },
        {
            tag:'React',
            images:["https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1604153138516-28db213cf26b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cGN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1599922796091-c63c77b4fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxwY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
            title:'Project 5',
            caption:'A short description',
            description:'This is project description. Please fill it in.',
            links:[
                {
                    link:'www.google.com',icon:<Youtube />
                },
                {
                  link:'www.google.com',icon:<Github />
              }, {
                  link:'www.google.com',icon:<Language />
              }
            ]
        },
      ]
    };
