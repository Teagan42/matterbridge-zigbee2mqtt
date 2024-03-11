// link-script.js
import { exec } from 'child_process';

const command = process.platform === 'win32' ? 'npm link matterbridge' : 'sudo npm link matterbridge';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
});
