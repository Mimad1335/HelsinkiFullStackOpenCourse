sequenceDiagram
participant browser
participant server

note right of browser: user enters info in form and clicks save

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
note right of browser: server saves user info
server->>browser: JSON List
deactivate server

note right of browser: Browser launches callback to display new list

