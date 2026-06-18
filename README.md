# Quiz CLI

A terminal-based quiz application for practicing JavaScript, Node.js, and general programming fundamentals. It runs entirely in the command line, guides the user through category and question selection, and provides immediate feedback, explanations, and a final score summary.

## Features

- Category selection from:
  - JavaScript Basics
  - Node.js Fundamentals
  - General Programming
- Customizable question count
- Progress display during the quiz
- Right/wrong answer feedback
- Explanations shown after each question
- Final score summary
- Review of missed questions
- Terminal-friendly color output

## Project Structure

```text
README.md
test-app/
  data/questions.json   → quiz questions and categories
  index.js              → CLI entry point
  package.json          → project metadata and scripts
  src/colors.js         → ANSI color helpers
  src/input.js          → terminal prompt helpers
  src/quiz.js           → quiz logic, scoring, and results
```

## Prerequisites

- Node.js 18 or later
- No external npm dependencies are required

## Setup

Clone the repository and move into the application directory:

```bash
git clone https://github.com/mazalovepam/test-app.git
cd test-app/test-app
```

Because the project has no external dependencies, there is no install step beyond having Node.js available.

## Running the Project

Start the quiz with:

```bash
npm start
```

Or run the entry point directly:

```bash
node index.js
```

## How It Works

1. The CLI starts and loads quiz data from `data/questions.json`.
2. You choose a category.
3. You select how many questions to answer.
4. The quiz runs question by question, showing progress and immediate feedback.
5. After each answer, the app displays the correct result and explanation.
6. At the end, you see your final score and a review of missed questions.
7. You can choose to play again.

## Usage

Follow the prompts in the terminal:

- Select a category
- Choose the number of questions
- Answer each question by entering the option number
- Review the final summary when the quiz ends

## Additional Notes

- The available quiz content is defined in `data/questions.json`.
- The application is implemented as an ES module project.
- A test script is defined in `package.json` and can be run with:

```bash
npm test
```
