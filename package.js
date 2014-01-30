Package.describe({
  summary: "A visual captcha"
});

Npm.depends({
  "visualcaptcha" : "*"
})


Package.on_use(function (api, where) {
  api.use('router', 'server');
  
  api.add_files('lib/index.js', 'server');
  api.export(['VisualCaptcha'], 'server');
  
});

