/// <binding />
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            options:{
                livereload: true
            },
            files: ['Views/Home/Index.cshtml', 'Views/Home/*'],
        }
    });

    grunt.loadNpmTasks('grunt-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', 'watch');
}