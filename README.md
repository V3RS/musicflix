<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/V3RS/musicflix">
    <img src="https://musicflix.s3.us-east-2.amazonaws.com/logo.png" alt="Logo" width="180" height="80" style="background-color:white">
  </a>

  <h3 align="center">Musicflix</h3>

  <p align="center">
    Musicflix is a unique take on Netfflix for avid music video lover. This application includes an intutive User Interface and an easily accessible backend to query for specfic videos that the user wants to watch! You can browse Music Videos via search by title, artist, or genre. Users can leave a comment on videos and also save their favorites to their 'list'.
    <br />
    <a href="https://github.com/V3RS/musicflix/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://musicflix-app.herokuapp.com/">View Site</a>
    ·
    <a href="https://github.com/V3RS/musicflix/issues">Report Bug</a>
    ·
    <a href="https://github.com/V3RS/musicflix/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[Click here to view Musicflix live on the web!](https://musicflix-app.herokuapp.com/)
<br>
</br>
<img src="https://musicflix.s3.us-east-2.amazonaws.com/site-images/homepage-ss.png" alt="homepage ss">

## Overall Structure

### Back End
The app was built using Flask and SQLAlchemy on the back end with a PostgreSQL database. The backend structure is RESTful with AJAX requests that are fullfilled with JSON Objects. Model associations are used to minimize database queries to the backend, assuring speed and reliability.

### Front End
The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Built With

* [JavaScript](https://www.javascript.com/)
* [Python](https://www.python.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Flask](https://flask-doc.readthedocs.io/en/latest/)
* [Node.js](https://nodejs.org/en/)
* [HTML](https://html.com/)
* [CSS](http://www.css3.info/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with Instrument Match.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/V3RS/musicflix
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add a '.env' with your environment variables to the root of your local directory

4. Create a postgreSQL user
    ```sh
    CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB;
    ```
5. Create your database
    ```sh
    CREATE DATABASE <<db name>> WITH OWNER <<your username>>;
    ```
6. Upgrade and seed your database
    ```sh
    flask db upgrade
    flask seed all
    ```

<!-- USAGE EXAMPLES -->
## Usage
### An easy-to-use login with a pre-configured Demo User.
![demo-login gif](imgs/demo-login.gif)
### Search for Music Videos by title, artist, or genre.
![search gif](imgs/search.gif)
### Leave a rating and a comment on a Music Video.
![rating gif](imgs/reviews.gif)
<!-- ### Add a Music Video to your list
![My List](site-images/my-list.gif) -->
<!-- ## Obstacles -->

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/V3RS/musicflix/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact & Acknowledgements


* Veer Singh - [LinkedIn](https://www.linkedin.com/in/veerkaran-singh-45b4a9190/) - [GitHub](https://github.com/V3RS)


Project Link: [https://github.com/V3RS/musicflix/](https://github.com/V3RS/musicflix/)


<!-- ACKNOWLEDGEMENTS -->
