"use strict";

const reporters = require('jasmine-reporters');
const junitReporter = new reporters.JUnitXmlReporter({
  savePath: './',
  filePrefix: 'test-results'
});

const JasmineConsoleReporter = require('jasmine-console-reporter');
const consoleReporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    timeUnit: 'ms',
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: false,
    emoji: false,
    beep: false
});

jasmine.getEnv().addReporter(consoleReporter);
jasmine.getEnv().addReporter(junitReporter);
