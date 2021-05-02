import cover_page from '../images/waterPoloClubImages/cover_page.JPG';
import courses from '../images/waterPoloClubImages/courses.JPG';
import events from '../images/waterPoloClubImages/events.JPG';
import login_signup from '../images/waterPoloClubImages/login_signup.JPG';
import visitor_page from '../images/waterPoloClubImages/visitor_page.JPG';
import edit_courses from '../images/waterPoloClubImages/edit_courses.JPG';
import edit_events from '../images/waterPoloClubImages/edit_events.JPG';
import mvc_example from '../images/waterPoloClubImages/mvc_example.JPG';
import router from '../images/waterPoloClubImages/router.JPG';
import logic from '../images/waterPoloClubImages/logic.JPG';
import protect from '../images/waterPoloClubImages/protect.JPG';
import token from '../images/waterPoloClubImages/token.JPG';
import protect_route from '../images/waterPoloClubImages/protect_route.JPG';
import data_model from '../images/waterPoloClubImages/data_model.JPG';
import front_end from '../images/waterPoloClubImages/front_end.JPG';
import react_route from '../images/waterPoloClubImages/react_route.JPG';
import react_user_data from '../images/waterPoloClubImages/react_user_data.JPG';

export const waterPoloClub = {
  id: '1',
  image: cover_page,
  title: 'Summary',
  description:
    'This app is created for a client to operate a swimming club. It allows the admin to upload or edit courses and other information, track the number of application. As a visitor, you can join courses, bookmark and make payment here. The detail infromation and flowchart will be shown below.',
};

export const features = [
  {
    id: '1',
    image: courses,
    title: 'Courses',
    description:
      'Visitors can search courses without logging in but cannot bookmark courses.',
  },
  {
    id: '2',
    image: events,
    title: 'Events',
    description:
      'Visitors can visit the event page, and the photos of each event are displayed as a lightbox gallery in separate page.',
  },
  {
    id: '3',
    image: login_signup,
    title: 'Login/Sign Up',
    description:
      'Visitors or admin must need to log in or signup first to access more functions(bookmark, payment, edit information,etc)',
  },
  {
    id: '4',
    image: visitor_page,
    title: 'Visitor Page',
    description:
      'After you log in, you can edit you information(change password, self-information, bookmark courses and make payment). The app stores your bookmarked courses on the account page and mark paid courses',
  },
  {
    id: '5',
    image: edit_courses,
    title: 'Admin Edit Courses',
    description:
      'As the admin can add or delete courses and track the number of student for each course',
  },
  {
    id: '6',
    image: edit_events,
    title: 'Admin Edit Events',
    description:
      'As the admin can add or delete courses and track the number of student for each course',
  },
];

export const backEnd = [
  {
    id: '1',
    image: mvc_example,
    imageRemark: 'The porject flowchart',
    title: 'MVC architecture',
    content:
      'According to MVC architecture, the API is separated into Router, Controller, Model and View(React (Front-End part)). Each part is stored into different folder to maintain the readability and scalability. The goal of the router is to delegate the request to the correct handler function which will be one of the controllers. Dependign on the incoming request the controller might need to interact with one or more models. After getting the data from the model, the controller get ready to send back a responses to the client, for example containing required data. The features of controller and model are showing below.',
  },
  {
    id: '2',
    image: logic,
    imageRemark: 'The features of controller and model',
  },
  {
    id: '3',
    image: token,
    imageRemark: 'Create JSON Web Token(JWT) ',
    title: 'Authentication, Authorization and Security ',
    content:
      'JWT creatre unique and secret string to represent user. The JWT is stored in a cookie, and it will send back to client together with other data. However, we need to eliminate the password before send the response, because we do not want to expose it. ',
  },
  {
    id: '4',
    image: protect,
    imageRemark: 'Protect Controller',

    content:
      'The user is authenticated and bascially logged into the application without leaving any state on the server. The protect controller can confrim the user is logged in and he is the correct user, before doing some authorized actions.',
  },
  {
    id: '5',
    image: router,
    imageRemark: 'routes in API',
    title: 'REST architecture',
    content:
      'In order to deploy the app as a single page web, so setting all the api routes with /api. We set protect controller for authorized actions and some of the routes need to restrict to special role (add/delete courses need to restric to admin only). Code show below.',
  },
  {
    id: '6',
    image: protect_route,
    imageRemark: 'protect and restrict before routing',
  },
  {
    id: '7',
    image: data_model,
    title: 'Data Model',
    imageRemark: 'Relationship between data',
    content:
      'In this application, we want user can track the number of course bookings and bookmarked courses, also admin can know how many people paid for each course. Therefore, we need to set reference between booking with course and user. ',
  },
];

export const frontEnd = [
  {
    id: '1',
    image: front_end,
    imageRemark: 'Front End Structure',
    content:
      ' In React, you need to split interfaces into independent components(user page, admin page, course page, event page, etc), and separate each component into a single file to maintain the readability and scalability. And using Redux for managing the state in React app.',
  },
  {
    id: '2',
    image: react_route,
    imageRemark: 'Wrap every components into App.js',
    title: 'React Route',
    content: 'Using react-router-dom package to route different components',
  },
  {
    id: '3',
    image: react_user_data,
    imageRemark: 'User Information',
    title: 'Store Information',
    content: 'Storing Information at localStorage',
  },
];
