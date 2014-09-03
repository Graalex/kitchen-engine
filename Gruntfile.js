module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('pakage.json'),
      concat: {
        main: {
          src: [
            'src/*.js'
          ],
          dest: 'bin/kitchen-engine.js'
        }
      },
      uglify: {
        main: {
          files: {
            'bin/kitchen-engine-min.js': <%= concat.main.dest %>
          }
        }
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);
};