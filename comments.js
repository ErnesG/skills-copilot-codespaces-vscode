const express = require('express');
const fs = require('fs');

// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
const app = express();

app.get('/', (req, res) => {
    fs.readFile('/workspaces/skills-copilot-codespaces-vscode/comments.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
