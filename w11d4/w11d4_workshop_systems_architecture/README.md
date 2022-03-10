[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6897977&assignment_repo_type=AssignmentRepo)
# workshop_systems_architecture

A workshop to explore systems architecture

## Scenario

A client has approached you for advice on a problem that their eCommerce business is having.

They have looking at running an advertising campaign and are expecting a massive increase in website traffic and, hopefully, sales 💰.

Unfortunately the systems that they currently have in place cannot cope with too many visitors to the website at one time. They are being very proactive and seeking help with rearchitecting their system to increase stability and capacity. That's where you come in!

## Existing architecture

The existing systems that they are looking to replace/upgrade includes...

- A monolith application that is run on a single webserver
- A postgres database that stores all the data in compliance with GDPR and data protection laws (i.e. don't worry too much about this part)

Their monolith manages these functional domains...

- User management
- User authorisation
- Serving the frontend application (for arguments sake lats say this is a React app)
- Hosting the api to access backend services
- Storing transient shopping cart data
- Processing orders
- Payment service

## Your task

Design a systems architecture diagram(s) that to propose a new system structure that would enable

- scaling capacity
- resilience

You may use any software you would like, but we'd recommend draw.io (using the extension to VS Code to have your diagram in the repo).

## Extension

### Bonus 1

The company has also noticed that sometimes it loses orders when there is a lot of load on the system due to HTTP timeouts.

How could you potentially look at mitigating this risk?

Include it in your diagram.

### Bonus 2

The client is currently a small-scale startup with a team of three engineers. Along with their upcoming campaign, they're looking to widen their team to 20 engineers and focus on sustainability and growth, not just for the upcoming campaign, but for more customer growth in the next five years.

They want their existing product to be robust and maintainable for that wider team and longer timescale. Does this change your plans at all? Is there anything you'd put in in addition for regular maintenance and updates?

## Please add draw.io files, screenshots, or PDF exports of your solutions in this repo and push to Github.
