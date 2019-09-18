const mix = require('laravel-mix')
require('laravel-mix-alias')

mix.alias({
  '@': 'resources/js',
})

mix.react('resources/js/app.js', 'public/js').less('resources/less/app.less', 'public/css')

if (mix.inProduction()) {
  mix.version(['public/css/app.css', 'public/js/app.js'])
}
