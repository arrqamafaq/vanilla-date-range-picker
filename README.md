# 📅 Vanilla JS Calendar Picker

A minimal, extendable, and modern calendar date range picker built with vanilla JavaScript, using Tailwind CSS for styling and date-fns for clean date handling — no UI frameworks, just clean modular code.

This project demonstrates how you can **replicate the architectural patterns of React** – such as state management, controlled rendering, and component-based structure – using only plain JavaScript.

---

## 🌟 Motivation

Most people associate modularity, reactivity, and clear state-driven UI with libraries like **React**. This project is an experiment to **bring the same architecture and thought process to Vanilla JS**.

Inspired by the declarative UI and state-driven rendering approach in React, this calendar:

- Manages state via custom state modules.
- Triggers controlled rerenders via function callbacks.
- Separates concerns into clean modules: UI, controller, and state.
- Follows a “React-ish” data flow: props (data) → render → update DOM → controlled interactions.

---

## ⚙️ Features

✅ Select a **start** and **end** date  
✅ Dynamically **highlight** selected dates  
✅ Show selection in a header (like booking apps)  
✅ Apply or cancel date selection  
✅ Handles invalid interactions (e.g., only one date selected)  
✅ Responsive and clean with **TailwindCSS**

---

## 🗂️ Key Components

- **`components/`**  
  Contains all the UI components, including the calendar grid, header, actions (Apply/Cancel), and the date display.
  
- **`controllers/`**  
  Handles the core logic, such as date selection, state management, and calendar visibility.
  
- **`state/`**  
  Manages the application state, including the selected start and end dates, and the currently selected month.

- **`utils/`**  
  Includes helper functions like generating calendar dates and other reusable utility functions.

- **`style.css`**  
  Contains custom styles and Tailwind CSS configurations, ensuring a consistent and responsive design.

- **`DatePicker.js or can use app.js`**  
  The entry point that ties everything together, initializes the calendar.

  **`main.js`**  
  Initializes the calender (app) by importing necessary functions and setting up global configurations. This is where the calendar is attached to the DOM and where the event listeners are activated for user interactions.

---


## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/vanilla-js-date-picker.git

2. Install dependencies:
    ```bash
    cd vanilla-js-date-picker
    npm install

3. Run the development server:
    ```bash
    npm run dev

4.  Open the provided local server URL in your browser (typically http://localhost:3000).

## 📦 Dependencies
- Tailwind CSS: A utility-first CSS framework used for styling the components.

- date-fns: A lightweight library for handling date manipulation, formatting, and comparison.

## 🙌 Contributing
Feel free to open issues or submit pull requests for improvements, bug fixes, or feature requests. Contributions are welcome!
