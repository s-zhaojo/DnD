MoodRoll - React App
MoodRoll is a fun and interactive app that lets users roll a virtual dice to select a YouTube video based on their mood. The app offers a variety of mood categories such as Happy, Mad, and Sad, with corresponding music videos from YouTube. It features an immersive background animation powered by Spline.

Features
Mood-Based YouTube Video Suggestions: Based on the dice roll, users can watch videos that match their current mood.
Interactive Dice Roll: Users can roll a virtual dice for each mood to get a new recommendation.
Spline 3D Animation: Background animation adds an engaging, dynamic visual experience.
Responsive UI: Clean and simple layout designed for user interaction.
Installation
To run this project locally, follow these steps:

1. Clone the Repository
Clone this repository to your local machine using:
git clone https://github.com/s-zhaojo/DnD/tree/main

2. Install Dependencies
Navigate to the project folder and install the necessary dependencies:
cd moodroll
npm install

3. Run the App
Start the app in development mode:
npm start
The app will be available at https://dn-d7584.vercel.app/

4. Build for Production
To create a production build of the app, run:

npm run build
This will bundle the app into the build folder, optimized for production deployment.

App Overview
Mood Categories:
Happy: Includes videos like "Happy" by Pharrell Williams and "Can't Stop the Feeling!" by Justin Timberlake.

Mad: Includes tracks such as "Break Stuff" by Limp Bizkit and "Numb" by Linkin Park.

Sad: Includes songs like "Hello" by Adele and "Shape of You" by Ed Sheeran (Sad version).

Dice Rolling Mechanism: The app uses a dice roll for each mood category (Happy, Mad, and Sad), and based on the roll, a random video is selected and opened in a new browser tab.

Spline 3D Animation:
The app uses a 3D scene from Spline as the background to provide an engaging visual experience.

Available Scripts
In the project directory, you can run the following commands:

npm start
Runs the app in development mode. Open https://dn-d7584.vercel.app/ to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode. For more details, refer to the testing documentation.

npm run build
Builds the app for production to the build folder. This optimizes the app for the best performance.

npm run eject
Note: This is a one-way operation. Once you eject, you can’t go back. This command will remove the single build dependency from your project, instead copying all configuration files and dependencies (e.g., webpack, Babel) directly into your project.

License
This project is open source and available under the MIT License.

Acknowledgments
Create React App for bootstrapping the project.
Spline for providing the 3D animation background.
YouTube for providing the video content.
