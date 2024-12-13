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
* Mobile Devices:
  * IPhone 13
  * Samsung galaxy Note 9

Each device tested the site using the following browsers:
* Google Chrome
* Safari

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Site's logo | Link directly users back to the home page | Clicked logo | Home page reloads | Pass |
| Home | Link to the home page and show in darker color when it's active| Clicked on the text | Home page reloads | Pass |
| Spa Programs | Link directly users to the Programs page | Clicked on the text | Programs page opens | Pass |
| Contact | Direct users to the contact section on the footer | Clicked on the text | Direct users to the contact section on the footer | Pass |
| BOOK NOW Button | Direct users to the booking page | Clicked on button | Direct users to the booking page | Pass |
| All buttons - hover effect | All brown buttons with white text should change to light brown with dark-gray text when hovered over. | Hovered over each button on the page | Each button displayed correctly styling when hovered over | Pass |
| Pointer Cursor | The pointer should display when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the pointer cursor | Pass |
| Link "See all spa programs" | Link directly users to the Programs page | Clicked on the text | Programs page opens | Pass |
| Link "See all spa programs" - hover effect | Text color should change to light brown color when hovered over. | Hovered over the text | The text displayed correctly styling when hovered over | Pass |
| Social media icons | Link directly users to each social media sites | Clicked on each icon | Social media site open in a new tab | Pass |
| Social media icons - hover effect | Icon's color should change to light brown color when hovered over. | Hovered over each icon | The icons displayed correctly styling when hovered over | Pass |


`Programs Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Site's logo | Link directly users back to the home page | Clicked logo | Home page reloads | Pass |
| Home | Link users back to the home page | Clicked on the text | Home page reloads | Pass |
| Spa Programs | shows in darker color when it's active | Clicked on the text | Programs page reloads | Pass |
| Contact | Direct users to the contact section on the footer | Clicked on the text | Direct users to the contact section on the footer | Pass |
| BOOK NOW Button | Direct users to the booking page | Clicked on button | Direct users to the booking page | Pass |
| All buttons - hover effect | All brown buttons with white text should change to light brown with dark-gray text when hovered over. | Hovered over each button on the page | Each button displayed correctly styling when hovered over | Pass |
| Pointer Cursor | The pointer should display when users move the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the pointer cursor | Pass |
| Social media icons | Link directly users to each social media sites | Clicked on each icon | Social media site open in a new tab | Pass |
| Social media icons - hover effect | Icon's color should change to light brown color when hovered over. | Hover over each icon | The icons displayed correctly styling when hovered over | Pass |


`Booking Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Site's logo | Link directly users back to the home page | Clicked logo | Home page reloads | Pass |
| Home | Link users back to the home page | Clicked on the text | Home page reloads | Pass |
| Spa Programs | Link users back to the home page | Clicked on the text | Programs page reloads | Pass |
| Contact | Direct users to the contact section on the footer | Clicked on the text | Direct users to the contact section on the footer | Pass |
| BOOK NOW Button | Direct users to the booking page | Clicked on button | Direct users to the booking page | Pass |
| Radio button | Always show checked on New button and users can check only one radio button either New or Old | Clicked on each button | Can check only one radio button either New or Old | Pass |
| Fullname input | Users must fill in their name before submitting the form| Leaved it empty and tried to click Submit | A required message popped up | Pass |
| Phone number input | Users must fill in their phone number before submitting the form | Leaved it empty and tried to click Submit | A required message popped up | Pass |
| E-mail input | Users must fill in their e-mail before submitting the form| Leaved it empty and tried to click Submit | A required message popped up | Pass |
| Select programs input | Users must select a program before submitting the form| Tried to click Submit without select any program | A required message popped up | Pass |
| Date and Time input | Users must select date and time before submitting the form| Tried to click Submit without select any date and time | A required message popped up | Pass |
| Message input | User can write something there or leave it empty | Writed something and clicked submit, leaved it empty and clicked submit | Direct users to the success page | Pass |
| All buttons - hover effect | All brown buttons with white text should change to light brown with dark-gray text when hovered over. | Hover over each button on the page | Each button displayed correctly styling when hovered over | Pass |
| Pointer Cursor | The pointer should display when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the pointer cursor | Pass |
| Social media icons | Link directly users to each social media sites | Clicked on each icon | Social media site open in a new tab | Pass |
| Social media icons - hover effect | Icon's color should change to light brown color when hovered over. | Hovered over each icon | The icons displayed correctly styling when hovered over | Pass |


`Success Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Site's logo | Link directly users back to the home page | Clicked logo | Home page reloads | Pass |
| Home | Link users back to the home page | Clicked on the text | Home page reloads | Pass |
| Spa Programs | Link users back to the spa programs page | Clicked on the text | Programs page reloads | Pass |
| Contact | Direct users to the contact section on the footer | Clicked on the text | Direct users to the contact section on the footer | Pass |
| BOOK NOW Button | Direct users to the booking page | Clicked on button | Direct users to the booking page | Pass |
| Return to the home page Button | Direct users back to the home page | Clicked on button | Direct users to the home page | Pass |
| All buttons - hover effect | All brown buttons with white text should change to light brown with dark-gray text when hovered over. | Hovered over each button on the page | Each button displayed correctly styling when hovered over | Pass |
| Pointer Cursor | The pointer should display when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the pointer cursor | Pass |
| Social media icons | Link directly users to each social media sites | Clicked on each icon | Social media site open in a new tab | Pass |
| Social media icons - hover effect | Icon's color should change to light brown color when hovered over. | Hovered over each icon | The icons displayed correctly styling when hovered over | Pass |