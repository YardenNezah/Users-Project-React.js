# Users-Project-React.js

## Visit My Website: 
https://morning-harbor-06469.herokuapp.com/

## Project Description:
Using React.js and the RandomUser API I was able to display a Table of 100 users allowing to filter and sort them based on the properties: Name, Email, Gender and Age.

The table has pagination control (10 pages) and every page contains 10 rows.

By clicking on a user image or name it opens the "User Details” page and shows the data per user, including the user address on a map and a link to send the user a new email.

## Components List:
- ###  App.js
Getting data from the server and passing it to the components according to the current Route.
#### Input (GET request):
 1. A list containing users.    
 
- ### SearchAndFilter.js
A component, used for searching and filtering the content inside the UsersList component.
#### Input (props):
1. The states associated with the textboxes, allowing them to update.    
2.  A function for filtering and searching the users.     
 
- ### User.js
A child component for the UsersList table, showing each and every user.
#### Input (props):
1. User object.
     
- ### UsersList.js
A component, mapping all the users in the table and containing the following components: SearchAndFilter, PageSelector.
#### Input (props):
 1. A list containing users.     
 
- ### UserDetails.js
A component, showing the data of each user.
#### Input (props):
1. A list containing Users.    
2. The user name (as a query parameter).

- ### PageSelector.js
A component, mapping and showing the total pages amount, allowing to navigate between the different routes according to the page index.



## Tech Stack:
1. HTML
2. CSS
3. REACT
4. RandonUser API


## Figma Design: 
https://www.figma.com/file/8R6TZjxTdLto8uojAGeKRN/Untitled?node-id=3%3A68

## Result: 
Page | Desktop | Mobile   |
:-----------:| :-------------: |:-------------:|
| All-Users (Main Page)| ![Desktop-All-Users-Page](https://user-images.githubusercontent.com/74673812/147836257-f466328e-1266-4dc5-a063-2e8daa8942d3.png)|![Mobile-All-Users-Page](https://user-images.githubusercontent.com/74673812/147836266-8264d717-eaec-4db3-9b1b-d1e55ec7eac4.png) |
| User-Details | ![Desktop-User-Details-Page](https://user-images.githubusercontent.com/74673812/147836272-c4d3f1e1-c8f1-4dbd-a47f-28727fe8199d.png) | ![Mobile-User-Details-Page](https://user-images.githubusercontent.com/74673812/147836309-d864abd3-3cc4-48f6-b31f-5c7e47c67ca1.png)
 

