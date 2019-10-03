// Input handler, whatever...
function textTransform(e) {
	let value =  e.value;
	
	if(value.length < 1) {
		$('#result').addClass('is-hidden');
	} else {
		$('#result').removeClass('is-hidden');
		$('#result').html('<img onclick="clipboard();" src="https://cdn3.iconfinder.com/data/icons/basic-ui-31/16/07.Basic_UI_copy-paste-clipboard-file-512.png"'
		+'class="clipboard is-pulled-right"> <b>Transformed Text</b> <input id="input-clipboard" readonly class="clipboard-disabled" />');
	 	replaceToUpperCase(value);
	}
}


// This mudafucka will replace characters to upperCase and lowercase
function replaceToUpperCase(str) {
	let replaced = [];
	for (let i=0; i < str.length; i++){
    if(i % 2 == 0) {
    	replaced.push(str[i].toLowerCase()); 
    } else {
    	replaced.push(str[i].toUpperCase());
   	} 
  }
  $('#input-clipboard').val(replaced.join(''));
}

// This shit is for copying the result text to your clipboard
function clipboard() {
  $('#input-clipboard').select();
  document.execCommand("copy");
}
