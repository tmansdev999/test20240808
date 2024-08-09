const crypto = require('crypto');
const fs = require('fs');

// Generate a random secret of 32 bytes
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Output the secret to the console
console.log('Generated JWT Secret:', jwtSecret);

// Optionally, save the secret to a file (e.g., .env file)
fs.writeFileSync('.env', `JWT_SECRET=${jwtSecret}\n`, { flag: 'a' });

console.log('JWT Secret saved to .env file');
