# Quiz Application

## Overview
The Quiz Application is a web-based platform developed using JavaScript and React.js, allowing users to select a subject, take a quiz, and receive their scores with pass/fail status.

## Features
- **Landing Page: Test Information Collection**
  - Collects user's name and selected subject.
  - Validates input and stores details in local storage.

- **Quiz Page: Start Test**
  - Personalizes quiz experience using stored user details.
  - Displays subject-specific questions.
  - Allows navigation between questions.
  - Updates score based on answers (+2 for correct, -1 for incorrect).
  - Includes a timer for each question.
  - Displays final score in a modal dialog.

- **Greeting Page: Quiz Completion**
  - Displays final score and pass/fail status.
  - Automatically redirects to home page after 5 seconds.
  - Includes a button for immediate return to home page.

- **Custom Components**
  - **CustomButton:** Reusable button component.
  - **Dialog:** Uses MaterialUI's Dialog component.

- **Navigation**
  - Uses React Router for seamless navigation.

- **Data and State Management**
  - Uses React hooks and local storage for state management.

- **Styles**
  - Consistent styling using CSS modules.

- **Error Handling**
  - Displays error messages for invalid inputs.

## Getting Started

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:
   ```sh
   Clone the repository to your local machine.
   Navigate to the project directory in your terminal.
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Landing Page (TestInfo.js)
- Users enter their name and select a subject.

### Quiz Page (StartTest.js)
- Retrieves user details from local storage.
- Displays subject-specific questions.
- Updates score based on answers.
- Includes a timer for each question.
- Shows final score in a modal dialog.

### Greeting Page (Greeting.js)
- Displays final score and pass/fail status.
- Redirects to home page after 5 seconds.
- Includes a button for immediate return to home page.

## Live Demo
Check out the live demo of the Quiz Application [here](https://quiz-app-react-lake.vercel.app/).

## Author
- **Lawanu Borthakur** - [lawanu-tech](https://github.com/lawanu-tech)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



Feel free to modify the README as per your specific project details and requirements.