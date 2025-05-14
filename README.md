cat << 'EOF' > README.md
# InterviewMate

**InterviewMate** is a comprehensive web application designed to help users prepare for interviews by simulating real-life interview scenarios. The app offers various features, including video-based interviews, text-to-speech for voice interactions, feedback collection, and much more to enhance the interview preparation experience.

## Tech Stack

- **Vite**: A fast and modern build tool that offers a smooth development experience.
- **TypeScript**: Ensures type safety and improves code quality.
- **Firebase**: Used for backend services like authentication and data storage (e.g., user feedback).
- **GeminiAPI**: Provides valuable interview questions based on job titles and experience.
- **Webcam Integration**: Allows users to simulate interviews with webcam support, giving a realistic interview environment.
- **Text-to-Speech**: Converts text-based prompts into audio, enhancing accessibility and user engagement.
- **Feedback System**: Collects user feedback after the mock interviews, helping them improve their performance.

## Features

- **Simulated Interviews**: Users can select interview topics based on their field and experience level, and participate in mock interviews.
- **Webcam Support**: The app uses webcam integration to provide a more realistic interview experience.
- **Text-to-Speech**: Enables audio-based prompts and instructions during the interview, offering an interactive experience.
- **GeminiAPI Integration**: The app uses the GeminiAPI to generate interview questions for various job positions and experience levels.
- **User Feedback**: After each mock interview, users can submit feedback on their experience, which is stored in Firebase for future improvements.
- **Real-Time Interview Scenarios**: Experience the interview process from both the perspective of the interviewer and the candidate.

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/AnkitPandey001/interviewmate-app.git
   \`\`\`

2. **Navigate to the project folder:**
   \`\`\`bash
   cd interviewmate-app
   \`\`\`

3. **Install the dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

4. **Set up Firebase:**
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration object and update it in the \`firebase.config.ts\` file.

5. **Run the application:**
   \`\`\`bash
   npm run dev
   \`\`\`

   This will start the development server and you can view the app by visiting \`http://localhost:3000\` in your browser.

## Features Breakdown

### Interview Simulation
Users can select different topics (e.g., **JavaScript**, **React**, **Backend Development**, etc.) to prepare for interviews. The questions are pulled dynamically using the **GeminiAPI**, which provides real-world interview questions based on user-selected topics.

### Webcam Integration
To simulate real-life interview scenarios, users can activate their webcam to interact directly with the interview questions. This makes the mock interview more immersive and realistic.

### Text-to-Speech
To enhance the user experience, the app includes **Text-to-Speech** functionality. This reads out interview questions or instructions, helping users to focus on their responses rather than reading text on the screen.

### Firebase Integration
Feedback from users after completing each interview is collected and saved to **Firebase**. This allows users to track their progress and review feedback to improve their performance in future interviews.

## Screenshots / Demo

*Insert Demo or Screenshots Here*  
_You can add images here to showcase the features or a live demo of the application._

## Contributing

If you want to contribute to the development of this project, feel free to fork the repository and submit a pull request. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch: \`git checkout -b feature-branch\`
3. Commit your changes: \`git commit -m 'Add new feature'\`
4. Push to the branch: \`git push origin feature-branch\`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to add additional sections or modify this template as per your needs. You can also add any images or demos where noted.

## Contact

If you have any questions or feedback, feel free to reach out!

---

Enjoy building with **InterviewMate** and good luck with your interview preparation!
EOF
![Screenshot (2)](https://github.com/user-attachments/assets/9258b900-c320-4d57-b7c0-4641e8ec7707)
![Screenshot (3)](https://github.com/user-attachments/assets/d7d036a1-c6cb-4acd-a4c0-2fff0be8605c)
![Screenshot (4)](https://github.com/user-attachments/assets/1b14357b-05a9-4f48-bc10-430c89104cad)
![Screenshot (5)](https://github.com/user-attachments/assets/12103ecb-577f-4520-8850-42bee7d78758)
