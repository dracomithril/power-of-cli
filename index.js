const commandLineCommands = require('command-line-commands');
const commandLineArgs = require('command-line-args');

/* first - parse the main command */
const mainDefinitions = [
  {name: 'command', defaultOption: true}
];
const mainOptions = commandLineArgs(mainDefinitions, {stopAtFirstUnknown: true});
const argv = mainOptions._unknown || [];

const optionDefinitions = [
  {name: 'verbose', alias: 'v', type: Boolean},
  {name: 'src', type: String, multiple: true, defaultOption: true},
  {name: 'timeout', alias: 't', type: Number}
];
const options = {
  'clean': optionDefinitions,
  update: optionDefinitions,
  install: optionDefinitions,
};

//is it valid command
const commandOptions = options[mainOptions.command];
if (!commandOptions) {
  throw new Error('no commend specified');
}

const commandOptionsArgs = commandLineArgs(commandOptions, {argv});

/* print the command and remaining command-line args */
console.log('command:         %s', mainOptions.command);
console.log('argv:            %s', JSON.stringify(argv));
console.log('cmd options argv %s', JSON.stringify(commandOptionsArgs));
