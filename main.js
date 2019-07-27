function app(n,a,z) {
	console.log('Привет, '+n+', я твоя первая программа, меня зовут - app');

	function mySkills() {
		let skills = ['HTML','CSS','JQUERY','BOOTSTRAP','SASS'];

		for (let i = 0; i < skills.length; i++) {
		console.log('Я знаю '+skills[i])
		};
	
	};

	mySkills();

	function checkAge(v){
		if (v >= 18) {
			console.log('Все в норме, ты просираешь свой потенциал, тебе уже >= 18 лет, а ты ничего не умеешь.')
		} else {
			console.log('Ты еще молодой и тебе < 18 лет, у тебя есть не плохой шанс приуспеть в чем-то в жизни, но сокрее всего ты просрешь весь свой потециал.')
		}
	};

	checkAge(a);

	function calcPow(k){
		let pow = k * k;
		console.log('Кстати, квадрат числа '+k+' равен: '+pow)
	};

	calcPow(z);
	
};

let n = prompt('Как тебя зовут?');
let a = prompt('Сколько тебе лет?');
let z = prompt('Введи любое число');

app(n, a, z);