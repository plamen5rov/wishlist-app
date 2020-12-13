# Wishlist-app
My Angular Course Project @SoftUni

The goal of this app is to allow registered users to create a wishlist (a list) of different gifts they would like for different occasions (events).

> The app is deployed in Cloud Firestore and can be accessed here: https://wishlist-d5160.web.app/

**Note:** The app is designed for both smaller and larger screens. When viewd on smaller screens (phone) the Menu bar turns to "hamburger" side menu.

## APP'S STRUCTURE:

Home page - provides basic info on the app; (available for unregistered users)

About page - some info on the author; (available for unregistered users)

SignUp page - an Angular form - with data validation and error handling - to register new users; (available for unregistered users)

Login page - an Angular form to login registered users; (available for unregistered users)

Wishlist page - (available for registered users only) a component that views 4 other sub-pages as tabs:

1. All-gifts Tab - a column representation of all gifts in the database, each gift is a separate card (Angular Material) with two buttons;
2. My-gifts Tab - a table view representation of all gifts in the database, each gift is a separate table row (Angular Material)
3. Shopping-list Tab -  table view representation of gifts that we clicked the BOOK button, each gift is a separate table row (Angular Material) - YET TO BE IMPLEMENTED!
4. Gift Tab - an Angular form to add a new gift to database.

## APPLIED TECHNIQUES:

- JavaScript, 
- Typescript, 
- Angular, 
- Angular Material
- Firebase
- Angular Firebase
- Cloud Firestore


