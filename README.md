# CS-465
Full Stack Development I

## Architechture

Through this course, we used Express html to supplement the html of the concepted front end with elements that can generate content using logic rather than static code. The issue with HTML is that it is still static and cannot pull backend content and display it to the user. Using Handlebars, we are able to make a faster interface by changing this static HTML to using the handlebars formatting, which allows us to serve content without needing to refresh all page components and allows for breaking up reused code into partials, which is common in the header and footer of website. Using A single page application, javascript, html, and css can be used to create page components that can be served with dynamic functionality without the need for refreshing the page. Javascript is what allows the website to leverage the use of our backend to pull content as well, using complex logic that is unavailable in a pure HTML website.

We used the NoSQL backend database MongoDB for its flexibility and compatibility with our full-stack application. MongoDB is a high preformance and highly functional database which stores our content in for form of document collections. Additionally, the MEAN stack is using only javascript to design the component logic, which allows us to use the mongoose tool to carry infromation to and from MongoDB and our application. 
