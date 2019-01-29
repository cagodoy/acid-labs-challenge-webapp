# Acid Labs Challenge - WebApp

This is a repository of a web application made in ReactJS for the acid labs challenge. It will connect with the following API [Link](https://github.com/cagodoy/acid-labs-challenge-backend)

The application has been developed with:

- **reactjs**: library to create user interfaces.
- **redux**: allows the management of states, as well as abstracts the business logic out of the component.
- **rxjs**: through the reactive programming it can handle the asyncronos processes of events, promises or callbacks.
- **redux-observable**: encapsulates the asynchronous logic allowing the reuse, maintenance and development of the requirements. It is also possible to migrate part of this logic (epics and state) to the mobile application made in native react.
- **react-router**: facilitates the implementation of sections in a webapp through custom URL routes.
- **immutable**: provides many persistent immutable data structures.
- **react-modal**: easy modals for reactjs.
- **google-map-react**: google maps in reactjs components.


Note: Make sure you have installed docker, docker-compose and its respective dependencies.

Develop Commands
========

`yarn start`: run in development mode.

`yarn build`: build to production docker.

Docker Commands
========

`docker build -t acid-frontend .`: build docker.

`docker run -it -p 8000:8000 acid-frontend`: run docker.
