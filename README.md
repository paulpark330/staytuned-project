# StayTuned Project

## Subscribing to a product

![](https://github.com/paulpark330/staytuned-project/demo_1.gif)

## Changing the price as an admin

![](https://github.com/paulpark330/staytuned-project/demo_2.gif)

## Subscription email and unsubscribing

![](https://github.com/paulpark330/staytuned-project/demo_3.gif)

Create `.env` in the root directory

Follow instructions to [Sign in with App Passwords](https://support.google.com/accounts/answer/185833?hl=en) to connect your Gmail.

```
EMAIL=<Your Gmail Address>
PASSWORD=<App Password>
API_URL="http://localhost:9000/api"
DATABASE_URL=<**private**>
```
Send an email to dev.paulpark@gmail.com for `DATABASE_URL`

## Frontend 

Run `npm i` in both the root directory and run `npm run start`

Route to `/admin` and enter `admin` in the password input.

You will be able to change the price of the items in admin mode

## Backend

`cd` into the `api` directory and run `npm i` and run `npm run start`

