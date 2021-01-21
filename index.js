const app = require('./app');
const port = 2400;

process.on('exit', () => app.listen(port, () => console.log(`Server was started with port ${port}`)));
process.on('uncaughtException', () => app.listen(port, () => console.log(`Server was started with port ${port}`)))

app.listen(port, () => console.log(`Server was started with port ${port}`));
console.log('Testing roll backing of git');