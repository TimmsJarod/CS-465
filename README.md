# CS-465
Full Stack Development I

## Architechture

Through this course, we used Express html to supplement the html of the concepted front end with elements that can generate content using logic rather than static code. The issue with HTML is that it is still static and cannot pull backend content and display it to the user. Using Handlebars, we are able to make a faster interface by changing this static HTML to using the handlebars formatting, which allows us to serve content without needing to refresh all page components and allows for breaking up reused code into partials, which is common in the header and footer of website. Using A single page application, javascript, html, and css can be used to create page components that can be served with dynamic functionality without the need for refreshing the page. Javascript is what allows the website to leverage the use of our backend to pull content as well, using complex logic that is unavailable in a pure HTML website.

We used the NoSQL backend database MongoDB for its flexibility and compatibility with our full-stack application. MongoDB is a high preformance and highly functional database which stores our content in for form of document collections. Additionally, the MEAN stack is using only javascript to design the component logic, which allows us to use the mongoose tool to carry infromation to and from MongoDB and our application. 

## Functionality

Json differs from javascript in that it is used to store data elements rather than contain complex logic and functions. Json allows the application to store and send structured data between the frontend and back end by using the standardized formatting. The frontend can pull data to these structures and intepret it for use in populating content, whereas the stucture can also be passed through mongoose and convert it to a document structure to be stored in MongoDB.

Some examples where refactoring the application to use components led to improved efficiency and fuctionality would be the implementaion of the update and editing interfaces to the webapp. These components allowd for the addition of new trip objects to the backend or changing elements of pre-existing objects, something that could only have done by changing file data in the directory or directly in MongoDB previously. This added efficience comes at the cost of needing security features to ensure that these tools are only being used by privilaged parties, so the addition of a login component for admins ensures security functionality for the application.

## Testing

The application uses CRUD principles for interactions that move through the application. The methods implemented in the trip-data service allow for the getting, posting, and putting of objects within the database through interactions with the application interface. Communication through endpoints are the method of ensuring that these tools are interacting correctly and can be tested through executions and observing their results in terminals through the response codes. Security in the application became necessary with the implementation of features that interact with the backend. That addition of checking authenitcation allows for the safe addition of these tools, which is done by adding accounts that store passwords in the form of encrypted hashes and can only be checked using the appropriate methods. THat is to say, if someone managed to access the database to lift passwords, they would only get the checksum that the system uses to match passwords entered into the interface.

## Reflection

Through this course, I learned a great deal about using the MEAN stack through its various tools and features. I've learned about methods of developing dynamically-served-content methods which increase website efficiency. This course will help me in my professional future by equiping me with standards in web application functionality, further understanding on how to implement CRUD principles, and implementing security which can protect the assets of the application from potential attackers.
