/* eslint-disable */

const { logBlankLine } = require('../utils/logger-methods.cjs');

async function selectLanguage() {
  logBlankLine();

  const inquirer = await import('inquirer');
  const { language } = await inquirer.default.prompt([
    {
      type: 'list',
      name: 'language',
      message:
        'Please select the language to be used in the next steps of the script. / Scriptin sonraki adımlarında kullanılacak dili seçiniz. / Bitte wählen Sie die Sprache, die in den nächsten Schritten des Skripts verwendet werden soll.',
      choices: [
        { name: 'English', value: 'en' },
        { name: 'Türkçe', value: 'tr' },
        { name: 'Deutsch', value: 'de' },
      ],
    },
  ]);
  return language;
}

module.exports = {
  selectLanguage,
};
