#!/usr/bin/env/ node

import fs from 'node:fs';

const commitMessageFile = process.argv[2];
const textMessage = fs.readFileSync(commitMessageFile, 'utf-8').trim();

const pattern = /^(\[feat\]|\[fix\]|\[chore\]):/;

if (pattern.test(textMessage)) {
  console.log('Commit message validation passed.');
  process.exit(0);
}

console.log('Error: Your commit massege must begin with [feat]/[fix]/[chore]:');
process.exit(1);
