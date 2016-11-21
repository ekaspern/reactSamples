var gulp = require('gulp');
var coffee = require('gulp-coffee');
var changed = require('gulp-changed');

var paths;

paths = {
  coffee: {
    src: '/srcCoffee',
    dest: '/src'
  }
};

var coffeeCompile, coffeeCompileChanged;

coffeeCompile = function(done) {
  var cb;
  cb = typeof done === 'function' ? done : function() {};
  gulp.src('./srcCoffee/**/*.coffee').pipe(coffee({
    bare: true
  })).pipe(changed('./srcCoffee')).pipe(gulp.dest('./src')).on('end', function() {
    return cb();
  });
  return null;
};

coffeeCompileChanged = function(file) {
  var destPath, sliceStart, srcPath, subPath;
  sliceStart = file.path.search(paths.coffee.src) + paths.coffee.src.length;
  subPath = file.path.slice(sliceStart);
  srcPath = "." + paths.coffee.src + subPath;
  destPath = ("." + paths.coffee.dest + subPath).split('/');
  destPath.pop();
  destPath = destPath.join('/');
  return gulp.src(srcPath).pipe(coffee({
    bare: true
  })).pipe(gulp.dest(destPath)).on('end', function() {
    return console.log("compiled: " + subPath);
  });
};

gulp.task('coffee-watch', function(done) {
  gulp.watch("srcCoffee/**/*.coffee", function(file) {
    console.log(file.type + ": " + file.path);
    return coffeeCompileChanged(file);
  });
  return coffeeCompile(done);
});

gulp.task('default', ['coffee-watch']);

gulp.task('client-compiler', ['coffee-watch']);

// gulp.task('client-compiler', function() {
//   return sequence('coffee-watch');
// });




