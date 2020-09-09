console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'light'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

    var today = new Date()
    var curHr = today.getHours()

    if (curHr >= 0 && curHr < 5) {
        document.getElementById("demo").innerHTML = 'What are you doing up this early..?';
    } else if (curHr >= 6 && curHr < 12) {
        document.getElementById("demo").innerHTML = 'Good Morning..,';
    } else if (curHr >= 12 && curHr < 17) {
        document.getElementById("demo").innerHTML = 'Good Afternoon..,';
    } else {
        document.getElementById("demo").innerHTML = 'Good Evening..,';
    }
