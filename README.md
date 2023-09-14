## Restful-ServerTesting for CRUD functionality
# Initialize a Node.js Project:
Create a new directory for your project, open a terminal, navigate to the project directory, and run the following command to initialize a new Node.js project:
  npm init
# Install Express:
Express is a popular Node.js web framework. You can install it using npm:
  npm install express
# Create a Server File:
Create a JavaScript file (server.js) in your project directory to create and configure your Node.js server. We generally use ('/') to access the root url of the server.In this fine we can give all required http requests.Such as GET, POST, PUT, DELETE etc.. We can use the following command in the terminal of the project dictionary to start the server.
  node server.js
# Test the EndPoints:
Here I used Postman tool to test the server, but you can use anyother tool like curl or any.

## Steps to Test Server with Postman:
# Create (POST) an Item:
Select the HTTP method as POST.
Enter the URL of your server, including the route for creating items (e.g.,http://localhost:8000/api/items if your server is running locally on port 8000).
Set the request body to JSON format with the item data you want to create.Now give the paramaters in JSON format.
Click the "Send" button to make the POST request. You should receive a response indicating the newly created item.
# Read (GET) Items:
To retrieve all items, select the HTTP method as GET.
Enter the URL of your server, including the route for retrieving all items (e.g.,http://localhost:8000/api/items).
OR
If you want a specific item , Enter the URL of your server, including the route for retrieving a single item by its ID  (e.g., http://localhost:8000/api/items/ID where ID is the ID of the item you want to retrieve).
Click the "Send" button to make the GET request. You will receive a response with the list of items.
# Update (PUT) an Item:
Select the HTTP method as PUT.
Enter the URL of your server, including the route for updating an item by its ID (e.g., http://localhost:8000/api/items/ID where ID is the ID of the item you want to update).
Set the request body to JSON format with the updated item data.
Click the "Send" button to make the PUT request. You should receive a response with the updated item's details.
# Delete (DELETE) an Item:
Select the HTTP method as DELETE.
Enter the URL of your server, including the route for deleting an item by its ID (e.g., http://localhost:8000/api/items/ID where ID is the ID of the item you want to delete).
Click the "Send" button to make the DELETE request. You will receive a response indicating a successful deletion.
