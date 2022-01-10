# Pivot Access User Management System
This is simple application that will users to sign up and login users, with the ability to fill a form [names, tel, email, gender, age, etc.] and an administrator being able to view the individual entries and some aggregated data on the entries [pie chart of the participants by gender, etc.].

## Access application online

Deployed On Heroku [Pivot Access User Management System](https://pivot-access-users-ui.herokuapp.com/)

Deployed On Netlify [Pivot Access User Management System](https://61dc78a5b183340b9aff083e--agitated-goodall-4fa5f6.netlify.app/login)

## Access Application locally

    ## Before Getting Started Install

- `nodejs 8.x.x`

  
### Test Data - admin:
    email:admin@gmail.com, password: admin
## How to get test the app locally
- ### Pre-requisite:
Make sure you local server is running. How to set Up your local [server](https://github.com/niomwungeri-fabrice/pa-users-api)
- ### Getting started

Note: Make sure redis is running, and you have configured it.

```sh
$ git clone https://github.com/niomwungeri-fabrice/pa-users-ui
$ cd pa-users-ui
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


- ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Functionalities
 - Create an account
 - Login
 - Update your profile
 - view administration page if you admin
 - view list of users if you admin
 - view Statics if you admin

## Built with
- [ReactJs](https://reactjs.org/) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. 
- [Ant Design](https://ant.design/) An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises.
- [Hook State](https://hookstate.js.org/) The simple but incredibly fast and flexible state management that is based on React state hook