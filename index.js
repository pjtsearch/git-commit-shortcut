#!/usr/bin/env node
const { exec } = require('child_process');

if (process.argv[2] !== "--help" && process.argv[2] !== undefined){
  exec(`git commit -am '${process.argv[2]}' && git push`, (err, stdout, stderr) => {
  //   if (err.Error.indexOf("git commit -am ") === -1) {
  //     // node couldn't execute the command
  //     console.log(err);
  //     //return;
  //   }

    // the *entire* stdout and stderr (buffered)
    console.log(`${stdout}`);
    if (stderr !== ""){
      console.error(`${stderr}`);
    }
  });

}else{
  console.log('\x1b[38;2;63;81;181m',`
          _ __                                       _ __             __               __             __ 
   ____ _(_) /_      _________  ____ ___  ____ ___  (_) /_      _____/ /_  ____  _____/ /________  __/ /_
  / __ '/ / __/_____/ ___/ __ \\/ __ '__ \\/ __ '__ \\/ / __/_____/ ___/ __ \\/ __ \\/ ___/ __/ ___/ / / / __/
 / /_/ / / /_/_____/ /__/ /_/ / / / / / / / / / / / / /_/_____(__  ) / / / /_/ / /  / /_/ /__/ /_/ / /_  
 \\__, /_/\\__/      \\___/\\____/_/ /_/ /_/_/ /_/ /_/_/\\__/     /____/_/ /_/\\____/_/   \\__/\\___/\\__,_/\\__/  
/____/
  `,'\x1b[0m');
  console.log(`
git-commit-shortcut will run "git commit -am" with a commit message specified by you, and will then run "git push".

USAGE:
git-commit-shortcut <message>
OR
ngcs <message>

OPTIONS:
MESSAGE     The commit message.
  `);
}
