// 1

document.getElementById('myButton').addEventListener('click', () => {
	alert('Hello World!')
})

// 2

const randomNumber = Math.floor(Math.random() * 100) + 1

document.getElementById('checkButton').addEventListener('click', () => {
	const userGuess = Number(document.getElementById('guessField').value)
	const GuessResult = document.getElementById('GuessResult')

	if (userGuess === randomNumber) {
		GuessResult.textContent = 'Вітаємо! Ви вгадали правильне число!'
	} else if (userGuess < randomNumber) {
		GuessResult.textContent = 'Ваше число занадто мале. Спробуйте ще раз'
	} else {
		GuessResult.textContent = 'Ваше число занадто велике. Спробуйте ще раз'
	}
})

// 3

let clickCounter = 0
document.addEventListener('click', () => {
	clickCounter++
	document.getElementById('clickCount').textContent = clickCounter
})

// 4

const applyCallbackToEachElement = (arr, callback) => {
	const resultArray = []

	for (let i = 0; i < arr.length; i++) {
		resultArray.push(callback(arr[i]))
	}
	return resultArray
}

const arr = [1, 2, 3, 4, 5]
const squareCallback = num => num * num

const result = applyCallbackToEachElement(arr, squareCallback)
console.log(result)

// 5

const calculateDiscountedPrice = (price, discount, callback) => {
	const discountedPrice = price - price * (discount / 100)
	return discountedPrice
}

const logDiscountedPrice = discountedPrice => {
	console.log(`Дисконтна ціна: ${discountedPrice.toFixed(2)} грн`)
}

const originalPrice = 100 // Початкова ціна товару
const discountPercent = 20 // Відсоток знижки

console.log(
	calculateDiscountedPrice(originalPrice, discountPercent, logDiscountedPrice)
)
