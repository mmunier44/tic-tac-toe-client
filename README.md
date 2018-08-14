# General Assembly WDI Project 1: Tic-Tac-Toe

![Bork Bork Tic Tac Toe]

For the first solo project at General Assembly Boston's Web Development Intensive my goal was to code a single-page application (SPA) that interacts with a user by dynamically rewriting the current page rather than loading entire new pages from a server.

This approach avoids interupption of the user experience between successive pages, making the application more like a desktop application.

In this Tic Tac Toe SPA all of the necessary code - HTML, JavaScript, CSS and jQUery - is retreived with a single page load, or the further data can be dynamically loaded in response to user input through API calls.

I was given the background structure of an API and tasked in creating a visual game board, a complete CRUD user interface and to create the game logic to accurately update the game board.

There is a reason why this is called Bork Tic Tac Toe and not AWESOME TIC TAC TOE.

### Thought Process, Wireframe and the big BORK

I was super eager to get into the coding and just spending all of that time at the keyboard getting the muscle memory embedded into my classically trained pianist hands and thought hey, its just Tic Tac Toe, how hard can that be?

And yes I am now very very familiar that an array starts at 0.

![Wireframe] https://imgur.com/a/kNw1ZUc "WaarGames Tic Tac Toe"

##### Speedy API CRUD and then the THUD of a really big Bork hitting the modal box

My basic approach to tackling this project was setting up all of the API calls first.

Thinking that setting up the UX/UI simple CRUD interface with minimal styling would allow me to validate that all of the background API calls would succeed regardless of further input

###### (INTERNAL CRINGE FROM EVERY OTHER DEVELOPER... EVER)

and then moving on to the game logic.

The genius plan was to really impress on superperson code for the game logic that would really highlight my data background, and when I got stuck on the game logic I would take time working on the visual aspects of the SPA.

AND THEN

Start
Testing
Everything

Yeah, it worked out exactly as well as you everybody that has ever written a single word about coding on Quora, Kaggle, StackSocial or even Reddit has ever written.

## WAT NAN TYPE UNCAUGHT TYPE ERROR: Cannot read property "[MY LIFE]" of undefined

After getting the CRUD setup and a very basic Bootstrap layout a deep dive into the game logic seemed to be the next path since all of the CRUD based API calls were all showing successful console.logs I could go back and fix all of the little errors later.

####### let mildConfidenceLevelBecauseCrudWorked = (store.brain >= awesome) ? truthy or falsy : WRONG

After thinking that I had gotten most of the game logic done it was time to start testing.

Grunt Serve then start clicking around.

Wait

WAT

Why do no X's or O's populate at all now

Why can I place 2 X's in a row

Nothing is working and now it is too late to raise anything on the issue queue

#### What I Learned and Would do Differently

TEST EVERYTHING IN ADVANCE

Console.logs are not enough don't think you can fix a small problem in terms of scope but huge in terms of the data structure of the entire project later.

I did not set up my project plan and expectations of refactoring game logic before thinking about something simple as a click on the screen.

#### Developer Evolution Goals
//NOTE too many to list but will learn from this
