/* This script loads the MEI file via HTTP request */

/* Start Verovio */
var vrvToolkit = new verovio.toolkit()

/* Setup Verovio - adjust the options below */
var zoom = 60
var content = document.getElementById('content')
var contentHeight = 0
if (content) {
  contentHeight = content.offsetHeight
}
var defaultHeight = document.documentElement.clientHeight - contentHeight
var defaultWidth = document.documentElement.clientWidth - 50
options = {
    pageHeight: defaultHeight * 100 / zoom,
    pageWidth: defaultWidth * 100 / zoom,
    scale: zoom
}
vrvToolkit.setOptions(options)

/* Show the score */
showScore('score', 'data/Sie_liebten_sich_beide__Op._13_No._2_Clara_Schumann_nee_Wieck.xml') // <-- CHANGE THIS TO YOUR FILE
