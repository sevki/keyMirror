Package.describe({
  name: 'sevki:keymirror',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Create an object with values equal to its key names.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sevki/keyMirror',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('keymirror.js');
  api.export('keyMirror');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sevki:keymirror');
  api.addFiles('keymirror-tests.js');
});
