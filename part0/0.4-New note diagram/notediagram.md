sequenceDiagram
participant browser
participant server

note right of browser: user enters info in form and clicks save

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
note right of browser: server saves user info
server->>browser: HTML document to redirect to exampleapp/notes
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server->>browser: CSS document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server->>browser: JavaScript document
deactivate server

note right of browser: Browser begin to execute JavaScript file that triggers JSON file request

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server->>browser: JSON List
deactivate server

note right of browser: Browser launches callback to display new list

