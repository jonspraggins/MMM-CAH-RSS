# MMM-CAH-RSS
Display a Calvin and Hobbes Comic on your MagicMirror.  Derived from a modified MMM-RSS-FEED Module.

## Installing the module

To install the module, just clone this repository to your _modules_ folder:
`git clone https://github.com/jonspraggins/MMM-CAH-RSS`.

## Using the module
To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
		 {
			module: 'MMM-CAH-RSS',
			position: 'top_bar'
		 },
]
````
The RSS URL is hardcoded MMM-CAH-FEED.js, so no additional configuration required!
