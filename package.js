Package.describe({
  summary: "A visual captcha"
});

Npm.depends({
  "visualcaptcha" : "0.0.1"
})


Package.on_use(function (api, where) {
  api.use('router', 'server');
  
  api.add_files('lib/index.js', 'server');
  api.export(['VisualCaptcha'], 'server');
  
});

