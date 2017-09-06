## Description
Consider a company that sells travel insurance policies. They
determine the price of the policy based on the age of the traveller
and the length of their trip as specified in the table below:

| Age of traveller | 18-49 | 50-59 | 60-69 |
|------------------|-------|-------|-------|
| Length of trip   |       |       |       |
| 1-7 days         | $50   | $60   | $70   |
| 8-14 days        | $60   | $73   | $80   |
| 15-21 days       | $70   | $80   | $90   |
| 22+ days         | $82   | $90   | $100  |

Please address the following user story within a simple single-page app. Ideally making use of React, and Redux too if you wish.

> As a customer, I want to get a price for a trip by supplying my age and trip length.

Bonus challenge 1: use Airbnb's [react-dates](https://github.com/airbnb/react-dates) library to collect the departure and
return date. Calculate the length of the trip from these dates.

Bonus challenge 2: insurance isn't offered to travellers younger than 18 and over 69 years of age. Include appropriate feedback to the user if they enter ages that aren't covered.

Please include tests where you feel they are appropriate, and show your progress by using Github to track your commits.

## Implementation details

As requested, this challenge was completed as a Single Page App using React and Redux as a state management container.
It's based on [create-react-app](https://github.com/facebookincubator/create-react-app) with ejected
config in order to provide more flexibility and access to the webpack config.

### Technology Stack
 - babel
 - webpack
 - npm
 - react
 - redux
 - react-dates
 - css-modules
 - postcss
 - reselect
 - eslint
 - jest

## Assumptions

Given that the main purpose of the app is to display calculated price to the user, I decided not to store result in
the state/calculate in action creator/reducer/etc, but rather use selectors and reselect to calculate a price and
provide it as a prop for corresponding  container/component.
Obviously, if result needs to be persisted/be part of POST request - that piece of bussiness logic should be moved out of selector.

As you may notice, it's quite an over engineered solution, but at the same time it's a good and almost-production-ready
project foundation that I'd be happy to continue to work with.

## Possible Improvements

- add Flow
- use the actual [redux-form](http://redux-form.com/7.0.4/)
- replace object literals and price maps with something more advanced and flexible.
- provide a way to add more travellers


## Usage

`npm start or yarn start`

Runs the app in development mode and opens http://localhost:3000 in the browser.

`npm test or yarn test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

`npm run build or yarn build`

Builds the app for production to the build folder.
