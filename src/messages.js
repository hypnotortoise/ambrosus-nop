/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

const messages = {
  nodeTypeQuestion: `Which node do you want to run?`,
  atlasVersionQuestion: `Which Atlas version do you want to run?`,
  apolloName: 'Apollo',
  hermesName: 'Hermes',
  atlasName: 'Atlas',
  atlas1Name: 'Zeta',
  atlas2Name: 'Sigma',
  atlas3Name: 'Omega',
  noPrivateKeyQuestion: `No private key setup yet. What do you want to do?`,
  privateKeyManualInputAnswer: 'Input existing key manually',
  privateKeyAutoGenerationAnswer: 'Generate new key automatically',
  privateKeyInputInstruction: `Please provide your private key in hex form:`,
  privateKeyInputError: (wrongValue) => `${wrongValue} is not a valid private key.`,
  dockerInstalledInfo: 'Docker is installed.',
  dockerMissingInfo: 'Docker is required, and was not found. Please verify your installation.',
  privateKeyInfo: (address) => `Private key verified. Your address is ${address}.`,
  roleSelectionInfo: (role) => `${role} has been selected.`,
  nodeUrlInputInstruction: 'Please provide URL, which you will be using for your node:',
  nodeUrlInputError:  (wrongValue) => `${wrongValue} is not a valid URL`,
  nodeUrlInfo: (url) => `Node URL defined as ${url}.`,
  userEmailInputInstruction: 'Please provide your email address:',
  userEmailInputError: (wrongValue) => `${wrongValue} is not a valid email address.`,
  userEmailInfo: (email) => `Your email address is ${email}`,
  submissionInfo: (submissionMail) => `To finish requesting process copy following form and send it to ${submissionMail}`,
  submissionMail: 'tech@ambrosus.com',
  addressNotWhitelisted: 'Address is not whitelisted yet.',
  addressWhitelisted: (roleAssigned, requiredDeposit) => `Address is whitelisted as ${roleAssigned}. Required deposit is: ${requiredDeposit}`,
  unitAmb: 'AMB',
  notEnoughBalance: (amount) => `Not enough balance. You need at least ${amount} in order to perform onboarding.`,
  onboardingWarning: (address, nodeType, amount) => `You will now onboard ${address} as the ${nodeType} node.\nWarning: this operations will cost ${amount}.`,
  continueConfirmation: 'Do you wish to continue?',
  onboardingSuccessful: 'You are now successfully onboarded!',
  alreadyOnboarded: (role) => `Onboarded as ${role}.`
};

export default messages;