const fs = require('fs')
const { config } = require('./config');
const copyFileSync = (source, target) => {
	var targetFile = target;
	
    // If target is a directory, a new file with the same name will be created
    if (fs.existsSync(target)) {
		if (fs.lstatSync(target).isDirectory()) {
			targetFile = path.join(target, path.basename(source));
        }
    }
	
    fs.writeFileSync(targetFile, fs.readFileSync(source));
};
copyFileSync('dev/univer-preact-ts.iife.js',config.paths.staticJS + 'univer-preact-ts.iife.js')
copyFileSync('dev/Styles/style.css',config.paths.staticCSS + 'style.css')
