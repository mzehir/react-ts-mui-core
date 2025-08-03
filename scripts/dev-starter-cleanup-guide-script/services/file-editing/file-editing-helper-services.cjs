/* eslint-disable */

const fs = require('fs');
const { logWarning, logInfo, logSuccess, logError } = require('../../utils/logger-methods.cjs');
const { textInput } = require('../../utils/helper-methods.cjs');

async function editingEnvFileMethod(texts, envFilePath) {
  try {
    logInfo(texts.editingEnvFileMethodTitle);

    let content = fs.readFileSync(envFilePath, 'utf8');
    const match = content.match(/VITE_APP_NAME\s*=\s*"([^"]*)"/);
    const currentAppName = match ? match[1] : '';

    let appName = '';

    while (true) {
      logInfo(`${texts.currentAppName}"${currentAppName}"`);
      logInfo(texts.keepCurrentAppNameInfo);
      const input = await textInput(texts.enterAppName);
      appName = input.trim() || currentAppName;
      if (!appName.trim()) {
        logWarning(texts.emptyAppNameWarning);
      } else {
        break;
      }
    }

    content = content.replace(/VITE_APP_NAME\s*=\s*"[^"]*"/, `VITE_APP_NAME = "${appName}"`);
    fs.writeFileSync(envFilePath, content);
    logSuccess(texts.envUpdateSuccess);
    return true;
  } catch (error) {
    logError(texts.envUpdateError);
    logError(error?.message);
    return false;
  }
}

async function editingPackageJsonFileMethod(texts, packageJsonFilePath) {
  try {
    logInfo(texts.editingPackageJsonFileMethodTitle);

    const content = fs.readFileSync(packageJsonFilePath, 'utf8');
    const packageJson = JSON.parse(content);
    const currentProjectName = packageJson.name || '';

    let projectName = '';

    while (true) {
      logInfo(`${texts.currentProjectName}"${currentProjectName}"`);
      logInfo(texts.projectNameFormatInfo);
      logInfo(texts.keepCurrentProjectNameInfo);

      projectName = await textInput(texts.enterProjectName);
      if (!projectName.trim()) {
        projectName = currentProjectName;
        logInfo(`${texts.currentProjectName}"${projectName}"`);
      }
      if (!projectName.trim()) {
        logWarning(texts.emptyProjectNameWarning);
        continue;
      }
      if (!/^[a-z0-9\-]+$/.test(projectName.trim())) {
        logWarning(texts.invalidProjectNameWarning);
        continue;
      }

      break;
    }

    packageJson.name = projectName.trim();
    fs.writeFileSync(packageJsonFilePath, JSON.stringify(packageJson, null, 2));
    logSuccess(texts.packageJsonUpdateSuccess);
    return true;
  } catch (error) {
    logError(texts.packageJsonUpdateError);
    logError(error?.message);
    return false;
  }
}

async function editingUsersJsonFileMethod(texts, usersJsonFilePath) {
  try {
    logInfo(texts.editingUsersJsonFileMethodTitle);

    const content = fs.readFileSync(usersJsonFilePath, 'utf8');

    let users;

    try {
      users = JSON.parse(content);
    } catch {
      logError(texts.usersJsonInvalidFormat);
      return false;
    }

    if (!Array.isArray(users)) {
      logError(texts.usersJsonNotArray);
      return false;
    }

    const adminUser = users.filter((user) => user.userType === 'admin');
    fs.writeFileSync(usersJsonFilePath, JSON.stringify(adminUser, null, 2), 'utf8');
    logSuccess(texts.usersJsonUpdateSuccess);
    return true;
  } catch (error) {
    logError(texts.usersJsonUpdateError);
    logError(error?.message);
    return false;
  }
}

function processBlocks(content, blockDefs) {
  // blockDefs: [{ type: 'delete'|'activate', start: '...', end: '...' }]
  let lines = content.split('\n');
  let result = [];
  let i = 0;
  while (i < lines.length) {
    let matched = false;
    for (const def of blockDefs) {
      if (lines[i].includes(def.start)) {
        matched = true;
        let block = [];
        let j = i + 1;
        while (j < lines.length && !lines[j].includes(def.end)) {
          block.push(lines[j]);
          j++;
        }
        // j şu anda end satırında
        if (def.type === 'activate') {
          // Yorumdan çıkar (// veya {/* ... */} gibi)
          block = block.map((l) =>
            l
              .replace(/^\s*\/\/ ?/, '')
              .replace(/^\s*\{\/\* ?| ?\*\/\}$/, '')
              .replace(/^\s*\* ?/, ''),
          );
          result = result.concat(block);
        }
        // delete ise hiçbir şey ekleme (blok ve start/end satırları tamamen silinir)
        i = j + 1;
        break;
      }
    }
    if (!matched) {
      result.push(lines[i]);
      i++;
    }
  }
  return result.join('\n');
}

async function editingBlockActivateAndDelete(texts, item) {
  try {
    logInfo(texts[item.fileUpdateTitle]);

    const content = fs.readFileSync(item.path, 'utf8');
    const newContent = processBlocks(content, item.blocks);

    fs.writeFileSync(item.path, newContent);
    logSuccess(texts[item.fileUpdateSuccess]);
    return true;
  } catch (error) {
    logError(texts[item.fileUpdateError]);
    logError(error?.message);
    return false;
  }
}

module.exports = {
  editingEnvFileMethod,
  editingPackageJsonFileMethod,
  editingUsersJsonFileMethod,
  editingBlockActivateAndDelete,
};
