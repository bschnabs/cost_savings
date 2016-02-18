/// <binding />
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            refresh: {
                options: {
                    livereload: true
                },
                files : ['Views/Home/Index.cshtml', 'Views/Home/*']
            }
        },
        connect: {
            options: {
                hostname: 'localhost',
                directory: 'Views/Home/',
                livereload: 35729 //62569
            },
            livereload: {
                options: {
                    directory: 'Views/Home/',
                    open: true
                },
                files: [
                    {
                        expand: true,
                        src: ['~/Views/Home/**'],
                        dest: 'wwwroot'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect:livereload', 'watch']);
}