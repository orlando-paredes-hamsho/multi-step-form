# Multi Step Form

- [Local Development](#local-development)
  * [Requirements](#requirements)
  * [Start Local Environment](#start-local-environment)
  * [Run Tests](#run-tests)


## Local Development

### Requirements
- [Install Node](https://nodejs.org/en/)
- [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)
- Clone this repository
From your console:
```
git clone git@github.com:orlando-paredes-hamsho/multi-step-form.git
```

- Install dependencies.

```
cd multi-step-form
yarn install
```

### Start Local Environment
```
yarn dev
```
Once it finishes building, app will be available at localhost:3000

### Run Tests

Check for styling, this script will additionally run pre commit
```
yarn lint
```

You may verify that your changes build properly with the following script.
It will also run on each pull request against the main branch
```
yarn build
```
