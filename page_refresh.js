getPermission(); 

window.setTimeout(notifyMe, 100);

var thisScript = document.currentScript;

function notifyMe() {
	if(document.getElementById('classNotStarted').style.display === 'none') {
		console.log("Raum offen!");
		new Notification('Raum offen!', {body: 'Achtung, es geht los',icon: 'https://bit.ly/3xuv6VB'});
		window.setTimeout(script => script.dispatchEvent(new Event('toggle-requested')), 1000, thisScript); 
		window.setTimeout(script => script.dispatchEvent(new CustomEvent('play-sound', {detail: 'https://assets.mixkit.co/sfx/preview/mixkit-home-standard-ding-dong-109.mp3'})), 1000, thisScript); 
		document.getElementById('openClassLink').click();
	} else {
		console.log("Raum noch nicht offen!");
	}
}

function getPermission() {
	if (!window.Notification) {
		console.log('Browser does not support notifications.');
	} else if (Notification.permission !== 'denied' && Notification.permission === 'default') {
		Notification.requestPermission().then(function (p) {
			if (p === 'granted') {
				new Notification('Permission granted', {body: 'Danke!', icon: 'https://bit.ly/3xuv6VB' });
			} else {
				console.log('User blocked notifications.');
			}
		}).catch(function (err) {
			  console.error(err);
		   });
	}
}