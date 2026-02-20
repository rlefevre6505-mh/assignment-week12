Setup:
npm i @clerk/nextjs
npm i @clerk/elements
npm i react-icons

# Deleting table entries wit hno primary key:

<!-- example: -->

db.query(
`DELETE FROM w12_user_locations WHERE user_id =$1 and location_id =$2`,
[4, 193],
);

<!-- README for push -->
<!-- README -->

## Project name: Week 12 Assignment - Kickabout App

Deployment Link: https://kickaboutapp.vercel.app/
Repo Link: https://github.com/rlefevre6505-mh/assignment-week12

Presentation: https://docs.google.com/presentation/d/1D6kjNIYgTfggL-azr4zgnLq0JPysec3Ln9qeyXiqcJU/edit?slide=id.g3bf25e7698d_0_35#slide=id.g3bf25e7698d_0_35

### Team Members:

Amy Tuck, Richard Le Fevre, Sinéad McIntyre, Tom Stevenson

### Project Description:

Kickabout is designed to take away the limitations people face when wanting to play sports - either them not knowing people who are interested in playing sports with them, not being able to stick to a rigid schedule when attending local clubs, or not knowing the rules to play properly. This app helps users to find others in their local area with similar interests to meet up with and play casual sport with. The app also has additional levels for people to find people to teach if they are experienced in a particular sport, or people to learn to play properly with an experienced user.

### Problem Domain:

People who enjoy playing sports with no commitments/rules/leader boards or just want to move their bodies for fun often miss out on physical activity due to not having friends with similar interests or not being able to commit to local clubs that play competitively and have to stick to a rigorous schedule. 

### User Stories:

As a user, I want to be able to find other people in my area who are interested in the same activities as me (at a similar level)
As a user I want to be matched with other people by activity, level, and location
As a user, when I sign up I want to create a user profile including my location, what activities I’m interested in and my level for each activity
As a user I want to be able to edit my profile later
As a developer, I want to start with a pre-set list of activities for users to choose from

### Wireframes:

Low-fidelity (on the main FigJam board) https://www.figma.com/board/6UjVLY45LZNStugd6Gwc6a/Week-12-Project?node-id=97-349&t=zNWOFWDfhHf9z9Ga-0
High-fidelity: https://www.figma.com/design/jMi3yuzSc3zktMhAYGJ7VL/Week-12-Wireframe?node-id=0-1&p=f&t=3wyUqJFVMnQ3JHXl-0

### A list of any libraries, frameworks, or packages that your application requires in order to properly function:Next.js

React
pg package
Clerk
Supabase
Deployed on Vercel

### Lighthouse report:

https://www.figma.com/board/6UjVLY45LZNStugd6Gwc6a/Week-12-Project?node-id=97-349&t=zNWOFWDfhHf9z9Ga-0
See the section on accessibility testing (section 6) for individual lighthouse reports and WAVE AIM scores for each page

## Instructions on how to run your app:

- Users need to be signed in to use the features on this app. Starting on the home page, users will need to either sign up if they don’t already have an account, or sign in if they already have an account with Kickabout.
- To sign up, click the sign up button on the homepage which will redirect you to the sign up page to create an account with your email address and password. Once you have submitted these details, you will need to authenticate your account with a verification code that is sent to your email address. You may need to verify that you are human with a captcha.
- You will then be taken through a few more steps to create your profile: basic information about you such as user name, date of birth, your gender, and an optional bio to tell other users about yourself.
- You’ll then be taken to another page where you can choose your location.
- Lastly, you will be taken to a final page where you can select up to three sports you want to play and which levels you would like to play them with other users.
- After you have finished this process, you will be able to view other users who you are matched with based on your location and sport. You can click on the other users’ profiles for more information.
- You can also edit your own profile details if you need to update any details about yourself that were entered incorrectly, or need to update your location or preferred sports and / or levels.
- From the feed page with the matches, the user can filter by sport (they can choose from any of the sports they have on their profile) and they will be shown only users in their location who do that particular sport. They can also sort the names alphabetically.

## Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.
We feel that we have met all of the “web fundamentals”, “programming logic”, “dev skills and industry practices”, and “professional skills” requirements requirements of the mark scheme and the majority of the “modern dev tools”.

### 🎯 Were there any requirements or goals that you were not quite able to achieve? 🎯 If so, could you please tell us what was it that you found difficult about these tasks?We did not implement useContext or useReducer as we did not feel that either were necessary for our website.

- We had intended to use an additional component library for enhancing the user experience but did not manage to in the end, as we ran out of time.
- We also ran out of time to check every page for screen reading but did test the homepage and matches page.
- We had also hoped to allow users to connect with each other if they had been matched, then to access chat functionality to allow them meet, but also ran out of time before attempting this.

### What went really well and what could have gone better?

#### What went well:

The majority of the time we as a team were able to agree on the next steps and assigned tasks.
We were able to do paired programming when necessary, breaking into smaller rooms on Discord so as not to disturb the rest of the team. We also used group screen-sharing to work as a team on debugging a number of critical issues.
Communication was great throughout the project, using the Google Meet breakout room continuously and communicating via our Discord group chat after working hours.
We were able to work through all merge conflicts together and made regular commits to GitHub when we were all comfortable to do so at the same time.
We managed to make the pages responsive so they are mobile friendly - especially the navbar on the profile page will adjust to an app-style nav bar when on a narrower screen
We managed to set up a custom onboarding flow, incorporating Clerk authentication and our own forms in a set sequence, all styled in line with the app’s overarching design. We also managed to set up a matching flow of profile edit forms to allow users to edit their profile, location and sports choices. In the profile-edit flow the existing information is pulled from the database and populates the form, with certain queries set inside conditional logic to ensure no null values are passed ot the database.

#### What could have gone better:

We had some quite ambitious goals for the overall MVP and as we worked through the project, we realised that we would have to make some things stretch goals due to time limitations and would need to redo some of the initial user stories (such as enabling matches to message each other to arrange meeting, allowing users to add more than 1 location to their profile etc.).
We couldn’t figure out why when we all merged and pushed, certain bits of code that were essential for functionality kept getting commented out.
We started getting errors at the very end of the project - sometimes the app worked and sometimes not, and we had a lot of debugging to do together

#### Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

Initially when testing for accessibility using WAVE and Lighthouse reports, the main thing that was affecting accessibility was the contrast between the smaller text and background colour. We used the WebAIM Contrast Checker to adjust the colours which improved our accessibility scores. The colours we used were also checked to still have a good contrast for people with colour-blindness using Adobe’s “colour-blind safe” accessibility tool.
When building the complex query for the feed page (to find and filter users based on location and sport choices) the postgreSQL docs and some pages on MDN and W3 were helpful in finding and understanding the right SQL statements to use and understanding how to use them.
Tom set up an API query for towns api, which lists all cities/towns/villages etc and built a tool to filter the data to only include towns/cities, worked with paginated data and ran on intervals to ensure api limits were not exceeded while checking database to ensure each entry updated successfully.

#### Describing errors or bugs you encountered while completing your assignment.

We had some issues with the redirect from the profile setup form pages 2 to 3. Bertie suggested it was something to do with the component being a mixture of server and client functions in the same thing. It turned out to be a div element had been changed into a form element which messed with the server and client functionality that had been implemented. Once we changed it back to a div element, it worked.
We had plenty of “this thing is undefined” errors throughout on various pages. It seemed that some people were getting these errors and some weren’t at the same time.
Sometimes during pushes and merges, bits of code that no one had touched were being commented out, so we had to undo it and push again.
Towards the end of the project (and past the code lock) we started having issues that didn’t come up before - mainly with the matches list component not rendering the matches on the page (even though the console showed the match functionality working). Some of these issues were intermittent and some occurred for some users and not others, regardless of the browser used or clearing cookies/cache.

### References:Third-party APIs, CSS resets, icons, images...

- UK Towns API
- React Icons
- Flaticons
- Lottiefiles
