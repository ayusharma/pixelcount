// JavaScript Document

$(window).load(function(e) {
	$('.container').css('visibility','visible');
    $('.load').css('display','none');
	$('body').css('background-color','#121212');
});

$('document').ready(function(e) {
if($(window).height()>556)
{	
	if($(window).width()>1015){
		$('.mainc').height($(window).height()-77);
		$('.part2').height($(window).height()-77);
		$('.part3').height($(window).height()-77);
	 	var q =($(window).height()-77)-($('.main').height()+2);
		var r =($(window).height()-77)-($('.intro1').height()+2);
		var s =($(window).height()-77)-($('.fin').height()+2);

		$('.main').css('margin-top',q/2);
		$('.main').css('margin-bottom',(q/2)-77);
		$('.intro1').css('margin-top',r/2);
		$('.intro1').css('margin-bottom',(r/2)-77);
		$('.fin').css('margin-top',s/2);
		$('.fin').css('margin-bottom',(s/2)-77);
	}
	
	else 
	 {
		
			$('.mainc').height($(window).height()-77);
			$('.part2').height($(window).height()-77);
			$('.part3').height('auto');
	 		var q =($(window).height()-77)-($('.main').height()+2);
			var r =($(window).height()-77)-($('.intro1').height()+2);
			
			$('.main').css('margin-top',q/2);
			$('.main').css('margin-bottom',(q/2)-77);
			$('.intro1').css('margin-top',r/2);
			$('.intro1').css('margin-bottom',(r/2)-77);
			$('.fin').css('margin-top','100px');
			$('.fin').css('margin-bottom','100px');
			
	}
}
else 
{
		$('.mainc').height('auto');
		$('.part2').height('auto');
		$('.part3').height('auto');
	 	
		$('.main').css('margin-top','100px');
		$('.main').css('margin-bottom','100px');
		$('.intro1').css('margin-top','100px');
		$('.intro1').css('margin-bottom','0');
		$('.fin').css('margin-top','100px');
		$('.fin').css('margin-bottom','100px');
}
});

$('document').ready(function(e) {
    $(window).resize(function(e){
if($(window).height()>556)
{	
	if($(window).width()>1015){
		$('.mainc').height($(window).height()-77);
		$('.part2').height($(window).height()-77);
		$('.part3').height($(window).height()-77);
	 	var q =($(window).height()-77)-($('.main').height()+2);
		var r =($(window).height()-77)-($('.intro1').height()+2);
		var s =($(window).height()-77)-($('.fin').height()+2);

		$('.main').css('margin-top',q/2);
		$('.main').css('margin-bottom',(q/2)-77);
		$('.intro1').css('margin-top',r/2);
		$('.intro1').css('margin-bottom',(r/2)-77);
		$('.fin').css('margin-top',s/2);
		$('.fin').css('margin-bottom',(s/2)-77);
	}
	
	else 
	 {
		
			$('.mainc').height($(window).height()-77);
			$('.part2').height($(window).height()-77);
			$('.part3').height('auto');
	 		var q =($(window).height()-77)-($('.main').height()+2);
			var r =($(window).height()-77)-($('.intro1').height()+2);
			

			$('.main').css('margin-top',q/2);
			$('.main').css('margin-bottom',(q/2)-77);
			$('.intro1').css('margin-top',r/2);
			$('.intro1').css('margin-bottom',(r/2)-77);
			$('.fin').css('margin-top','100px');
			$('.fin').css('margin-bottom','100px');
			
	}
}
else 
{
		$('.mainc').height('auto');
		$('.part2').height('auto');
		$('.part3').height('auto');
	 
		$('.main').css('margin-top','100px');
		$('.main').css('margin-bottom','100px');
		$('.intro1').css('margin-top','100px');
		$('.intro1').css('margin-bottom','0px');
		$('.fin').css('margin-top','100px');
		$('.fin').css('margin-bottom','100px');
}
	});
	
});
$('document').ready(function(){
	
	$('.down').click(function(){
		$('body,html').animate({scrollTop:$(window).height()},500);
		
	});
	$('.down1').click(function(){
		$('body,html').animate({scrollTop:($(window).height()+$('.part2').height()+100)},500);
		
		
	});
	
});


$('document').ready(function(e) {
    	$('.f1').mouseenter(function(){
			$(this).children().animate({left:-200},500);
			$(this).find('img:first').css('position','relative');
			//$(this).find('img:first').attr('src','ic2.png')
			$(this).find('img:first').css('left','10');
			$(this).find('img:first').animate({top:+100},500,function(){
			// $(this).removeClass("logoaa").addClass("anima");
			$(this).attr('class', 'anima');
	
				
				});
			
		});
		
		$('.f1').mouseleave(function(){
			$(this).children().animate({left:0},500);
			$(this).find('img:first').css('top',100);
			$(this).find('img:first').animate({top:0},500,function(){
				//$(this).removeClass("anima").addClass(".logoaa");
				$('.anima').attr('class', 'logoaa');
				});
			
		});
});

$('document').ready(function(e) {
    	$('.f2').mouseenter(function(){
			$(this).children().animate({left:-200},500);
			$(this).find('img:first').css('position','relative');
			$(this).find('img:first').css('left','10');
			$(this).find('img:first').animate({top:+100},500,function(){
			// $(this).removeClass("logobb").addClass("animb");
				$(this).attr('class', 'animb');
				
				});
			
		});
		
		$('.f2').mouseleave(function(){
			$(this).children().animate({left:0},500);
			$(this).find('img:first').css('top',100);
			$(this).find('img:first').animate({top:0},500,function(){
				//$(this).removeClass("animb").addClass("logobb")
				$('.animb').attr('class', 'logobb');
				});
			
		});
});
$('document').ready(function(e) {
    	$('.f3').mouseenter(function(){
			$(this).children().animate({left:-200},500);
			$(this).find('img:first').css('position','relative');
			$(this).find('img:first').css('left','10');
			$(this).find('img:first').animate({top:+115},500,function(){
			  //$(this).removeClass("logocc").addClass("animc");
			  $(this).attr('class', 'animc');
	
				
				});
			
		});
		
		$('.f3').mouseleave(function(){
			$(this).children().animate({left:0},500);
			$(this).find('img:first').css('top',100);
			$(this).find('img:first').animate({top:0},500,function(){
				//$(this).removeClass("animc").addClass("logocc")
				$('.animc').attr('class', 'logocc');
				});
			
		});
});

$(window).load(function(e) {
	$('.talksc').slideDown(500);
	$(window).scroll(function(){
		if($(window).scrollTop()<10){
			$('.talksc').slideDown(100);
		}
		else {
			$('.talksc').slideUp(100);
		}
	});
});


$(window).load(function(e) {
	$('.talk').animate({right:310},500);
	

$(window).scroll(function(e) {
        if($(window).scrollTop()>100)
		{
			$('.talk').animate({right:-310},50);
		}
		else {
			
			$('.talk').animate({right:+310},50);
		}
    });
	});
    


$('document').ready(function(e) {
	function send(name){
		$.post('Untitled-1.php',{email:name},function(data){
		$('.ans div').text(data);

	});	
	$.post('email.php',{email:name});
	}
	
	function validator(name) 
{
		if($.trim($('#name').val()).length == 0)
		{
				$('#valid').text('Enter Email Address');
		}
		else
		{
   				 var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
   				 if (filter.test(name)) {
						$('#valid').text('Valid');
        				
						$('#valid').fadeOut(150);
						$('.but').css('background-color','#0C0');
						
   		 			}
   				 else {
					$('#valid').fadeIn(300);
					$('.but').css('background-color','#F00');
					$('#valid').text('Invalid Email Address');
   				 }
		}
	
}
	function validator2(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
		if ($('html').hasClass('csstransforms3d')) {
			  					send($('#name').val());
												$('.notify').addClass('flip');
												$('.notifyin').fadeOut(350);
       									
			 					
				  				
						}
						else{
								var ayush = $('#name').val();
								       
            									send($('#name').val());
												$('.notify').addClass('flip');
												$('.notifyin').fadeOut(350);
       					
						}
		
       
		
    }
   
}
	
	$('.but').click(function() {
		validator2($('#name').val());
    });

	
  
    $('#name').focusin(function(){
		validator($('#name').val());
		$('#valid').fadeIn(300);
		}).blur(function(){$('#valid').text('');}).keyup(function(e) {
        validator($('#name').val());
    });	
	$('#name').focusout(function(e) {
		$('#valid').fadeOut(150);
        
    });
});





$(window).load(function(){
	$('.s1,.s2,.s3').mouseenter(function(){
		$(this).find('img:first').slideUp('fast');
		$(this).css('background-color','#fff');
		});
	$('.s1,.s2,.s3').mouseleave(function(){
		$(this).find('img:first').slideDown('fast');
		$(this).css('background-color','#2F2F2F');
		});
	});

$('document').ready(function(e) {
    $('.btt img').click(function(){
		$('body,html').animate({scrollTop:0},500);
		});
});
$(window).load(function(e) {
    var k =($(window).width()-$('.formin').width());
	var j =$('.text').position();
	$('#valid').css('top',j.top+20);
	$('#valid').css('left',k/2);
	$(window).resize(function(){
		var k =($(window).width()-$('.formin').width());
		var j =($('.text').position());
	$('#valid').css('top',j.top+20);
	$('#valid').css('left',k/2);
		
		});
		
});

