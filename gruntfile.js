module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	// grunt.loadNpmTasks('grunt-sass-bootstrapper');
	grunt.loadNpmTasks('bootstrap-sass');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js':['_/components/js/script.js']
				} // files
			} // my_target
		}, // uglify
		// sass_bootstrapper : {
		// 	my_task	: {
		// 		options : {
		// 			filterRootPaths : ['_/components/sass']
		// 		}
		// 	}
		// } // sass_bootstrapper
		compass : {
			dev : {
				options: {
					config: 'config.rb'
				} // options
			} // dev
		}, // compass
		watch: {
			options : { livereload:true },
			scripts: {
				files : ['_/components/js/*.js'],
				tasks : ['uglify']
			},
			sass: {
				files: ['_/components/sass/*.scss'],
				// files: ['node_modules/bootstrap-sass/assets/stylesheets/*.scss'],
				tasks: ['compass:dev']
			}, // sass
			html : {
				files : ['*.html']
			}
		} // watch
	}) // initConfig
	grunt.registerTask('default', 'watch');
} // exports
