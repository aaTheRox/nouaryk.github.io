// Variable declaration 'n shit
let text = $('#text');

// handler for input when typing
function textTransform(e) {
	let value =  e.value;
	
	$('#result').removeClass('is-hidden');
	$('#result').html('<img onclick="clipboard();" src="https://cdn3.iconfinder.com/data/icons/basic-ui-31/16/07.Basic_UI_copy-paste-clipboard-file-512.png"'
	+'class="clipboard is-pulled-right"> <b>Transformed Text</b> <input id="input-clipboard" readonly class="clipboard-disabled" />');

 value.length < 1 ? $('#result').addClass('is-hidden') : 0 ;

 replaceToUpperCase(value);
}


// This mudafucka will replace even characters to upperCase
function replaceToUpperCase(str) {
	let replaced = [], text = "";
	for (let i=0; i < str.length; i++){
    i % 2 == 0  ? replaced.push(str[i].toLowerCase()) : replaced.push(str[i].toUpperCase());
  }
  $('#input-clipboard').val(replaced.join(''));
}

// This shit is for copying the result text to your modafucka clipboard
function clipboard() {
  $('#input-clipboard').select();
  document.execCommand("copy");
}

