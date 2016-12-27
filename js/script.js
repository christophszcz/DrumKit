window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(audio);
	audio.currentTime = 0; //this will rewind to the start.
	if(!audio) return;
	audio.play();
});