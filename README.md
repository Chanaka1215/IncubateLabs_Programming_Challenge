# Challenge "Create a web application for adding/searching hotels in Sri Lanka" 
programming challenge from IncubateLab for the internship 

   To solve the challenge I had to deal with front-end, back-end and Database development technologies, Here i have used 
Angular 2 framework as  front-end developments with HTML CSS and Angular Material Design. In oreder to develop the backend I have 
used Express 4+ freamework of nodeJs serverside runtime.For the database ,selected MongoDB that is NoSQL/non-Relational Database with the help of 
Mongoose middleware. 

   The front-end is a Singale page web app that use Angular2 freamwork. To UI designing process i have used Bootstrap and Angular
material design with CSS. I tried my best to keep it's responsiveness as much as i can.This singale page app is communicate 
with Our backend the RESTfull API  trough GET and POST HTTP requests using JSON.The REST API have few number of End Points to 
connect with client/Angular App ans this is the View of MVC architecture. The back end has designed as a RESTful servise. NodeJs's 
Express framework is used for Development.As The database texhnoknology I have used the MongoDB NoSQL database and Mongoose is used as a 
middleware to connect with database and to Write quaris.The back end is considerd as MC of the MVC architecture since it works as 
a REST service.

>The project is deployed on  AWS EC2 instance ,ubuntu server using PuTTY connection and work as expected.
>the URL for Angular App           http://54.71.181.55:8000/

>The URL for RESTful back-end       http://54.71.181.55:8001/

**Note that its use  http:// instead of https://   not the https protocol 

The Angular +2  uses component based architecture.This app have 5 components 

>>>>login component is used login and register for new users. This component contain basic form validation and other login and Registration 
related functions and templates/UIs, CSS.

>>>>Navbar component has been created to implement basic navigations and related templates.

>>>>EnterDetails component is designed for enter hotel details and update them with related UIs,CSS.

>>>>Find-Details component is used to do search and display according to Ascending order or Descending order

>>>>Overview Component is used to Display all the hotel related data.




The structure of the RESTful API.
This contain 3 folders controller, Models and Views
>>Inside the controller folder i have created 

        1.cityController.js    As the controller for the 'city' model. it contain basic city model related 
                                functions and end points that is needed for get and send data via http.  
        
        2.hotelController.js   as the controller for the 'hotel' model, and contain basic functions 
                                and end-points
        
        3.userController.js    as the user controller has its end points and functions
        
>> Inside the Model folder there are 3 models for USER , HOTEL , CITY they are designed using Mongeese Schema designing

>> The Views folder contain all the views if the models.Since this is a API we need only few views. the info.html is in 
   the views folder that use to display all the End-points
   
   
   

The project contain 3 folders 

1)front-end

2)back-end

3)dist

bellow will be described how to run this app on your computer. Before that you need to configure basic setup

step 1 => Install NodeJs on your computer  follow this link https://nodejs.org/en/download/  

step 2 => Install npm (Node Package Manager) on your computer  follow this link https://www.npmjs.com/ most of the time npm 
is instaled vith nodeJs.

step 3 => Install mongoDB on the computer. fiollow this  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

step 4 => Then clone the project in to a folder


# Start Angular app in Development mode 

This Angular app is created with Angular CLI. so install angular CLI globally using using npm or any. follow https://cli.angular.io/

step 5 => open the front end foldr usind a IDE or navigate to the folder using cmd and run 
  
  >npm install
  
  >ng serve
  
  then the app can be run on a http://localhost:4200/
  
  
 # Start RESTful API/Backend 
 
 step 5 => navigate to the back-end folder in cloned repository and open the project using a IDE or navigate to the folder then run 
 npm install in cmd
 
 step 6 => Back end need to save and retreve data from database so run the MongoDB database server on your computer using the comand
   >mongod
   
  step 7 => then navigate to the backend folder and run
  
  >npm install 
  
  Now ypu can access the backend app from http://localhost:8001/ url and you will see the index file that include all the end    points.
  

  
  
  # Run the Angular App in production mode 
  
  the /dist folder contain build version of the our app. to run it. Navigate to the /dist folder and run
  
  >node run
  
  then you will be able to open it from URL http://localhost:8000/ 
  






