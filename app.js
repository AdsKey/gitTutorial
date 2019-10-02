function convertToMin (timeLine){
		timeLine=timeLine.split(':')
		let myMin=0
			for (let i = timeLine.length - 1; i >= 0; i--){
				myMin+=timeLine[i]*Math.pow(60,1-i)
			}
		return myMin
	}

function calcAllTimeInMin (timeLines){
		let allMin=0
		console.log(timeLines)
		let i=0
			for (let i=0; i<timeLines.length; i++)	{
				allMin+=convertToMin(timeLines[i].innerText)
			}
		return allMin.toFixed(2)+" мин"
	}