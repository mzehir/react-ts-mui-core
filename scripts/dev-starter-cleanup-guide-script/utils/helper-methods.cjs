/* eslint-disable */

const { logBlankLine } = require('./logger-methods.cjs');

/**
 * Asks the user to confirm directory deletion.
 * Kullanıcıya silme işlemini onaylamak için evet/hayır sorusu sorar.
 * Fragt den Benutzer, ob die Verzeichnisse gelöscht werden sollen.
 */
async function confirmQuestion(questionText, texts) {
  logBlankLine();

  const inquirer = await import('inquirer');
  const { confirmed } = await inquirer.default.prompt([
    {
      type: 'list',
      name: 'confirmed',
      message: questionText,
      choices: [
        { name: texts.yes, value: 'yes' },
        { name: texts.no, value: 'no' },
      ],
    },
  ]);

  return confirmed;
}

async function textInput(message, defaultValue = '') {
  const inquirer = await import('inquirer');

  const { input } = await inquirer.default.prompt([
    {
      type: 'input',
      name: 'input',
      message,
      default: defaultValue,
      validate: (val) => (val.trim().length >= 0 ? true : 'Lütfen geçerli bir metin girin.'),
    },
  ]);

  return input.trim();
}

module.exports = {
  confirmQuestion,
  textInput,
};
