/* eslint-disable */

const readline = require('readline');
const { log, logInfo, logWarning, logError } = require('./logger.cjs');

// Readline interface oluştur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promise wrapper for readline
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

// Dil seçimi
async function selectLanguage() {
  log('', 'reset');
  log('1. English', 'cyan');
  log('2. Türkçe', 'cyan');
  log('3. Deutsch', 'cyan');
  log('', 'reset');

  const answer = await question('Select language / Dil seçin / Sprache wählen (1-3): ');
  
  switch (answer.trim()) {
    case '1':
      return 'en';
    case '2':
      return 'tr';
    case '3':
      return 'de';
    default:
      logWarning('Invalid selection, defaulting to English');
      return 'en';
  }
}

// Evet/Hayır sorusu
async function confirmQuestion(questionText, lang) {
  const yesNo = lang === 'tr' ? '(E/H)' : lang === 'de' ? '(J/N)' : '(Y/N)';
  const answer = await question(`${questionText} ${yesNo}: `);
  
  const yesAnswers = lang === 'tr' ? ['e', 'evet', 'y', 'yes'] : 
                    lang === 'de' ? ['j', 'ja', 'y', 'yes'] : 
                    ['y', 'yes'];
  
  return yesAnswers.includes(answer.trim().toLowerCase());
}

// Kullanıcıdan metin alma
async function getTextInput(promptText) {
  return await question(promptText);
}

// Readline interface'i kapat
function closeInterface() {
  rl.close();
}

module.exports = {
  selectLanguage,
  confirmQuestion,
  getTextInput,
  closeInterface,
  question
}; 