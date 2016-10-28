module.exports = function (grunt) {

    grunt.initConfig({
        clean: ['dist'],
        includes: {
            html: {
                files: [{
                    src: '**/*.html',
                    dest: 'dist',
                    flatten: false,
                    cwd: 'src',
                    options: {
                        silent: true
                    }
                }]
            },
            css: {
                files: [{
                    src: '**/*.css',
                    dest: 'dist',
                    flatten: false,
                    cwd: 'src',
                    options: {
                        silent: true
                    }
                }]
            },
            scripts: {
                files: [{
                    src: '**/*.js',
                    dest: 'dist',
                    flatten: false,
                    cwd: 'src',
                    options: {
                        silent: true
                    }
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        },
        watch: {
            html: {
                files: ['src/**/*.html'],
                tasks: ['includes:html']
            },
            css: {
                files: ['src/**/*.css'],
                tasks: ['includes:css']
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['includes:scripts']
            },
            images: {
                files: ['src/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-includes');

    grunt.registerTask('default', [
        'clean',
        'imagemin',
        'includes'
    ]);
    grunt.registerTask('serve', [
        'clean',
        'imagemin',
        'includes',
        'watch'
    ]);

};