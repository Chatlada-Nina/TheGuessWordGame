# The Guess Word Game - Testing

![The website shown on a variety of screen sizes](/documentation/readme/screen-responsive.png)

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [HTML](#html)
  * [CSS](#css)
  * [Lighthouse](#lighthouse)
* [MANUAL TESTING](#manual-testing)
  * [Full Testing](#full-testing)

## AUTOMATED TESTING

### HTML 
- I used [W3C Markup Validation Service](https://validator.w3.org/) to check and validate the HTML code.

  - [index.html](/documentation/readme/index-validator-results-before.png) - There are 3 issues that need to be fixed. The first 2 issues are from trailing slash on void element had no effect and intereacted badly with un quoted attribute values. To solve these issues, I removed the unneccesary slash from the elements. The last issue is the document is not mapable to XML 1.0 due to two consecutive hyphens in a comment. To solve this issue, I removed the two consecutive hyphens from the comment.  

  - [index.html](/documentation/readme/index-validator-results-after.png) - After fixing issues, the result of the validation is Passed.

  - [404.html](/documentation/readme/programs-validator-results.png) - Passed.
  

### CSS 
- I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to check and validate the CSS code.

  - [style.css](/documentation/readme/CSS-validator-results.png) - Passed, no errors found.

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website. 

- To improve the Lighthouse accessibility score, I add aria-label attribute to my social media icon links in the footer, to fullfill th requirement of the screen readers.


![index.html](/documentation/readme/lighthouse-accessibility-score.png)

- After the improvement, The total score looks great!

![index.html](/documentation/readme/lighthouse-performance-final.png)


## MANUAL TESTING

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Macbook Air 2012 13 inch screen
  * Lenovo IdealPad Slim 5x 14 inch screen
* Mobile Devices:
  * IPhone 13
  * Samsung galaxy Note 9

Each device tested the site using the following browsers:
* Google Chrome
* Safari

`Web Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Site's banner | Link directly users back to the home page | Clicked banner | Home page reloads | Pass |
| How to play | Link to the instruction of the game| Clicked on the text | The instruction displays | Pass |
| Close button in on the instruction | close the instruction of the game| Clicked on the text | The instruction closes | Pass |
| PLAY Button | Direct users to start the game | Clicked on the text | Game section opens | Pass |
| All buttons - hover effect | All blue backfround-color buttons with white text should change to red background color when hovered over. | Hovered over each button on the page | Each button displayed correctly styling when hovered over | Pass |
| Pointer Cursor | The pointer should display when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the pointer cursor | Pass |
| Game section | Displays images, an input field, OK button, Timer, A hint, Score and Turn-page counting | Clicked on the Play button | Game section displays all elements | Pass |
| Timer | Starts count down 30s-restart every round-when time is up, the pop-up displays with a notification | Clicked on the Play button, the OK button and waited until the timer over | Timer starts count down in every round and the notification displays when time is up | Pass |
| Input filed | Requires some text before moving on to the next round | Click OK with empty field | The pop-up displays a notification | Pass |
| Social media icons - hover effect | Icon's color should change to light brown color when hovered over. | Hovered over each icon | The icons displayed correctly styling when hovered over | Pass |
