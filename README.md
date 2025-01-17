# BingeList-v2

Newly improved BingeList beta is out. Capstone project.

![image](https://user-images.githubusercontent.com/38814279/210406560-2c542a90-243a-41c1-ab1a-4f7405084d02.png)

![image](https://user-images.githubusercontent.com/38814279/210406346-69d03c0d-97ec-4e05-9c22-3a681dab8ed9.png)

## Server

To start the server:
`cd server`
`npm run dev`
or
In root folder:
`npm run dev`

## Webui

To start the webui:
`cd webui`
`npm run serve`
or
`cd webui`
`npm run start`

## MBD and Font awesome

This installs both MBD and Font awesome -
https://mdbootstrap.com/docs/vue/getting-started/installation/

Setup:

- **Please choose type of installation:** Existing app
- **Free or Pro version?** Free
- **Select the styling option:** Compiled in the mdbvue package (CSS)
- **Add Roboto font?** Yes
- **Add Font Awesome 5?** Yes

## Just Font Awesome

Links on How to set up:

- https://fontawesome.com/v5.9/how-to-use/with-the-api/setup/library
- https://halilyuce.com/web/how-to-add-font-awesome-to-your-vue-3-project-typescript/

List of icons:

- https://fontawesome.com/icons?s=solid&m=free
- https://fontawesome.com/icons?s=regular&m=free
- https://fontawesome.com/icons?s=brands

## Google Auth

https://console.cloud.google.com/home/dashboard?project=bingelist

https://www.passportjs.org/docs/oauth2-api/

## Joi Validation

Used for back end API validation.

Express Validation
https://softchris.github.io/pages/joi.html
https://www.npmjs.com/package/joi/v/14.0.4

## Moment.js

NEVER USED. But possibly useful in future versions.

To parse and display dates in any timezone.
https://momentjs.com/timezone/

Format Dates in Any Timezone:

```
var jun = moment("2014-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

jun.tz('America/Los_Angeles').format('ha z');  // 5am PDT
dec.tz('America/Los_Angeles').format('ha z');  // 4am PST

jun.tz('America/New_York').format('ha z');     // 8am EDT
dec.tz('America/New_York').format('ha z');     // 7am EST

jun.tz('Asia/Tokyo').format('ha z');           // 9pm JST
dec.tz('Asia/Tokyo').format('ha z');           // 9pm JST

jun.tz('Australia/Sydney').format('ha z');     // 10pm EST
dec.tz('Australia/Sydney').format('ha z');     // 11pm EST
```

Convert Dates Between Timezones:

```
var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");

newYork.format();    // 2014-06-01T12:00:00-04:00
losAngeles.format(); // 2014-06-01T09:00:00-07:00
london.format();     // 2014-06-01T17:00:00+01:00
```

## Editor setup

If you are using VS code you should:

- Install EditorConfig for VS Code
  - Now your VSCode will use the common settings defined in .editorConfig
- Install ESLint extension
  - Configure it to validate .vue files (Settings -> ESLint -> Validate):

```
    {
      "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue"
      ]
    }
```

- Install Vetur
- Install Prettier
  - Check your prettier settings and make sure your Prettier Ignore Path is set to ./webui/.prettierignore
- You can now configure VSCode to lint/format on save (suggested) or manually run `npm run lint`.

## Eslint Cypress

https://openbase.com/js/eslint-plugin-cypress

`npm install eslint-plugin-cypress --save-dev`

Add an .eslintrc.json file to your cypress directory with the following:

```
{
  "plugins": [
    "cypress"
  ],
  "rules": {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error"
  }
}
```

## ESlint VScode

https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting
Adding Code Actions on Save
`.vscode/settings.json`

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```

## Search Autocomplete

https://www.digitalocean.com/community/tutorials/vuejs-vue-autocomplete-component

## Cypress E2E

DIDN'T USE much.

https://docs.cypress.io/guides/getting-started/testing-your-app#Step-1-Start-your-server

## FAQ

- Build fails

  - If you had an older version of the project code base, you may need to do the following:
  - Delete the node_modules folder from the webui folder.
  - From the terminal window, navigate to the webui folder, type and enter npm i.
  - Type and enter npm run dev.
  - Review the results of the build

- `server` crashes after saving/restarting due to changes...

  - make sure package.json is `"nodemon":"2.0.7"` If it any newer version and have ^ it will have trouble restarting.
  - Shutdown the server and webui and run `npm run dev` and `npm run serve` to allow nodemon to get the changes if it wasn't the proper version.

- Bootstrap/MDB doesn't work
  - If it uses `data` like `data-toggle` you'll need to add `bs` to it. Like this: `data-bs-toggle` or `data-bs-dismiss="modal"` or ` data-bs-success`
