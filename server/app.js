const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/script', (req, res) => {
    // Get the value from the query parameters
    const value = req.query.value || 'default';

    // Read the content of an external JavaScript file
    const externalScriptPath = path.join(__dirname,'script.js'); // Update with the actual path
    let scriptContent = fs.readFileSync(externalScriptPath, 'utf-8');

    // Modify the script content to set the value
    scriptContent += `\nvar val= "${value}";`;

    // Set the content type and send the modified script as the response
    res.type('application/javascript').send(scriptContent);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});