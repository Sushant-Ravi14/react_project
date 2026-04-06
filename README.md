# Student Portal Project

## 1. Introduction
The **Student Portal** is a modern React-based web application designed to manage student records efficiently. It provides a user-friendly interface to view a directory of students and add new student entries. The project demonstrates the use of React 19, functional components, hooks (useState, useEffect), and client-side routing.

## 2. Core Features
- **Student Dashboard**: A welcoming home page providing an overview of the portal.
- **Student Directory**: Fetches and displays a list of students from an external API (JSONPlaceholder) in a clean, card-based layout.
- **Add Student Form**: A comprehensive form with real-time validation to register new students. Features include:
  - Input validation for name, email, and phone numbers.
  - Gender selection with radio buttons.
  - Integration with **LocalStorage** to persist newly added students.
- **Interactive Counter**: A dedicated page showcasing React state management with increment and decrement functionality.
- **Responsive Navigation**: A persistent navigation bar for seamless transitions between pages.
- **Modern UI/UX**: Styled with custom CSS for a premium, professional appearance.

## 3. Tech Stack
- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool & Dev Server**: [Vite 7](https://vitejs.dev/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **API Interaction**: Fetch API (connecting to JSONPlaceholder)
- **Persistence**: Browser LocalStorage
- **Styling**: Vanilla CSS with modern practices (Flexbox, Grid, Variables)

## 4. Folder Structure
```text
student-portal/
├── public/                 # Static assets like icons and robots.txt
├── src/
│   ├── assets/             # Images and project-specific assets
│   ├── components/         # Reusable UI components (e.g., Navbar)
│   ├── pages/              # Main page views
│   │   ├── Home.jsx        # Project introduction page
│   │   ├── Students.jsx    # Student list display page
│   │   ├── AddStudent.jsx  # Student registration form
│   │   └── Counter.jsx     # State management demonstration page
│   ├── styles/             # Application-wide CSS files
│   ├── App.jsx             # Root component with routing setup
│   └── main.jsx            # Application entry point
├── index.html              # Core HTML structure
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite environment configuration
```

## 5. Steps to Run Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (Node Package Manager)

### Installation
1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd react_project/student-portal
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Access the application**:
    Open your browser and navigate to the URL shown in your terminal (usually `http://localhost:5173`).

---
Developed as a demonstration of modern React development practices.