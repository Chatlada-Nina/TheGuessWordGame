# The Guess Word Game

![The website shown on a variety of screen sizes](/documentation/readme/screen-responsive.png)

**The Guess Word Game** is my second project for Code Instutute. The idea started with a popular TV program which I used to watch with my family in my hometown. They will show the audients an image to guess a secret word and the audients need to answer to collect the score, who is collected the highest score will win. This game is very fun and gave me the idea to create a similar game with the purpose of learning and making the game more accessable, users can learn and play the game on their phone and other devices any time and anywhere.

In a study by [Carpenter and Olson(2012)](https://www.researchgate.net/publication/51519245_Are_Pictures_Good_for_Learning_New_Vocabulary_in_a_Foreign_Language_Only_If_You_Think_They_Are_Not), vocabulary learning from picture-word pairing was more effective than words translated in native language. 

The game is suitable for children, English learners and anyone, let's increase your vocabulary list today!

## CONTENTS

* [UX - User Experience](#ux)
  * [Wireframes](#wireframes)
  * [Colours Theme](#colours-theme)
  * [Typography](#typography)
  * [User stories](#user-stories)

* [Features](#features)
  * [Header](#header)
  * [Home page](#home-page)
  * [The Game Section](#the-game-section)
  * [Notified Pop-up](#notified-pop-up)
  * [Game Over](#game-over)
  * [The Footer](#the-footer)
  * [Features left to implement](#features-left-to-implement)

* [Testing](#testing)
  * [Bugs discovered](#bugs-discovered)

* [Deployment & Local deployment](#deployment-&-Local-deployment)
  * [Deployment](#deployment)
  * [Local Deployment](#local-deployment)

* [Credits](#credits)
  * [Content](#contents)
  * [Media](#media)
  * [Code](#code)
  * [Acknowledgments](#acknowledgments)


## UX

My goal is to make one page game site that is simple and easy for everyone to nevigate and play the game. The Home page start with an intruction and a Play button, when users click Play, the game section will appear and the game starts. The game contains images that will give you an ideal of the guessing word and other features (you can see them in details on the features section)
The final section is when the game over, users will see their total score and if they want to play again, there is a button to click to play again or as many time as they want.
This single page game site also allows me to design an interested game site and create functionalities in the game in the managable way. 

### User stories
1. As a parent of my children, I want to see a site that has easy and simple instructions for my children to understand and want to play the game.
2. As a user, I want to see my score so that I know how many scores I received.
3. As a user, I want to see how many words left so that I know where I am in the game.
4. As a user, I want to have some clues to help me guess the word so that I do not feel the game is too difficult.
5. As an English learner, I want to learn new words so that I can expand my vocabulary skill.

### Wireframes
[Home](/documentation/wireframe/homepage.png)

[Game page](/documentation/wireframe/gamepage.png)

[Game Over page](/documentation/wireframe/gameoverpage.png)

[404 page](/documentation/wireframe/404page.png)


### Colours Theme
The Guess Word Game page is a user-friendly website so the main colours I chose are blue, nice and cool tones. My color theme inspired by [Peacock's Gaze color combination](https://www.canva.com/colors/color-palettes/peacocks-gaze/) and red color with all small details. Moreover, I used [WebAIM:Contrast Checker](https://webaim.org/) to check the contrast of my colours to ensure they are easy to read for users.

![The colour theme of the website](/documentation/readme/colour-theme.png)

### Typography
I used [Poppins](https://fonts.google.com/specimen/Poppins) because It's versatile and modern style.
Additionally, I use [Font Awesome](https://fontawesome.com/) for icons in the game to make the site casual and friendly and for my social media icons in the footer to help users quickly and easily identify my social media sites.


## Features

### Header

The header contains the banner of the website, Guess word. It is simple but concise. The banner will display on the top of the website at all time so users have an accessible shotcut to go back to the home page anytime.

![Screenshot of the banner in the website](/documentation/readme/banner.png)

### Home page

The home page include the banner, the instruction (How to play button) and a play button. This landing page is clean and allows users to click on How to play to read the instruction before start playing game. The play button has a hover color red when mouse is overed to stimulate users to click play.

![Screenshot of the home page in the website](/documentation/readme/home-page.png)

- The instruction informs users of how to play the game with clear instructions.

![Screenshot of the instruction in the website](/documentation/readme/instruction.png)

### The Game Section

Now, the game starts! The game section includes the banner, 2 images, timer, score, a hint and a number that show how many word left. Each round, the user will have 30 seconds to guess a word which makes the game excited. But not too hard so a hint will be a hero to help users. Score feature allows users to see how many score they've collected and page number allows users to know where they are in the game and how many word left to play. 

![Screenshot of the game section in the home page](/documentation/readme/game-page.png)

### Notified Pop-up

The notified Pop-up allows users to get a result of their guess. When users click OK button, the notified pop-up will display to let users know the result of the answer. Correct answer will display correct and current score will increase. Incorrect answer will display a correct word and definition so users get to learn new word and know what the word means. The input needs to fill out before moving to the next word.

- A pop-up to informs users to type in an answer before moving on the next word.

![Screenshot of the an empty input pop-up](/documentation/readme/empty-input-popup.png)

- A pop-up to informs users that the answer is correct.

![Screenshot of the an correct input pop-up](/documentation/readme/correct-popup.png)

- A pop-up to informs users that the answer is incorrect.

![Screenshot of the an incorrect input pop-up](/documentation/readme/incorrect-popup.png)

- A pop-up to informs users that the time is up.

![Screenshot of the an  timeUp pop-up](/documentation/readme/timeup-popup.png)

### Game Over

The game over section includes the banner, Game over text, total score and a play again button. This section allows users to get the result of the game and see how many words they knew. Users can play as many time as they want by clicking the play again button.

![Screenshot of the game over page ](/documentation/readme/game-over-page.png)

### 404 page

The 404 page will displayed if the user navigate to a broken link.

![Screenshot of the 404 page in the website](/documentation/readme/404-page.png)


## Future Features

High score records
- I would like to add user high score records to engage more users to play or want to beat the high score.

Add more words into word list
- I would like to have many more words in the wordlist so users can have more word to guess and learn from the website.


## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.


### Bugs discovered
- When the instruction modal display on a mobile phone, the close button position is too low. To improve this, I adjust the padding in CSS to ensure that the button position is fit the phone screen and other screen.
- When user fill in a correct answer with the uppercase, the function checked as a wrong answer. To improve this, I added .toLowerCase() in the checkAnswer function to convert whatever users types in, it will be compared in a case-insensitive manner. 
- When user is typing the input on a mobile device, the entire page is shifted up, pushing the banner out of the view and the pop-up button not working properly. To fix this issue, I add interactive-widget property set to resizes-content to the meta tag, forces the browser to use the previous behavior, where both the Visual and Layout viewports are resized. - Resource from [Stackoverflow](https://stackoverflow.com/questions/77812591/when-opening-the-keyboard-on-mobile-how-can-i-force-my-content-to-shrink-to-fit)



## Deployment & Local deployment
### Deployment

This site was deployed to GitHub page. The steps to deploy are as folows:
1. In the GitHub repository, go to setting tab.
2. From the source section drop-down menu, select the Master Branch.
3. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The site is deployed using GitHub Pages - [The Guess Word Game](https://chatlada-nina.github.io/TheGuessWordGame/) 

### Local Deployment

#### How to Fork

To fork the repository:
1. Login (or sign up) to Github.
2. Go to repository for this project, [chatlada-nina/TheGuessWordGame](https://github.com/Chatlada-Nina/TheGuessWordGame)
3. Click the fork button in the top right corner.

#### How to clone

To clone the repository:
1. Login (or sign up) to Github
2. Go to repository for this project, [chatlada-nina/TheGuessWordGame](https://github.com/Chatlada-Nina/TheGuessWordGame)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Credits

### Content
- The font styles in the Guess word game website were taken from Google Fonts [Poppins](https://fonts.google.com/specimen/Poppins)
- The icons in the website were taken from [Font Awesome](https://fontawesome.com/)
- Wireframes I have created in [Canva-whiteboard](https://canva.com/)
- The definitions of words were modified from [Microsoft Copilot](https://copilot.microsoft.com/)
- The introduction, guessing words including the hint texts were modified by myself.
- The Modal of Instruction was learned and modified from [Specific Youtube Tutorial](https://www.youtube.com/watch?v=XH5OW46yO8I)
- The code to create a function that randomly selects an object in the array. Using Fisher Yates Shuffle and learned from [Specific Youtube Tutorial](https://www.youtube.com/watch?v=FGAUekwri1Q) and modified to suit the website needs.
- The code for the timer was learned and modified to suit my project from tutorials from [W3Schools](https://w3Schools.com/) and [Specific Youtube Tutorial](https://dev.to/gloriasilver/how-to-schedule-tasks-using-javascript-timers-and-intervals-4385?form=MG0AV3)
- Modified and combined components methods from documentations and tutorials on CI learning platform, [W3Schools](https://w3Schools.com/), [MDN Web Docs](https://developer.mozilla.org/en-US/) and [StackOverFlow](https://stackoverflow.co/)  
### Media
- All images were taken from [Pexels](https://pexels.com/)

### Acknowledgments
I would like to thank you the following people:

- Jubril Akolade - My code Institute mentor who gave me persistent guidance, encouragement, and invaluable feedback throughout my project to become a better developer. Thank you.
- Code Instutute Team and the slack community that shared ideas, solutions and inspirations during the journey. Thank you.
- My partner, Eric who is always supportive and believe in me. Cheer me up when I felt overwelming and struggle. Thank you.
- My sister, May who is a non-tech person but always--always there to listen to my struggle and my frustration with debugging and bla bla. It means a lot to me that I could talk to her and knew that she would understand and support me in everyway. Thank you.