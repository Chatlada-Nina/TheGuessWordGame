# The Guess Word Game

![The website shown on a variety of screen sizes](/documentation/readme/screen-responsive.png)

**The Guess Word Game** is my second project for Code Instutute. The idea started with a popular TV program which I used to watch with my family in my hometown. They will show the audients an image to guess a secret word and the audients need to answer to collect the score, who is collected the highest score will win. This game is very fun and gave me the idea to create a similar game with the purpose of learning and making the game more accessable, users can learn and play the game on their phone and devices any time and anywhere.

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

My goal is to make one page game site that is simple and easy for everyone to nevigate and play the game. The Home page start with an intruction and a Play button, when users click Play, the game section will appear and the game starts. This single page game site allows me to design an interested game site and create functionalities in the game in the managable way. 

### User stories
1. As a parent of my children, I want to see a site that has easy and simple instructions for my children to understand and want to play the game.
2. As a user, I want to see my score so that I know how many scores I received.
3. As a user, I want to see how many words left so that I know where I am in the game.
4. As a user, I want to have some clues to help me guess the word so that I do not feel the game is too difficult.
5. As an English learner, I want to learn new words so that I can expand my vocabulary skill.

### Wireframes
[Home](/documentation/wireframe/Home.png)

[Game page]()

[Game over page]()


### Colours Theme
The Guess Word Game page is a user-friendly website so the main colours I chose are blue, nice and cool tones. I used [Peacock's Gaze color combination](https://www.canva.com/colors/color-palettes/peacocks-gaze/) and red color with all small details. Moreover, I used [WebAIM:Contrast Checker](https://webaim.org/) to check the contrast of my colours to ensure they are easy to read for users.

### Typography
I used [Poppins](https://fonts.google.com/specimen/Poppins) because It's versatile and modern style.
Additionally, I use [Font Awesome](https://fontawesome.com/) for my social media icons in the footer to help customers quickly and easily identify my social media sites.


## Features

### Header

![Screenshot of the navigation bar in the website](/documentation/readme/navigation-bar.png)

### Home page


![Screenshot of the home page in the website](/documentation/readme/home-page.png)

### The Game Section


![Screenshot of the programs section in the home page](/documentation/readme/program-section.png)

### Notified Pop-up

### Game Over

![Screenshot of the testimonials in the homepage](/documentation/readme/testimonials.png)

### The Footer


![Screenshot of the footer in the website](/documentation/readme/footer.png)


## Features left to implement



## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.


### Bugs discovered
- When the instruction modal display on a mobile phone, the close button position is too low. To improve this, I adjust the padding in CSS to ensure that the button position is fit the phone screen and other screen.
- When users fill in a correct answer with the uppercase, the function checked as a wrong answer. To improve this, I added .toLowerCase() in the checkAnswer function to convert whatever the users types in, it will be compared in a case-insensitive manner. 



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
- The font styles in the Guess Word Game website were taken from Google Fonts []()
- The icons in the website were taken from [Font Awesome](https://fontawesome.com/)
- Wireframes I have used is [Canva](https://canva.com/)
- The definitions of words were modified from [Microsoft Copilot](https://copilot.microsoft.com/)
- The introduction, guessing words including the hint texts were modified by myself.
### Media
- All images were taken from [Pexels](https://pexels.com/)
### Code


### Acknowledgments
I would like to thank you the following people: