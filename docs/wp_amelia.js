console.log('ADMIN AMELIA GITHUB !!')
// var displayName = jinda_custom.current_user.display_name;

jQuery(document).ready(function ($) {
	console.log('Running custom-script.js (modify in appearance > theme file editor');
// 	var displayName2 = jinda_custom.current_user.display_name;
 //	console.log('ready function12');
//	console.log('display_name:' + current_user.data.display_name);
//	console.dir(current_user);
// 	console.log('username2:' + displayName2);
 	

// 	console.log($("#am-calendar > div.am-page-header.am-section > div > div.align-right.v-calendar-column.el-col.el-col-18 > div > button"));
// 	console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input"));
	
// 	console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input").val())
	$("#pane-schedule > div:nth-child(4) > div > div > div > input").attr("readonly", false); 
	var dateCat = $("#pane-schedule > div:nth-child(4) > div > div > div > input").val('Jinda Thai Massage Palmstraat Oss');
	console.log(dateCat.val())
	$("#pane-schedule > div:nth-child(4) > div > div > div > input").attr("readonly", false); 
	$("#pane-schedule > div:nth-child(4) > div > div > div > input").val("Glenn Quagmire");
// 	console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input").val())

	
	console.log($("#am-calendar > div.am-section.am-calendar > div.am-calendar-employees"));
	console.log('should be added');
	
	window.onload = function() {
		
// 		console.log('onload');		
// 		console.log($("#am-calendar > div.am-page-header.am-section > div > div.align-right.v-calendar-column.el-col.el-col-18 > div > button"));
// 		console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input"));
			setTimeout(function() {
				//    jQuery("#am-calendar > div.am-section.am-calendar > div.am-calendar-employees").append("<div><h2>&gt;Is er bij 1 masseuse geen plek, kijk dan zeker ook bij de andere masseuse door hier op de foto te klikken </h2></div>");
				// Above one added the text to the main dashboard
		//		 jQuery("#am-calendar > div.am-section.am-calendar > div.am-calendar-employees").append("<div><span style='color:red;font-weight:bold;'>Bizziphone: Dinsdag 11 april (vandaag) zijn er installatie werkzaamheden daarom is tot 16:30 geblokkeerd</span></div>");
				
 					console.log('after timeout');		
			  }, 500);
// 		
	

// 		console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input").val())
		$("#pane-schedule > div:nth-child(4) > div > div > div > input").attr("readonly", false); 
		var dateCat = $("#pane-schedule > div:nth-child(4) > div > div > div > input").val('Jinda Thai Massage Palmstraat Oss');
// 		console.log(dateCat.val())
		$("#pane-schedule > div:nth-child(4) > div > div > div > input").attr("readonly", false); 
		$("#pane-schedule > div:nth-child(4) > div > div > div > input").val("Glenn Quagmire");
// 			console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input").val())
// 			
// 			
// 			
		var myFunction = function(){
 			console.log('clicked2');		
			
// 			console.log($("#pane-schedule > div:nth-child(4) > div > div > div > input").val());

// 			console.log('huh2');		
			  setTimeout(function() {
				   console.log(jQuery("#pane-schedule > div:nth-child(5) > label"));
				   jQuery("#pane-schedule > div:nth-child(5) > label").append(' (<b>Kies andere medewerkster als 1 bezet is.</b>)');
				   $("#pane-schedule > div:nth-child(4) > div > div > div > input").attr("readonly", false); 
				   
				   jQuery("#pane-schedule > div:nth-child(4) > div > div > div > input").val('Jinda Thai Massage Palmstraat Oss');
				  
			//	  "body > div.el-select-dropdown.el-popper.is-multiple.am-dropdown-cabinet > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > div > div"
				  jQuery(".am-drop-create-item").on('click',function(){
					  console.log('clicked create customer');				
					  setTimeout(function() {
		// 				   $("#pane-schedule > div:nth-child(4) > div > div > div > input").attr("readonly", false); 

						  // jQuery("#am-calendar > div:nth-child(5) > div > div.el-dialog__body > div > div.am-dialog-scrollable > form > div:nth-child(6) > div > div > div > input").val('Dutch');
						   jQuery("body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(2)").click();
						   console.log('after timeout create customer');		
					  }, 900);
				  });	
				  
				  //jQuery("#pane-schedule > div:nth-child(10) > div > div > textarea").val('Entered by (ingevuld door): ' + current_user.data.display_name + ' ingevuld op: ');
				  
  				   console.log('after timeout');		
			  }, 500); 			
		}
		$("#am-calendar > div.am-page-header.am-section > div > div.align-right.v-calendar-column.el-col.el-col-18 > div > button").on('click',myFunction);		
		$("#am-plus-symbol").on('click',myFunction);		
		
			
// 		console.log('end onload');
// 		
	}
	

});


const PAUSE_COLOR = 'orange';
const DUO_COLOR = 'green';
const SPECIAL_COLOR = 'olive';
const UNPAID_BORDER_STYLE = '2px solid red';
const NOTFULLYPAID_BORDER_STYLE = '2px solid orange';

var appointmentState = 0;
var employeeText = "Employee: (If one is occupied the other should be tried)";
var appointmentText = 'Entered by (ingevuld door): ' + current_user.data.display_name + ' (' + current_user.data.user_ip_address + ') ingevuld op: ';
var customerText = 'Entered by (ingevuld door): ' + current_user.data.display_name + ' (' + current_user.data.user_ip_address + ') ingevuld op: ';

var sheet = window.document.styleSheets[0];
sheet.insertRule('.is-disabled { display: none;}', sheet.cssRules.length);
sheet.insertRule('.extra_hidden { display: none !important;}', sheet.cssRules.length);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function checkApt(){
	let apt = jQuery('#pane-schedule');

	if(jQuery('div.el-col.el-col-18 > h2:contains("New Customer")').length){
		console.log('ASDASDASD');
		appointmentState = 1;
		return;
	}
	if(apt.length){

		let flag_newone = jQuery('#pane-schedule').parent().parent().parent().parent().children()[0].innerText == 'New Appointment';
		


		
		let children = apt.children('div');
		children.show();

		//jQuery('#tab-extras').hide();
		//jQuery('#pane-extras').remove();
		//jQuery('#tab-customFields').hide();
		//jQuery('#pane-customFields').remove();

		let customerSelect = jQuery(jQuery('label[for="bookings"]').parent()[0]);
		if(customerSelect.find('.el-select__tags-text').length == 0){
			appointmentState = 0;
			window.pointToClick = customerSelect.find('input');
			return children.slice(1).hide();
		}


		
		let textInput = jQuery('textarea');
		let appointmentTextTemp = appointmentText + ' ' + new Date();
		
		
		if(textInput.length && !textInput[0].value && flag_newone){
			console.log('Text with date:', appointmentTextTemp)
			textInput.val(appointmentTextTemp).trigger("input").trigger("change");
			let event = document.createEvent('HTMLEvents');
			event.initEvent('input', true, true);
			textInput[0].dispatchEvent(event)
		}

/*
		let dateInput = jQuery('input[placeholder="D MMMM , YYYY"');
		if(dateInput.length && flag_newone){
			dateInput[0].onclick = function(){
				if(!dateInput.value){
					var repeat = setInterval( function(){ 
	            		Array.from(document.querySelectorAll('.c-day-content'))
	            		.filter(i => i.innerText.replaceAll(' ', '').replaceAll('\n', '') == (new Date()).getDate())
	            		.forEach(i => i.click());
	            		if(dateInput.value){
	            			clearInterval(repeat);
	            		}
	        		}, 10);
				}
			};	
		}
*/

		jQuery('#pane-schedule').find('label[for="lessonSpaceId"]').parent().hide()
		jQuery('#pane-schedule').find('input[placeholder="Select Location"]').parents('.el-form-item').hide()
				

		switch(appointmentState){
			case 0:
				if(window.pointToClick){
					window.pointToClick.click();
				}
				appointmentState = 1;
				

				
			case 1:
				if(!jQuery('input[placeholder="Select Service Category"]')[0].value){
					return children.slice(3).hide();
				}
				appointmentState = 2;
			case 2:
				if(!jQuery('input[placeholder="Select Service:"')[0].value){
					return children.slice(4).hide();
				}
				appointmentState = 3;
			case 3:
				
				let loc = jQuery('input[placeholder="Select Location"]')[0];
				if(!loc.value){
					loc.click();
					jQuery(loc).parents('.el-form-item').find('label').html('');
					jQuery('ul.el-select-dropdown__list:visible').children('li').not('.is-disabled')[0].click();
					loc.hide();
					return children.slice(6).hide(); 
				}
				appointmentState = 4;
			case 4:
				jQuery('label[for=providerId]').text(employeeText);
				appointmentState = 5;
			case 5:
				if(!jQuery('input[placeholder="Select Employee"]')[0].value){
					return children.slice(6).hide();
				}
				appointmentState = 6;
		}
	}
}

async function checkNewCustomer(){
	let newCustomer = jQuery('div.el-col.el-col-18 > h2:contains("New Customer")').parents('div.am-dialog-scrollable');
	if(newCustomer.length){

		jQuery('label:contains("WordPress User:")').parent().hide();
		jQuery('label:contains("Date of Birth:")').parent().hide();

		

		let lang = jQuery('input[placeHolder="Language"]');
		if(lang.length && !lang[0].value){
			if(!window.clickingLanguage){
				window.clickingLanguage = true;
				lang.prop('required',true);
				lang.click();
				for(let i=0; i<50; i++){
					let flag = jQuery('li > span > img.option-languages-flag[src$="us.png"]');
					if(flag.length){
						flag.click();
						break;
					}
					await sleep(10);
				}
				window.clickingLanguage = false;

			}
			
			
		}


		let textInput = newCustomer.find('label:contains("Note (Internal):")').parent().find('textarea');
		
		if(textInput.length && !textInput[0].value){
			jQuery(textInput).val(customerText).trigger("input").trigger("change");
			let event = document.createEvent('HTMLEvents');
			event.initEvent('input', true, true);
			textInput[0].dispatchEvent(event)
		}	

	}
}

async function changeCalendarByCustomerName(name, color){
	jQuery(`span.am-calendar-customer:contains("${name}")`).parent().parent().css("background-color", color);
}

async function changeCalendarByStatus(statusName, color){
	jQuery(`.am-calendar-status.${statusName}`).parent().parent().css("background-color", color);
}


window.timestamp_scroll = 0;
window.addEventListener('scroll', function() {
    window.timestamp_scroll = new Date().getTime();
});

async function refreshCalendar(){

	if(!jQuery('#calendar').length){return;}

	let chosenBefore = jQuery('#calendar > .fc-toolbar').children('.fc-right').children('.fc-state-active')[0].className.split(' ')[0];
	let times; 

	if(chosenBefore == 'fc-agendaWeek-button'){
		times = Array.from(jQuery('#calendar').find('th'))
			.map(i => [
				i.getAttribute('data-date') , 
				i.getBoundingClientRect().left,
				i
			])
			.filter(i => i[0]).sort();
	}

	jQuery((chosenBefore == 'fc-agendaWeek-button') ? '.fc-day-button' : '.fc-agendaWeek-button').click();
	await sleep(300);

	if(chosenBefore != 'fc-agendaWeek-button'){
		while(jQuery('#calendar').find('th').length == 0){
			await sleep(100);
		}
		times = Array.from(jQuery('#calendar').find('th'))
			.map(i => [
				i.getAttribute('data-date') , 
				i.getBoundingClientRect().left,
				i
			])
			.filter(i => i[0]).sort();
	}

	jQuery(`.${chosenBefore}`).click()
	await sleep(300);

	let line = jQuery('div.fc-now-indicator.fc-now-indicator-arrow');
	if(line.length && (new Date().getTime() - window.timestamp_scroll) > 5*60*1000){line[0].scrollIntoView()}


	let req = await fetch(`https://jinda-massage.nl/wp-admin/admin-ajax.php?action=wpamelia_api&call=/appointments&dates=${times[0][0]},${times[times.length-1][0]}`, {
		  "headers": {
		    "accept": "*/*",
		    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
		    "cache-control": "no-cache",
		    "pragma": "no-cache",
		    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
		    "sec-ch-ua-mobile": "?0",
		    "sec-ch-ua-platform": "\"Windows\"",
		    "sec-fetch-dest": "empty",
		    "sec-fetch-mode": "cors",
		    "sec-fetch-site": "same-origin",
		    "x-requested-with": "XMLHttpRequest"
		  },
		  "referrer": "https://jinda-massage.nl/wp-admin/admin.php?page=wpamelia-calendar",
		  "referrerPolicy": "no-referrer-when-downgrade",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
	});
	times.push(['', Infinity, '']);

	if(req.status == 200){
		let data = await req.json();
		data = data.data.appointments;

		let table = {};
		let allApt = Array.from(jQuery('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end.fc-draggable'))
					.map(i => [
						i.querySelector('.fc-time').innerText, 
						i.getBoundingClientRect().left,
						i.getElementsByClassName('am-calendar-customer')[0].innerText, 
						i.querySelector('.am-calendar-employee').querySelector('img').parentNode.innerText,
						i
			]);
		
		


		if(chosenBefore == 'fc-agendaWeek-button'){


			allApt.forEach( function([tm, lft, cust, empl, block]){
				tm = tm.replaceAll(' ', '').split('-');
				let chosenTime;
				for(let i=0; i<times.length; i++){
					if(times[i][1] <= lft && lft < times[i+1][1]){
						chosenTime = times[i][0];
						break;
					}
				}


				hsh = [chosenTime, tm[0], tm[1], cust, empl].join('_');

				while(hsh.includes('  ')){
					hsh = hsh.replaceAll('  ', ' ');
				}

				table[hsh] = block;


			});

			let table2 = {};
			

			for(const chosenTime in data){
				data[chosenTime].appointments.forEach(function(apt){

					let startTime = apt.bookingStart.split(' ')[1].split(':').slice(0, 2).join(':');
					let endTime = apt.bookingEnd.split(' ')[1].split(':').slice(0, 2).join(':');
					let cust = apt.bookings[0].customer.firstName + ' ' + apt.bookings[0].customer.lastName;
					let empl = apt.provider.firstName + ' ' + apt.provider.lastName;
					if(apt.bookings[0].info != null){
						let extraInfo = JSON.parse(apt.bookings[0].info);
						cust = extraInfo.firstName + ' ' + extraInfo.lastName;
						//console.log(cust);
					}
					
					
					
					


					

					hsh = [chosenTime, startTime, endTime, cust, empl].join('_');
					while(hsh.includes('  ')){
						hsh = hsh.replaceAll('  ', ' ');
					}
					table2[hsh] = apt;

					if(table[hsh] != undefined && document.getElementById(hsh.replaceAll(' ', '_')+'_for_customjs') == undefined){
						let div = document.createElement('DIV');
						div.id = hsh.replaceAll(' ', '_')+'_for_customjs';

						
						table[hsh].querySelector('span.am-calendar-customer').innerHTML =apt.id + ' ' + table[hsh].querySelector('span.am-calendar-customer').innerHTML;
						
						if(table[hsh]){					
							let emplo = table[hsh].querySelector('span.am-calendar-employee');
							if(emplo && emplo.innerHTML.includes('(') &&  emplo.innerHTML.includes(')')){
								table[hsh].querySelector('span.am-calendar-employee').innerHTML = emplo.innerHTML.split('(')[0] +  emplo.innerHTML.split(')')[1] ;
							}
						}
						
						
						if(apt.bookings[0].customer.phone ){ 
							
							apt.bookings[0].customer.phone = apt.bookings[0].customer.phone.replaceAll(' ', '').replace('+', '');

							if( window.toggle_phone){
								table[hsh].querySelector('span.am-calendar-customer').innerHTML += `<a class="toggled_phones" href="https://wa.me/${apt.bookings[0].customer.phone}"  target="_blank" style="margin-left:5px">${apt.bookings[0].customer.phone}</a><br>`;
							}
						}

						let newDiv = document.createElement('DIV');
						newDiv.innerHTML = '€'+apt.bookings[0].payments[0].amount +' / ' + '€'+apt.service.price

						

						if(apt.bookings[0].payments[0].amount != '0'){
							
							jQuery(newDiv).css('border', (apt.service.price == apt.bookings[0].payments[0].amount) ? UNPAID_BORDER_STYLE : NOTFULLYPAID_BORDER_STYLE)
							jQuery(newDiv).css("font-weight", "bold")
						}

						div.appendChild(newDiv);


						table[hsh].getElementsByClassName('fc-content')[0].appendChild(div);
						//console.log(apt);
						//
						let dateName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(new Date(apt.bookingEnd)).getDay()];
						table[hsh].getElementsByClassName('fc-time')[0].children[0].innerHTML += ' [ ' + dateName+' '+apt.bookingEnd.split(' ')[0].split('-').reverse().join('-')+']';
						
						if(apt.service.name.includes('DUO')){
							jQuery(table[hsh]).css('background-color', DUO_COLOR)
						}
						if(apt.service.name.includes('special')){
							jQuery(table[hsh]).css('background-color', SPECIAL_COLOR)
						}
						
						

						let extraField = JSON.parse(apt.bookings[0].customFields);
						for(const extraFieldName in extraField){
							if( extraField[extraFieldName].label == 'Voorkeur masseuse' && extraField[extraFieldName].value){
								div.innerHTML += `Voorkeur masseuse: ${extraField[extraFieldName].value} <br>`
							}

							if( extraField[extraFieldName].label == 'Voorkeur masseuse (V) of masseur (M)' && extraField[extraFieldName].value){
								div.innerHTML += `Voorkeur masseuse (V) of masseur (M): ${extraField[extraFieldName].value} <br>`
							}
							
							
						}

						
						//console.log('FOUND');

					}
					//console.log(chosenTime, hsh, apt);
				})
			}

			//console.log('TABLE COMP', Object.keys(table).length, Object.keys(table2).length);
			


			// show already paid with the different color
			// give duo with the same color
			// show phone number

		


		} else if(chosenBefore == 'fc-day-button'){

			// connect the shown one with the right one
			

			allApt.forEach( function([tm, lft, cust, empl, block]){
				tm = tm.replaceAll(' ', '').split('-');

				hsh = [tm[0], tm[1], cust, empl].join('_');

				while(hsh.includes('  ')){
					hsh = hsh.replaceAll('  ', ' ');
				}

				table[hsh] = block;

			});

			let table2 = {};
			

			for(const chosenTime in data){
				data[chosenTime].appointments.forEach(function(apt){

					let startTime = apt.bookingStart.split(' ')[1].split(':').slice(0, 2).join(':');
					let endTime = apt.bookingEnd.split(' ')[1].split(':').slice(0, 2).join(':');
					let cust = apt.bookings[0].customer.firstName + ' ' + apt.bookings[0].customer.lastName;
					let empl = apt.provider.firstName + ' ' + apt.provider.lastName;
					if(apt.bookings[0].info != null){
						let extraInfo = JSON.parse(apt.bookings[0].info);
						cust = extraInfo.firstName + ' ' + extraInfo.lastName;
						//console.log(cust);
					}


					

					hsh = [startTime, endTime, cust, empl].join('_');
					while(hsh.includes('  ')){
						hsh = hsh.replaceAll('  ', ' ');
					}
					table2[hsh] = apt;
					
					if(table[hsh]){					
						let emplo = table[hsh].querySelector('span.am-calendar-employee');
						if(emplo && emplo.innerHTML.includes('(') &&  emplo.innerHTML.includes(')')){
							table[hsh].querySelector('span.am-calendar-employee').innerHTML = emplo.innerHTML.split('(')[0] +  emplo.innerHTML.split(')')[1] ;
						}
					}

					if(table[hsh] != undefined && document.getElementById(hsh.replaceAll(' ', '_')+'_for_customjs') == undefined){
						let div = document.createElement('DIV');
						div.id = hsh.replaceAll(' ', '_')+'_for_customjs';
						
						table[hsh].querySelector('span.am-calendar-customer').innerHTML =apt.id + ' ' + table[hsh].querySelector('span.am-calendar-customer').innerHTML;
						
						if(apt.bookings[0].customer.phone ){
							apt.bookings[0].customer.phone = apt.bookings[0].customer.phone.replaceAll(' ', '').replace('+', '');
							if( window.toggle_phone){
								table[hsh].querySelector('span.am-calendar-customer').innerHTML += `<a class="toggled_phones" href="https://wa.me/${apt.bookings[0].customer.phone}"  target="_blank" style="margin-left:5px">${apt.bookings[0].customer.phone}</a><br>`;
							}
							
						}

						let newDiv = document.createElement('DIV');
						newDiv.innerHTML = '€'+apt.bookings[0].payments[0].amount +' / ' + '€'+apt.service.price

						
						if(apt.bookings[0].payments[0].amount != '0'){
							jQuery(newDiv).css('border', (apt.service.price == apt.bookings[0].payments[0].amount) ? UNPAID_BORDER_STYLE : NOTFULLYPAID_BORDER_STYLE)
							jQuery(newDiv).css("font-weight", "bold")
						}

						div.appendChild(newDiv);


// 						const $ = jQuery(dom.window);
					
						
						table[hsh].getElementsByClassName('fc-content')[0].appendChild(div);
						
						let dateName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(new Date(apt.bookingEnd)).getDay()];
						table[hsh].getElementsByClassName('fc-time')[0].children[0].innerHTML += ' [ ' + dateName+' '+apt.bookingEnd.split(' ')[0].split('-').reverse().join('-')+']';
						
						
						if(apt.service.name.includes('DUO')){
							jQuery(table[hsh]).css('background-color', DUO_COLOR)
						}
						if(apt.service.name.includes('special')){
							jQuery(table[hsh]).css('background-color', SPECIAL_COLOR)
						}

						let extraField = JSON.parse(apt.bookings[0].customFields);
						for(const extraFieldName in extraField){							
							if (!extraField[extraFieldName].value){
								continue;
							}
														
							if( extraField[extraFieldName].label == 'Welke massage wilt u'){
								if (extraField[extraFieldName].value.includes('weet')) {
									div.innerHTML += `<b>Massage type:</b> I dont know, ask me<br/>`
								} else {
									div.innerHTML += `<b>Massage type:</b> ${extraField[extraFieldName].value} <br/>`
								}
							}
							
							
							if( extraField[extraFieldName].label == 'Opmerkingen en verzoeken'){
								div.innerHTML += `<br/><b>Customer note:</b> ${extraField[extraFieldName].value} <br/>`								
							}
							
							
							if( extraField[extraFieldName].label == 'Voorkeur masseuse'){
								div.innerHTML += `<b>Voorkeur masseuse:</b> ${extraField[extraFieldName].value} <br/>`
							}

							if( extraField[extraFieldName].label == 'Voorkeur masseuse (V) of masseur (M)'){
								div.innerHTML += `<b>Voorkeur masseuse (V) of masseur (M):</b> ${extraField[extraFieldName].value} <br/>`
							}
						}
						
						//console.log('FOUND');

					}
					//console.log(chosenTime, hsh, apt);
				})
			}

			
			
			let translateDiv = document.createElement('DIV');
			translateDiv.id = 'google_translate_element';
			translateDiv.innerHTML = 'hey_google_translate_element';
			//body.appendChild(translateDiv);

			jQuery("body").append(' <script type="text/javascript"> function googleTranslateElementInit() { new google.translate.TranslateElement( {pageLanguage: \'nl\'}, \'google_translate_element\' );} </script>');
			
			

		}
	}
}






function checkupDOM(left){
	if(left == 0){return console.warn('Daily button not found');}
	if(jQuery('.fc-day-button').length == 1){
		console.log('Daily button is found');
		jQuery('.fc-day-button').click();
		return refreshCalendar();
	}
	setTimeout(() => checkupDOM(left-1), 50);
}
checkupDOM(200);


async function removeAlogo(){
	jQuery('#am-calendar').children().slice(0, 1).hide()
}
 
async function swapAllPhoneLinksToWhatsapp(){
	jQuery('a[href^="tel:"]')
		.each( function(){
    		this.href = this.href.replace('tel:', 'https://wa.me/');
    		this.setAttribute('target', '_blank')
    })

}

async function catchHelpButton(){
	if(window.toggle_phone != undefined){return;}
	let btn = document.getElementsByClassName('am-help-button');
	if(btn.length){
		btn = btn[0];
		if(btn.href.length){
			window.toggle_phone = false;
			btn.removeAttribute("href");
			btn.onclick = function(){
				window.toggle_phone = ! window.toggle_phone;
				refreshCalendar();
			}
		}
	}
}

setInterval(async function(){
	removeAlogo();
	checkApt();
	checkNewCustomer();
	changeCalendarByCustomerName('Break Pauze', PAUSE_COLOR);
	swapAllPhoneLinksToWhatsapp();
	catchHelpButton();
	//changeCalendarByStatus('approved', 'red');
}, 200);

setInterval(async function(){
	refreshCalendar()
}, 30*1000);
