const output=document.querySelector('#output');
const button=document.querySelector('#btn');
const question=document.querySelector('#question');
const list = ['signs look good', 'most definitely', 'all things point to yes', 'absolutely', 'does not look good', 'not going to happen','maybe yes','not likely','fa get about it','The answer is definitely yes', 'The stars have aligned and all things look good', 'The answer is most definitely yes'];

function answer(){
	let randomIndex=(Math.floor(Math.random()*list.length));
	let x = new String(list[randomIndex]);
	return(x.toString());
}

button.addEventListener('click', function(){
	if(question.value == false ){
		output.innerHTML="You must ask a question.";
	 }else{
		 console.log(question.value);
		 question.value='';
			output.innerHTML= answer();
	 }
});
