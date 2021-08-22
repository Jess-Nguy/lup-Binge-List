# BingeList-v2

Newly improved BingeList coming soon... Capstone project.

## Server

To start the server:
`cd server`
`npm run dev`

## Webui

To start the webui:
`cd webui`
`npm run serve`

## MBD and Font awesome

This installs both MBD and Font awesome -
https://mdbootstrap.com/docs/vue/getting-started/installation/

Setup:
? Please choose type of installation: Existing app
? Free or Pro version? Free
? Select the styling option: Compiled in the mdbvue package (CSS)
? Add Roboto font? Yes
? Add Font Awesome 5? Yes

## Just Font Awesome

Links on How to set up:

- https://fontawesome.com/v5.9/how-to-use/with-the-api/setup/library
- https://halilyuce.com/web/how-to-add-font-awesome-to-your-vue-3-project-typescript/

List of icons:

- https://fontawesome.com/icons?s=solid&m=free
- https://fontawesome.com/icons?s=regular&m=free
- https://fontawesome.com/icons?s=brands

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

## FAQ

- Build fails
  - If you had an older version of the inspections code base, you may need to do the following:
  - Delete the node_modules folder from the webui folder.
  - From the terminal window, navigate to the webui folder, type and enter npm i.
  - Type and enter npm run dev.
  - Review the results of the build
