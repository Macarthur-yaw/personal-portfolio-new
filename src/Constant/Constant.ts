import hubtelproject from '../assets/hubtellll.jpeg';
import hotelproject from '../assets/hotelweb.jpeg'
import taskproject from '../assets/taskify.jpeg'
// import {} from '../'
type tools={
    tool1:string,
    tool2?:string,
    tool3?:string,
    tool4?:string
}
type Experience={
id:number;
dateRange:string,
title:string,
description:string,
tools:tools[],

}
type projects={
    id:number,
    title:string,
    description:string,
tools:tools[],
imgUrl:string,
link:string
}

export const Experience:Experience[]=[{
id:1,
dateRange:"November 2023-January 2024",
title:"Frontend Engineer intern-Maltiti",
description:"Build and maintain components for the back office of Maltiti to handle the management of products",
tools:[
    {
         tool1:"Javascript",
         tool2:"React",
         tool3:"Next js",
         tool4:"Tailwind css"
    }
]
},{
    id:2,
    dateRange:"March 2024-Present",
    title:"Frontend Engineer-Ideation Axis ",
    description:"Build and maintain critical components used to construct Ideation Axis frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility",
    tools:[
        {
            tool1:"Javascript",
   tool2:"React",
   tool3:"Tailwind"         
        }
    ]

}

]

export const projects:projects[]=[{
    id:1,
    title:"Hubtel clone",
    description:"Cloned the frontend of Hubtel website and implemented all the functionalities to it",
    tools:[
        {tool1:"React js",
    tool2:"Tailwind css"
    }
    ],
    imgUrl:hubtelproject,
    link:"hubtel-clone.vercel.app"

},{
    id:2,
    title:"Task Management App",
    description:"Built a task management app that allows users to create,update and delete tasks. This also helps users to organize tasks and projects by setting deadlines.",
    tools:[
        {
            tool1:"Mongo Db",
            tool2:"Express",
            tool3:"React"
            ,tool4:"Node "
        }
    ],
    imgUrl:taskproject,
    link:"https://task-manager-app-omega.vercel.app/"
},{
    id:3,
    title:"Hotel web application",
    description:"Built a front end hotel booking web application for a client that allows a  user to book hotel seamlessly."
    ,tools:[
        {
            tool1:"React ",
            tool2:"Tailwind "
        }
    ],
    imgUrl:hotelproject,
    link:"https://hotelwebapp.vercel.app/"
}]