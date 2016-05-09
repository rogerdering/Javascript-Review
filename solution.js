var seatdata = [true, false, false, false, true]

for ( var i = 0 ; i < seatdata.length; i++) {
	seatvalue.push ( calcval ( i ) )
}

function calcval( position ) {
	var chair = {
		taken: false,
		score: 0
	}
	var left = {
		score: 0,
		ends: true
	} 

	var right = {
		score: 0,
		ends: false 
	}
	chair.position = position

	if ( seatdata [ position ] ) {
		chair.taken = true
		return chair
	}



	for ( var i = 0; i < seatdata.length; i++ ) {
		if (seatdata[i] ) {
			right.score ++
		} else if ( seatdata [i] ) {
			chair.score = right.score
			i = seatdata.length +1
		} else if ( seatdata[i] == undefined ) {
			right.ends = true
		}
		
	}

	for ( var i = position -1; i > 0; i++) {
		left.ends = false
		if ( !seatdata[i] ) {
			left.score ++
		} else if ( seatdata[i] ) {
			chair.score = left.score
			return chair
		} else if ( seatdata[i] == undefined)
		i = 0
	}

}
