/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        min: {
            js: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'src/<%= pkg.name %>.css',
                dest: 'dist/<%= pkg.name %>.min.css'
            }
        },
        csslint: {
            base: {
                src: "src/*.css",
                rules: {
                    "import": false,
                    "overqualified-elements": 2
                }
            }
        },
        lint: {
            files: ['grunt.js', 'src/**/*sticky*.js']
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },
        uglify: {}
    });

    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', 'lint min cssmin csslint');

};
