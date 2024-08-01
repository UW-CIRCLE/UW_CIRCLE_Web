const fs = require('fs');
const path = require('path');

// Define the path to the CNAME file
const cnamePath = path.join(__dirname, 'build', 'CNAME');
const cnameContent = 'app.circle.uw.edu';

// Create the CNAME file in the build directory
fs.writeFileSync(cnamePath, cnameContent);

console.log('CNAME file added to build directory.');
