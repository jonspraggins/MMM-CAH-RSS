/* global Log, Module, jquery, feednami, moment */
/* Magic Mirror
 * Module: Calvin and Hobbes RSS Feed
 *
 * By Jon Spraggins http://jonspraggins.com
 * MIT Licensed.
 */
Module.register("MMM-CAH-RSS",{
		// define defaults.
	defaults: {
		url: "",
		updateInterval: 86400000,
		fadeSpeed: 4000
	},
		// Define required scripts.
	getScripts: function() {
		return ["modules/MMM-CAH-RSS/js/jquery-3.5.0.min.js","modules/MMM-CAH-RSS/js/feednami.js", "moment.js"];
	},
		getStyles: function() {
		return ["modules/MMM-CAH-RSS/css/style.css"];
	},
		// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		
		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},
	getDom: function () {
		var wrapper = document.createElement("div");
    		var url = "http://www.wdr1.com/blog/calvin_and_hobbes.rdf"
		feednami.load(url,function(result){
			if(result.error) {
				console.log(result.error);
			} else {
				var entries = result.feed.entries;
				for(var i = 0; i < entries.length; i++){
				var entry = entries[i];
				wrapper.innerHTML = "<img src=\"" + entry.guid + "\">";
				}
			}
		});
		return wrapper;
	}
	
});
