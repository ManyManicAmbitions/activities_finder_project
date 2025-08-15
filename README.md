## Activities finder application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Components

## ShowHideButtons.js
The purpose of this component is to show and hide information about events and activities once API integration is complete it would show or hide the information pertaining to the selected activity. currently shows placeholoder text.

## SearchBar.js
The purpose of this component is to allow the user to search for activities or events using keywords such as "Sports" which would be integrated following the API integration.

## Nav.tsx
The purpose of this component is to allow the user to navigate between the pages on this application. Allowing for seamless and quick navigation.

## Header.js
The purpose of this component is to act as a header for each page displaying the activities finder text at the top of the page, this is displayed through layout.tsx.

## Footer.js
The purpose of this component is to act as a footer for each page displaying the year and the application name at the bottom of the page, this is displayed through layout.tsx. 

## ContactForm.js
The purpose of this component is to allow the user to contact the creator or team of creators of the page with any questions on the qpplication or to suggest improvements.

## Card.tsx
The purpose of this component is to allow the future integration of the API to have a title and description for each activity of event giving ample information about them, currently uses placeholder data.

## Routes
/ - Home page
/events/[id] - Dynamic route showing a events placeholder details
/about - Describing the project
/contact - holds a contact form
/favourites - holds placholder info will load favourite activities saved by the user after API integreation

## State Management
This app currently uses React's useState for UI updates, future versions will expand state usage to display and store real time data from the API Geekseat. 


