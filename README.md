# Overview
Thanks for your interest in annalise.ai. 😀

This exercise has been designed to demonstrate your skills and experience, and to provide talking points for your Round 
2 interview. 

The goal of this exercise is to provide a very simple full stack app

From a technical perspective, the solution should
 - Use TypeScript or Python (with type annotations)
 - On the frontend, use React with Typescript
 - Persist data to a database
 - Provide unit tests
 - Include a bare minimum authentication solution

Features
 - Route to get names and ids of 'widgets' (see below)
 - Route to delete an widget
 - UI that provides a list of widgets, and allows the user to delete a widget

The solution should include a README with instructions, and some justification of technology choices 
(i.e. replace this file)

We've provided an initial TypeScript / koa / react starter pack with react, koa, eslint, jest etc. and a suggested 
file structure to get you going quickly.

**However, you're under no obligation to use this.** If you wish, you can use next.js or similar instead.

## Your time

Your time is valuable. We've tried to balance our need to find committed, talented candidates with respect for your time.
We don't expect you to spend more than about 4 hours on this exercise.

Here are some corners you can cut.

### 'Widgets'?
 - i.e. just a list of strings, each with an id
 - Can be names of food, colours etc., just make up the data yourself
 - e.g. (blue, 1), (orange, 2)
 - Store these in a table in the database (by hand, or by script if you prefer)

### Deployment & dev-ops
 - Not needed. We'll talk about possible approaches in the interview 
 - Everything can be run locally i.e. cloud deployable, not cloud deployed

### Styling & CSS
 - We're just looking for a *demonstration of approach*, not beautifully styled components
 - i.e. use whatever tooling you prefer (styled components, scss etc.)

### Testing
 - Just unit tests - no need for integration & functional tests, unless you'd prefer those instead

### Authentication
 - Use middleware etc. to support the absolute bare minimum
 - (i.e. no need to store user tokens in the db etc.)
 - Looking for more of a proof of concept for discussion

### Database
 - Use e.g. mysql via docker compose
 - Or if you'd prefer, a cloud based database
 - No need for indices or optimisation of any kind
 - No need for automated db deployment, migrations etc

### File storage
 - Local file storage is ok, **however**
 - Try to abstract the storage, so it could, potentially, be changed to support AWS S3 or similar

# How will the exercise be evaluated?

Apart from meeting the above, we'll be looking at 
 - How have you organised the routes in a RESTful way?
 - Is the solution robust to bad inputs?
 - Limits e.g. on file sizes
 - How easy would it be for a colleague to pick up your solution and run it, and work on it, without assistance?
