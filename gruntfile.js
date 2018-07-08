var fs = require('fs');

module.exports = function(grunt) {
    'use strict';
        grunt.initConfig({
        running: {
            taskOwner: 'me',
            src: 'js/somefile.js',
            dest: 'somefile.js'
        },
        multi:{
            config1: {
                message: "this is config 1",
                files: {
                    'someotherfile.js' : 'js/somefile.js'
                }
            },
            config2:{
                message: "this is config 2",
                files: [
                    {
                    src: 'js/somefile.js',
                    dest: 'someotherfile.js'
                }
                ]
            },
        }
    });
    grunt.registerTask('running', 'ein Beispiel Task',function(arg1){
        var done = this.async();
        grunt.config.requires('running.taskOwner');
        grunt.log.writeln('grunt running ...' + this.name, grunt.config.get('running.taskOwner'));
        grunt.log.writeln(grunt.config.get('running.src'));
        fs.readFile(grunt.config.get('running.src'), function(error, data){
            fs.writeFile(grunt.config.get('running.dest'),data);
             done();
        });
       
    });
    grunt.registerMultiTask('multi','ein beispiel multi task', function(){
        grunt.log.writeln(this.data.message);
        
        this.files.forEach(function(file){
            grunt.log.writeln(file.src[0] + ' ' + file.dest);
        });
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