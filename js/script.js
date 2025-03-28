$(document).ready(function(){

	const card = document.querySelectorAll('.main__img');
	const wrapGrid = document.querySelector('.wrap__grid');
	const finalIimg = document.querySelector('.main__img_final');
	const mainBlock = document.querySelector('.main');
	let count = 0;

	function FinalImg(){
		wrapGrid.classList.add('hidden');
		finalIimg.classList.remove('hidden');
	}

	
	card.forEach( item  => item.addEventListener('click', function(){
		switch(item.getAttribute("data-status")) {
			case 'first': 
			item.setAttribute("data-status", "second");
			item.style.transform = "rotate(180deg)";
			break;
			case 'second': 
			item.setAttribute("data-status", "third");
			item.style.transform = "rotate(270deg)";
			break;
			case 'third': 
			item.setAttribute("data-status", "finish");
			item.style.transform = "rotate(360deg)";
			count += 1;
			break;
			case 'finish': 
			item.setAttribute("data-status", "first");
			item.style.transform = "rotate(90deg)";
			count -= 1;
			break;
		}

		if (count == 9){
			mainBlock.classList.add('hidden');
			/*$('.main').fadeOut(100);*/
			$('.final_show').fadeIn(800);
		}

	})

	 );

	 

	 


	
})	
