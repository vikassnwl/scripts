function createError(msg){
	const err = new Error(msg)
	Error.captureStackTrace(err, createError)
	return err
}

function square(n){
	if(typeof n !== 'number'){
		const err = createError('not a number')
		throw err
	}
	return n*n
}


const result = square('a')
console.log(result)

