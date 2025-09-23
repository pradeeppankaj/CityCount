# City Counter UI

This project is a simple web application that allows the user to enter a letter and displays the number of cities from the OpenWeatherMap API that begin with that letter.

- **Frontend:** Plain HTML, CSS, JavaScript  
- **Backend:** JavaScript (fetches directly from the OpenWeatherMap sample endpoint, with proxy handling for CORS)  

##  Features
- Input box that accepts a single letter (A–Z).  
- Validation to ensure only letters are entered.  
- Fetches city data from the OpenWeatherMap sample endpoint:  
https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22
- Counts and displays the number of cities starting with the entered letter.  

##  Project Structure

city-counter/
│
├── index.html # Main UI
├── StyleSheet1.css # Styles
├── Script1.js # Logic (fetch + filter + validation)
└── README.md

##  Requirements
- A modern web browser (Chrome, Edge, Firefox, etc.)
- No external server required (can run locally).

##  How to Run

### Option 1: Open Directly
download all the files to a folder manually OR clone the git repo to your local machine.
Just open the `Index.html` file in your browser by double click.
Enter the letter in the box 
it will give the result.

##  Example Usage
User types: S
App counts how many cities from the API start with "S".

Displays result:
Number of cities starting with "S": 3

🔹 Preview
added the screenshot in git repository


##  How to use gitlab
🔹 Push Code to GitLab

Initialize a Git repository:
git init

Add all files:
git add .

Commit changes:
git commit -m "Initial commit - City Counter UI"

Create a new repository on GitLab.
Copy the repository URL (e.g., https://gitlab.com/username/city-counter.git).

Push the code:
git push -u origin main

🔹 Notes

The app uses the OpenWeatherMap sample endpoint, which provides static data for demo purposes.

For real live data, sign up at OpenWeatherMap
 and replace the API endpoint with your own API key.

🔹 License

This project is for demo purposes only and uses OpenWeatherMap’s sample API.


