# Task Flow

```
IMPORTANT: This system is on early stages of development. For now, it's intended to be 
a proof of concept for React and Spring Boot, showing how these technologies work together.
```

## Introduction
Task Flow is a system for task management. The task is the main focus in the workflow, and a collaborative approach is taken in order to address it successfully.

Many times, when a problem arises, its ownership is questioned by members of different teams. Very often much energy is spent on that discussion instead of cooperating with the resolution.

In Task Flow, the task is the center of everything, and many people can cooperate to get it done. Many members can be responsible for one task, and once a team member is involved, the task never leaves his hands until its completion. Communication is also greatly improved with this tool.

## Technology Stack
In terms of architecture, Task Flow was designed to be a stateless **Single Page Application** (SPA).

The front-end section is developed using **JavaScript** and React. The back-end is **Java** based, making use of the Spring platform, exposing **RESTFull** services.

The complete stack includes: **React**, **Spring**, **Spring Boot**, **Hibernate**.

Other componets: **Semantic UI React** (UI compnent library), **JWT** (JSON Web Tokens for security), **Fetch** (REST calls for React).

## Test Instructions

In order to test the system simply download the repository, navigate to the */download* directory and execute:
```
$ java -jar taskflow-application.jar
```

Open a web browser and navigate to:
```
http://localhost:8080
```

Use this user and password:
```
User: john.cena  Password: 1234
```

## Installation Instructions (for development)

Install the necessary npm packages:
```
$ npm install semantic-ui-react --save
$ npm install semantic-ui --save
$ npm install whatwg-fetch --save
```

