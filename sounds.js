 

 //http://www.endolith.com/wordpress/2010/09/15/a-mapping-between-musical-notes-and-colors/
 var colorNotesMap = {
 	blue: "D",
 	//orange: "A", ['A4', 'B4', 'C#4', 'D4', 'E4', 'F#4', 'G#'],
 	pink: "G#", 
 	purple: "F",
 	red: "G",
 	yellow: "B"
 }

 var frequencyScales = [440,466,494,523, 554,587,622,659,698,740,784,831,880];


 function playSounds(frequency, interval) {

   	//envelope.gain.exponentialRampToValueAtTime(0.001, context.currentTime + decayRate);
	var time = 0;
	//var interval = 200/1000;

	for(var i = 0; i < frequency.length; i++) {

		console.log("Playing. LOOP..");

		var context = new AudioContext();
    	var oscillator = context.createOscillator();
    	var envelope = context.createGain();
   		var decayRate = interval;
   		oscillator.type = 'sine';
    	envelope.gain.value = 1; 
    	oscillator.connect(envelope);
    	envelope.connect(context.destination);
    	oscillator.frequency.value = frequency[i];

		 oscillator.start(context.currentTime +  time);
		 console.log(context.currentTime + time);
		 time += interval;

		 oscillator.stop(context.currentTime + time);
		 console.log(context.currentTime + time);
		   		   	
  	}
   	
   }