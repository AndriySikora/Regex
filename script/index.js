$( document ).ready(function(){

	$('#btnMask').click(function() {
		var str = $('#container1').val();
		var regex = /^(\w{3})(\d{16})(\d{4})$/;
		var subst = `\$1XXXXXXXXXXXXXXXX\$3`;
		var res = str.replace(regex,subst);
		$('#container1').text(res);
	});

	$('#btnGetNum').click(function() {
		var str = $('#container2').val();
		var regex = /\b(\d+)/g;
		var res = str.match(regex).toString();
		console.log('Only numbers from string: ', res);
	});

	$('#btnSame').click(function() {
		var str = $('#container3').val();
		var regex = /\b(\w+)\s+\1\b/g;
		var res = str.match(regex).toString();
		console.log('Duplicated words: ', res);
	});
	
	$('#btnUpperCase').click(function() {
		var str = $('#container4').val();
		var regex = /[A-Z]\w+/g;
		var m;
		while((m = regex.exec(str)) !== null) {
    		m.forEach((match) => {
        		console.log(`Words with capital letters ${match}`);
   			});
		}	
	});

});
