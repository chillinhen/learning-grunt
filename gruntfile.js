module.exports = function(grunt) {
    'use strict';
        grunt.initConfig({
        running: {
            taskOwner: 'me'
        },
        multi:{
            config1: {
                message: "this is config 1"
            },
            config2:{
                message: "this is config 2"
            },
        }
    });
    grunt.registerTask('running', 'ein Beispiel Task',function(arg1){
        var done = this.async();
        grunt.config.requires('running.taskOwner');
        grunt.log.writeln('grunt running ...' + this.name, grunt.config.get('running.taskOwner'));
        done();
    });
    grunt.registerMultiTask('multi','ein beispiel multi task', function(){
        grunt.log.writeln(this.data.message);
    });
    grunt.registerTask('run', 'run all the tasks',['running']);

//  // Project configuration.
//  grunt.initConfig({
//    pkg: grunt.file.readJSON('package.json'),
//    uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//    }
//  });
//
//  // Load the plugin that provides the "uglify" task.
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//
//  // Default task(s).
//  grunt.registerTask('default', ['uglify']);

};