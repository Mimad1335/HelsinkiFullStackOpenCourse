sequenceDiagram
participant browser
participant server

note right of browser: user clicks link to single page app

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
activate server
server->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server->>browser: CSS document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
activate server
server->>browser: JavaScript document
deactivate server

note right of browser: Browser begin to execute JavaScript file that triggers JSON file request

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server->>browser: JSON List
deactivate server

note right of browser: Browser displays list

