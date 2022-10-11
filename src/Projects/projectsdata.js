import playlist from '../css/images/playlist_creator.png';
import carcar from '../css/images/carcar.png';
import conference from '../css/images/conference.png';
import urgent_care from '../css/images/urgent_care.png';

const data = [
    {
        title: 'Urgent Care',
        link: 'https://gitlab.com/coding-moguls/urgent-care',
        liveprojectlink: 'https://coding-moguls.gitlab.io/urgent-care/',
        image: urgent_care,
        date: '2022-08-18',
        bullet1: 'Led design and development of Django/React application with microserivce, authentication, and user connection functionalities.',
        bullet2: 'Manipulated data output from REST APIs to build custom interactive graphs with Chart.js.',
        bullet3: 'Led and executed website deployment with gitlab CI/CD pipeline.',
    },
    {
        title: 'Car Sales and Shop Repair',
        link: 'https://gitlab.com/emily.ostrove/car-sales-and-services',
        image: carcar,
        date: '2022-07-24',
        bullet1: 'A React app connecting 3 microservices (Inventory, Sales, Services) via polling to enable car salesmen and car mechanics to record and manage their respective car sales and repairs.',
        bullet2: 'Merges car salesmen and car mechanic data in one database, enabling a holistic view of car sales and repair history.',
        bullet3: 'Technologies used include React, Docker, polling, Insomnia, JavaScript, and Python.',
    },
    {
        title: 'ConferenceGO!',
        link: 'https://gitlab.com/emily.ostrove/conference-go',
        image: conference,
        date: '2022-06-05',
        bullet1: 'Leverages Pexels API to fetch city images by pulling city name from conference instance.',
        bullet2: 'Utilizes Open Weather API to pull real time weather data for conference locations.',
        bullet3: 'Refactored app from Monolith to microservice architecture using pub/sub and RabbitMQ.',
    },
    {
        title: 'Playlist Creator',
        link: 'https://gitlab.com/emily.ostrove/playlist-project',
        liveprojectlink: 'https://ems-playlist-project.herokuapp.com/playlists/',
        image: playlist,
        date: '2022-05-16',
        bullet1: 'A Django app built with Python that enables signed on users to add songs, artists, and create playlists.',
        bullet2: 'Enabled dynamic Spotify web player in song detail page through Spotify API integration.',
        bullet3: 'Leverages Spotify API to fetch song images by pulling album art from Spotify library.',
    }
]

export default data;