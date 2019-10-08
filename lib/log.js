const fs = require('fs');

exports.printLog = (logType, sessionID, content) => {
  const stream = fs.createWriteStream('C:/Users/Admin/Desktop/expressCart/logs/app.log', { flags: 'a' });
  const timestamp = new Date(Date.now()).toISOString();
  stream.write(`${timestamp} "${logType}" "${sessionID}" ${content} \n`);
  stream.end();
}
