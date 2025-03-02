Country, State, and City Management Application
Overview
This is a React-based web application designed to manage a hierarchical structure of countries, states, and cities. Built with modern JavaScript and React, the app provides an intuitive interface for adding, editing, and deleting entities at each level, complete with confirmation dialogs to prevent accidental actions. The project showcases proficiency in React state management, component-based architecture, and user interaction design, all while adhering to the requirement of using pure React and JavaScript without external libraries.

Features
Country Management: Add, edit, and delete countries with a prompt-based input system.
State Management: Manage states under specific countries, with options to add, edit, or delete them.
City Management: Add or delete cities within states, maintaining the hierarchical relationship.
Confirmation Dialogs: Built-in safeguards using window.confirm() for all edit and delete operations, ensuring user intent is verified.
Hierarchical UI: Clean, nested display of countries → states → cities, with clear interaction points.
Responsive Design: Basic CSS styling for a user-friendly and organized layout.
Technical Highlights
Framework: Built with React using Vite as the modern build tool, aligning with current industry standards and avoiding deprecated tools like Create React App.
State Management: Leverages React's useState hook for efficient, component-level state handling without external dependencies.
Component Architecture: Modular design with separate components (App.jsx, CountryList.jsx, StateList.jsx, CityList.jsx) for maintainability and scalability.
Pure JavaScript: Implements all functionality (prompts, confirms, and data manipulation) using vanilla JavaScript, per assignment requirements.
Cascading Deletion: Automatically removes associated states and cities when a country is deleted, and cities when a state is deleted, ensuring data consistency.