# Junior Phase Final Project

## Getting started

1. Fork and clone this repo.
2. `npm install`.
3. `npm run start:dev`
4. name your database acme_schools_db
## Details

### The Premise

You are the CTO of a company which manages Campuses and Enrollments. Create a RESTful web platform that allows you to manage your students and campuses. Before getting started, please carefully review the expectations as outlined below.

### The tools

For this project, you must use Express to handle HTTP requests and Sequelize to interface with your database. Likewise, you must use React, Redux and React-Redux on the front-end. This means that all important state (i.e. students and campuses) must be managed by the Redux store (unimportant state, like form data, may be managed by stateful React components). Components that display student/campus data should therefore be connected to the Redux store. 

- other client side libraries you will need
- redux
- react-redux
- react-router-dom@5
- redux-thunk
- axios

### Requirements + Rubric (see rubric file)

## Requirements

- the application needs to be deployed
- the application needs to load without errors (blank screens are not acceptable)
- do not copy and paste previous code!
- you will have ample time to complete project, NO EXTENSIONS WILL BE GIVEN
- build incrementally! 
- if you have an error, fix the error, before attempting to **add** functionality


### Views and Functionality

You can determine views and functionality from the requirements and wireframes shown below.

<img src='https://github.com/FullstackAcademy/jpfp-template-a-flex/blob/main/wireframes.png' />



#### Seed

- [ ] Write a sync function which sync's and seeds your database when your application starts 

### Tier 1: All Campuses and Students

- [ ] Display the campuses component when the url matches `/campuses`
- [ ] Display the students component when the url matches `/students`
- [ ] Add a links to the navbar that can be used to navigate to the campuses view and the students view

#### Backend Requirements

- Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - string can be null 
  - [ ] address - not empty or null
  - [ ] description - extremely large text
- Write a `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - string can be null 
  - [ ] gpa - decimal between 0.0 and 4.0
- [ ] Students may be associated with at most one campus. Likewise, campuses may be associated with many students


### Tier 2: Single Student and Single Campus


- Write a component to display a single campus with the following information:
  - [ ] The campus's name, image, address and description
  - [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ ] Clicking on a campus from the campuses view should navigate to show that campus

- Write a component to display a single student with the following information:
  - [ ] The student's full name, email, image, and gpa
  - [ ] The name of their campus (or a helpful message if they don't have one)
- [ ] Display the appropriate student when the url matches `/students/:studentId`
- [ ] Clicking on a student from the students view should navigate to show that student

- [ ] Clicking on the name of a student in the campus view should navigate to show that student in the student view
- [ ] Clicking on the name of a campus in the student view should navigate to show that campus in the campus view


### Tier 3: Adding a Campus and Adding a Student


#### Frontend

- [ ] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [ ] Display this component as part of the campuses view, alongside the list of campuses
- Submitting the form with a valid name/address should:

  - [ ] Make an AJAX request that causes the new campus to be persisted in the database
  - [ ] Add the new campus to the list of campuses without needing to refresh the page

- [ ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [ ] Display this component as part of the students view, alongside the list of students
- Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new student to be persisted in the database
  - [ ] Add the new student to the list of students without needing to refresh the page



### Tier 4: Removing a Campus and Removing a Student


#### Frontend

- [ ] In the campuses view, include an `X` button next to each campus
- Clicking the `X` button should:

  - [ ] Make an AJAX request that causes that campus to be removed from database
  - [ ] Remove the campus from the list of campuses without needing to refresh the page

- [ ] In the students view, include an `X` button next to each student
- Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that student to be removed from database
  - [ ] Remove the student from the list of students without needing to refresh the page


### Tier 5: Updating a Campus and Updating a Student


#### Frontend

- [ ] Write a component to display a form updating _at least_ a campus's name and address
- [ ] Display this component as part of the campus view
- Submitting the form with valid data should:
  - [ ] Make an AJAX request that causes that campus to be updated in the database
  - [ ] Update the campus in the current view without needing to refresh the page
- [ ] In the campus view, display an `Unregister` button next to each of its students, which removes the student from the campus (in the database as well as this view); hint: the student is still in the database but is no longer associated with the campus

- [ ] Write a component to display a form updating a student
- [ ] Display this component as part of the student view
- Submitting the form with valid data should:
  - [ ] Make an AJAX request that causes that student to be updated in the database
  - [ ] Update the student in the current view without needing to refresh the page



### Bonus Tier: Finishing Touches

- [ ] Add a home page which lists the top performing campuses based on the average gpa of the enrolled students
- [ ] Add a search bar which will take the user to a search page which will contain links for students and campuses
- [ ] Add paging for the students and campuses list (you might need to seed more data)
- [ ] Add a limitation to the number of students who can be enrolled at the campus and enforce the requirement using sequelize hooks
- [ ] Add the ability for a user to save an image of the student or campus to the database








