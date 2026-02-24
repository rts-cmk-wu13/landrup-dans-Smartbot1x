[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/hVu0ZQAO)

api github
https://github.com/rts-cmk/landrup-dans-api

## Install

```
npm install
```

## Run

```
npm start or run dev
```

## Documentation

http://localhost:4000

### Predefined Users

There are 10 predefined users in the API:

| id  | username    | password | age | role       |
| --- | ----------- | -------- | --- | ---------- |
| 1   | instructor1 | 1234     | 24  | instructor |
| 2   | instructor2 | 1234     | 32  | instructor |
| 3   | instructor3 | 1234     | 27  | instructor |
| 4   | instructor4 | 1234     | 31  | instructor |
| 5   | user1       | 1234     | 14  | default    |
| 6   | user2       | 1234     | 17  | default    |
| 7   | user3       | 1234     | 21  | default    |
| 8   | user4       | 1234     | 24  | default    |
| 9   | user5       | 1234     | 52  | default    |
| 10  | user6       | 1234     | 51  | default    |

logpå
mohamed
1234

## Getting Started clone my repo then run these commands

First install , then run the dev:

```bash
npm i
// then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## folder struktur

```
├── 📁 app
│   ├── 📁 (cookie)
│   │   ├── 📁 aktiviteter
│   │   │   ├── 📁 [id]
│   │   │   │   └── 📄 page.jsx
│   │   │   └── 📄 page.jsx
│   │   └── 📁 profile
│   │       ├── 📁 hold
│   │       │   ├── 📁 [id]
│   │       │   │   └── 📄 page.jsx
│   │       │   └── 📁 opret
│   │       │       └── 📄 page.jsx
│   │       └── 📄 page.jsx
│   ├── 📁 logind
│   │   └── 📄 page.jsx
│   ├── 📁 opret
│   │   └── 📄 page.jsx
│   ├── 📁 unauthorized
│   │   └── 📄 page.jsx
│   ├── 📄 --global-not-found.js
│   ├── 📄 error.js
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.js
│   ├── 📄 loading.js
│   ├── 📄 not-found.js
│   ├── 📄 page.js
│   └── 📄 template.js
├── 📁 components
│   ├── 📁 activity
│   │   ├── 📄 ActivityCard.jsx
│   │   ├── 📄 ActivityDetail.jsx
│   │   ├── 📄 ActivityPage.jsx
│   │   ├── 📄 SignupButton.jsx
│   │   ├── 📄 index.jsx
│   │   └── 📄 signUpAction.js
│   ├── 📁 auth
│   │   └── 📄 AuthLayout.jsx
│   ├── 📁 contactform
│   │   ├── 📄 action.js
│   │   └── 📄 index.jsx
│   ├── 📁 home
│   │   ├── 📄 Hero.jsx
│   │   ├── 📄 TestimonialSlider.jsx
│   │   ├── 📄 card.jsx
│   │   ├── 📄 newsletterAction.js
│   │   └── 📄 newsteller.jsx
│   ├── 📁 loginForm
│   │   ├── 📄 LoginForm.jsx
│   │   ├── 🎨 _form.css
│   │   └── 📄 action.js
│   ├── 📁 profile
│   │   ├── 📄 CreateClassForm.jsx
│   │   ├── 📄 InstructorClassCard.jsx
│   │   ├── 📄 InstructorProfileContent.jsx
│   │   ├── 📄 ProfileHeader.jsx
│   │   ├── 📄 RegisteredClassCard.jsx
│   │   ├── 📄 UserProfileContent.jsx
│   │   ├── 📄 createActivityAction.js
│   │   └── 📄 index.js
│   ├── 📁 signupform
│   │   ├── 📄 CreateUserForm.jsx
│   │   └── 📄 action.js
│   ├── 📁 ui
│   │   └── 📄 button.jsx
│   ├── 📄 LogoutAction.js
│   └── 📄 navbar.jsx
├── 📁 lib
│   ├── 📄 dal.js
│   ├── 📄 schemas.js
│   └── 📄 secondline.js
└── 📄 proxy.js
```
