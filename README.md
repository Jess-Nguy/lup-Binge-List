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
        "vue",
        "typescript",
        "typescriptreact"
      ]
    }
```
    - Install Vetur
    - Install Prettier
        - Check your prettier settings and make sure your Prettier Ignore Path is set to ./webui/.prettierignore
    - You can now configure VSCode to lint/format on save (suggested) or manually `run npm run lint`.

## FAQ

    - Build fails
        - If you had an older version of the inspections code base, you may need to do the following:
        - Delete the node_modules folder from the webui folder.
        - From the terminal window, navigate to the webui folder, type and enter npm i.
        - Type and enter npm run dev.
        - Review the results of the build
