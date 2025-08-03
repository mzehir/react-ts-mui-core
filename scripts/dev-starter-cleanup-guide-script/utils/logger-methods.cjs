/* eslint-disable */

const colors = require('./colors-enums.cjs');

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logBlankLine() {
  log(``, 'reset');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

module.exports = {
  log,
  logBlankLine,
  logSuccess,
  logError,
  logWarning,
  logInfo,
};
