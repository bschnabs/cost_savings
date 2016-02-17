module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    cssDir: 'styles',
                    sassDir: 'sass',
                    imagesDir: 'images',
                    javascriptsDir: 'scripts',
                    force: true
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'styles',
                src: ['*.css', '!*.min.css'],
                dest: 'styles',
                ext: '.min.css'
            }
        },
        watch: {
            sass: {
                files: '**/*.scss',
                tasks: ['compass']
            },
            css: {
                files: '**/*.css',
                tasks: ['cssmin'],
            },
            html: {
                files: ['index.html', 'Index.cshtml'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib');
    grunt.registerTask('default', ['watch', 'compass']);
}