import React from 'react';
import Card from '../Card';

const modules = [{
    title: 'TalkIO',
    description: "TalkIO is your own messaging platform that you can use to talk to your friends in a private environment!",
    depLink: "https://whispering-thicket-23231.herokuapp.com/",
    repoLink: "https://github.com/AliBailoun/talk-io",
    image: "https://techcrunch.com/wp-content/uploads/2018/12/getty-messaging.jpg",
    id: 1
},
{
    title: 'Epic Dueler',
    description: "Introducing Epic Dueler, the place where epic luck meets legendary duels! A game developed by the gifted and bored minds of the Columbia Coding Bootcamp cohort.",
    depLink: "https://blooming-gorge-61299.herokuapp.com/",
    repoLink: "https://github.com/AliBailoun/epic_dueler-Ali",
    image: "https://www.dicegeeks.com/wp-content/uploads/2014/07/cropped-file0002998516961.jpg",
    id: 2
},
{
    title: 'Weather Application',
    description: "With this website you will always be ready for the weather (especially New York weather where it's winter at night and summer during daytime), as it displays various information such as the current and upcoming weather (the next 5 days), humidity, wind speed and the U.V index!!",
    depLink: "https://alibailoun.github.io/Weather-Application/",
    repoLink: "https://github.com/AliBailoun/Weather-Application",
    image: "https://nordicapis.com/wp-content/uploads/How-to-Build-an-API-Driven-Weather-App.png",
    id: 3
},
{
    title: 'Note Taker',
    description: "This is a professional note-taking application that uses Express.js to retreive data from a JSON file and display it in our homepage, also allowing you to add new files and notes so you help relax your brain by relying lesson it to remember things!",
    depLink: "https://youtu.be/-2nnRV1lFNQ",
    repoLink: "https://github.com/AliBailoun/Note-Taker",
    image: "https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png",
    id: 4
},
{
    title: 'E-Commerce Backend',
    description: "Hello there... (General Kenobi?) and welcome to my Object Relational Mapping E-Commerce Back-end project. This whole thing was made in order to streamline the process of working with information data and sorting that data out in a functional manner that allows the website to compete with other E-Commerce websites.",
    depLink: "https://youtu.be/-u8mdBk-_uU",
    repoLink: "https://github.com/AliBailoun/E-Commerce-Back-End",
    image: "https://www.internetx.com/fileadmin/_processed_/0/c/csm_E-Commerce_dcc2719819.png",
    id: 5
},
{
    title: 'Employee Tracker',
    description: "Welcome to a professional employee tracking application that uses inquirer.js to interact with a use via the command line, MySQL2 in order to retrieve and recieve information from the database and console.table to print MySQL rows into the console.",
    depLink: "https://youtu.be/YhDkbBGGyJU",
    repoLink: "https://github.com/AliBailoun/Employee-Tracker",
    image: "https://images.techhive.com/images/article/2015/10/piazza_diversity_hiring-100618555-large.jpg?auto=webp&quality=85,70",
    id: 6
}]


export default function Display() {
    return (
        <div>
            <div >
                <h1 className='d-flex justify-content-center' style={{ alignitems: 'center' }}>Projects</h1>
                <Card className='d-flex justify-content-center' modules={modules} />
            </div>
        </div>
    )
}