function binarySearch(val, low, high) {
	var tries = 0
	var interval = setInterval(function() {
		if (low > high) {
			clearInterval(interval)
			return null
		} else {
			tries++
			var guess = Math.floor((low + high) / 2)
			$('#guess').text('Guess: ' + guess)
			$('#tries').text('Tries: ' + tries)
			if (guess == val) {
				$('#' + val).addClass('green')
				clearInterval(interval)
				return val
			} else if (guess < val) {
				low = guess + 1
				for (var i = 0; i < low; i++) {
					$('#' + i).addClass('red')
				}
			} else {
				for (var i = high; i >= guess; i--) {
					$('#' + i).addClass('red')
				}
				high = guess - 1
			}
		}
	}, 2000)
}

$(document).ready(function() {
	run();
	$('#submit').click(function(e) {
		e.preventDefault()
		run()
		var val = $('#user-number').val()
		binarySearch(Number(val), 0, 1000)
	})
})

function run() {
	$("#nodes").html('')
	for (var i = 0; i <= 1000; i++) {
		var node = document.createElement('div')
		node.setAttribute("class", 'node')
		node.setAttribute('id', i)
		node.innerHTML = i
		document.getElementById('nodes').appendChild(node)
	}
}