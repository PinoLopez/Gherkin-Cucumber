module.exports = {
  default: {
    require: [
      'support/hooks.js',
      'step_definitions/**/*.js'
    ],
    format: [
      'progress-bar',
      'html:cucumber-report/index.html'
    ]
  }
};