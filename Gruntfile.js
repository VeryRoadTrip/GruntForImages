/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

   grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
                  name: 'xsmall',
                  width: 380,
                  suffix: "_380w",
                  quality: 40
                },
                {
                  name: 'small',
                  width: 640,
                  suffix: "_640w",
                  quality: 50
                },
                {
                  name: 'medium',
                  width: 1280,
                  suffix: "_1280w",
                  quality: 60
                },
                {
                  name: 'large',
                  width: 2000,
                  suffix: "_2000w",
                  quality: 70
                }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src_h/',
          dest: 'images_h/'
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images_h']
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images_h']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    // copy: {
    //   dev: {
    //     files: [{
    //       expand: true,
    //       cwd: 'images_src_h/',
    //       src: '*.{gif,jpg,png}',
    //       dest: 'images_h/'
    //     }]
    //   },
    // },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir',  'responsive_images']); //'copy',

};
