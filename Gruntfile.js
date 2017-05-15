module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'build/mindrawing.min.js': ['src/mindrawing.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
};
