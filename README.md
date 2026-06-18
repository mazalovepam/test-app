# Quiz CLI

An interactive command-line quiz game for learning JavaScript, Node.js, and general programming basics. It runs in the terminal and gives instant feedback after each answer.

## Overview

Quiz CLI is a beginner-friendly Node.js app that asks multiple-choice questions from a few learning categories. It is useful for quick practice, self-testing, and exploring basic JavaScript and Node.js concepts in an interactive way.

The app includes:
- A simple terminal menu
- Randomized quiz questions
- Immediate answer feedback
- Explanations for each question
- A final score summary with review of missed questions

## Features

- Choose from multiple quiz categories
- Select how many questions to answer
- See progress while taking the quiz
- Get right/wrong feedback after each question
- Review incorrect answers at the end

## Installation

1. **Install Node.js 18 or newer**
   - The project uses modern ES Modules and requires Node.js `>=18.0.0`.

2. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test-app
   ```

3. **Open the project folder**
   - Make sure you are inside the `test-app` directory where `package.json` is located.

4. **Install dependencies**
   - This project does not use any external npm packages, so there is nothing extra to install.
   - You can still run `npm install` if you want npm to create a lock file locally.

## Usage

Start the quiz with:

```bash
npm start
```

Or run it directly with:

```bash
node index.js
```

### How it works

1. Start the app.
2. Pick a quiz category.
3. Choose how many questions to answer.
4. Enter the number of your answer when prompted.
5. Read the explanation and score at the end.
6. Choose whether to play again.

### Example interaction

```text
Choose a category:
1. JavaScript Basics
2. Node.js Fundamentals
3. General Programming

Your choice (enter number): 1

How many questions?
1. All questions
2. 3 questions
3. 5 questions

Your choice (enter number): 2
```

## Project Structure

```text
README.md
index.js
package.json
data/questions.json
src/colors.js
src/input.js
src/quiz.js
```

### File roles

- `index.js` - Main entry point that starts the quiz and handles the app flow.
- `data/questions.json` - Stores all quiz categories, questions, options, answers, and explanations.
- `src/input.js` - Handles terminal input such as menus, prompts, and confirmations.
- `src/quiz.js` - Contains the quiz logic, scoring, progress display, and results screen.
- `src/colors.js` - Provides terminal color helpers for better-looking output.
- `package.json` - Project metadata, scripts, and Node.js version requirement.

## Requirements

- Node.js 18 or newer
- A terminal or command prompt
- No external npm dependencies

## Notes / Limitations

- This is a terminal-only application. It does not have a web interface.
- Questions are loaded from `data/questions.json`, so the quiz content is fixed unless you edit that file.
- The quiz asks questions in a shuffled order, so the order may change each time you play.
- The available question count options depend on how many questions exist in the selected category.
- The `npm test` script exists in `package.json`, but no test files are included in the current codebase.

## License

This project is licensed under the MIT License, as indicated in `package.json`.
