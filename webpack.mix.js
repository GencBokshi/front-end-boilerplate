let mix = require('laravel-mix');

var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
mix.webpackConfig({
    plugins: [new HardSourceWebpackPlugin()]
});

mix.copy('resources/assets/js/vendor', 'public/assets/web/dist/js/vendor');

mix.options({
    processCssUrls: false
})
    // sourceMaps(false, 'source-map').
    .sass('resources/assets/sass/app.scss', 'public/assets/web/dist/css');

mix.styles(
    ['public/assets/web/dist/css/app.css'],
    'public/assets/web/dist/css/app.css',
    './'
);

mix.version('public/assets/web/dist/css/app.css');

mix.js('resources/assets/js/app.js', 'public/assets/web/dist/js');

mix.version('public/assets/web/dist/js/app.js');
