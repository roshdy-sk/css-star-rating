Package.describe({
    name: 'roshdy:css-star-rating',
    version: '0.1.2',
    summary: 'CSS Star Rating Widget',
    git: 'https://github.com/roshdy/css-star-rating.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use('ecmascript');
    api.use('fortawesome:fontawesome@4.5.0');
    api.use('templating', 'client');
    api.use('random');
    api.mainModule('css-star-rating.js', 'client');
    api.addFiles('css-star-rating.css', 'client');
    api.addFiles('css-star-rating.html', 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('roshdy:css-star-rating');
    api.mainModule('css-star-rating-tests.js');
});
