var gulp = require('gulp');

gulp.task('bootstrap-db', function() {
    var models = require('./model');
    var promise = models.db.sequelize.sync({force: true});
    promise.then(function(){
        console.log("Database Sync");
    });
});

gulp.task('drop', function() {
    var models = require('./model') ;
    var promise = models.db.sequelize.drop();
    promise.then(function(){
    });
});
