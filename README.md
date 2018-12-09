A user login and registration app using Node.js, Express, Passport, Mongoose and Bootstrap.

I have used offline Mongo (installed in my laptop) to store the details of registered users and the 5 images.
Database name : loginapp

Server Port Number : 3000

GridFs : To store images in the same database (loginapp)

I stored the images using the following code in command prompt.
     mongofiles.exe -d loginapp put (image).jpg

Retrieving images:
 Run retrieve.js (public folder)
 It retrieves images from mongo DB and makes a copy in the public folder.

In login dashboard (As soon as a user logins) I display the images as a slideshow with previous and next buttons.
