/// <binding />
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            files: ['Views/**/*'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', 'watch');
}