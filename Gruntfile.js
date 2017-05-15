module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'build/drawing.min.js': ['src/drawing.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
};
