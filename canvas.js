document.addEventListener('DOMContentLoaded',()=>{
    let can = document.getElementsByTagName('canvas');

	can[0].width = window.innerWidth;
	can[0].height = window.innerHeight;
// //    let mp3Player = document.getElementById('mp3_player');
//    mp3Player[0].width = window.innerWidth;

// Create a new instance of an audio object and adjust some of its properties
var audio = new Audio();
audio.src = 'assets/test.mp3';
audio.controls = true;
audio.loop = true;
audio.autoplay = false;
// Establish all variables that your Analyser will use
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_y, bar_width, bar_height;
// Initialize the MP3 player after the page loads all of its HTML into the window
window.addEventListener("load", initMp3Player, false);
function initMp3Player(){
	document.getElementById('audio_box').appendChild(audio);
	context = new AudioContext(); // AudioContext object instance
	analyser = context.createAnalyser(); // AnalyserNode method
	canvas = document.getElementById('analyser_render');
	ctx = canvas.getContext('2d');
	// Re-route audio playback into the processing graph of the AudioContext
	source = context.createMediaElementSource(audio); 
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper(){
	window.requestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.fillStyle = '#00CCFF'; // Color of the bars
	bars = 100;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 20;
		bar_width = 19;
        if(fbc_array[i] % 2 === 0) {
            bar_height = -(fbc_array[i]);
            bar_y = canvas.height;
        }
        else if (i > 2) {
            bar_height = (fbc_array[i-2]);
            bar_y = 0;
        }
		//  fillRect( x, y, width, height ) // Explanation of the parameters below
		ctx.fillRect(bar_x, bar_y, bar_width, bar_height);
	}
}

})