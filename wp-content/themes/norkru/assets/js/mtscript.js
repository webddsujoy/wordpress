var BASEURL = 'http://palash-laptop/bihargovt/';


var BASICREGISTRATIONURL1 = BASEURL+'bceceboard-counselling/counselling-registration#Again-No-back-button';
var BASICREGISTRATIONURL2 = BASEURL+'bceceboard-counselling/counselling-registration#Again-No-back-button';
var BASICREGISTRATIONURL3 = BASEURL+"bceceboard-counselling/counselling-registration#Again-No-back-button"

var PD1 = '';
var PD2 = '';
var PD3 = '';
var PD4 = '';

var PD5 = BASEURL+'educationDetails_BCECEB#no-back-button';
var PD6 = BASEURL+'educationDetails_BCECEB#Again-No-back-button';
var PD7 = BASEURL+'educationDetails_BCECEB/AddDetails#no-back-button';
var PD8 = BASEURL+'educationDetails_BCECEB/AddDetails#Again-No-back-button';


window.location.hash = "no-back-button";
window.location.hash = "Again-No-back-button";//again because google chrome don't insert first hash into history
window.onhashchange = function () {
    window.location.hash = "no-back-button";
}


$(function () {

    var appendthis = ("<div class='modal-overlay js-modal-close'></div>");

    $('a[data-modal-id]').click(function (e) {
        e.preventDefault();
        $("body").append(appendthis);
        $(".modal-overlay").fadeTo(500, 0.7);
        //$(".js-modalbox").fadeIn(500);
        var modalBox = $(this).attr('data-modal-id');
        $('#' + modalBox).fadeIn($(this).data());
    });


    $(".js-modal-close, .modal-overlay").click(function () {
        $(".modal-box, .modal-overlay").fadeOut(500, function () {
            $(".modal-overlay").remove();
        });
    });

    $(window).resize(function () {
        $(".modal-box").css({
            top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
            left: ($(window).width() - $(".modal-box").outerWidth()) / 2
        });
    });

    $(window).resize();

});

$("#email_confirm").blur(function(){
    var email = $("#email").val();
    var conf_email = $("#email_confirm").val();
    if(email != conf_email){
       // alert('Email address and Confirm email address should be same');
	    swal({text: "Email address and Confirm email address should be same",});
        return false;
    }
});

function onClickPost1(){
	
	var ckbox = $('#postApplied1');
	if (ckbox.is(':checked')) {
		$("#examtypeDiv").show();
		
	}else{
		$("#examtypeDiv").hide();
		$("#exam_type").val('');
		$("#prDiv1").hide();
		$("#prefeDiv2").hide();
		$("#PPTprefeDiv2").hide();
		$("#cbt_city_preference1").val('');
		$("#cbt_city_preference2").val('');
		$("#cbt_city_preference3").val('');
		$("#ppt_city_preference1").val('');
		$("#ppt_city_preference2").val('');
		$("#ppt_city_preference3").val('');
	}
	
}
  
function getTestCity(){
	
	var ckbox = $('#postApplied1');
	var exam_type = $('#exam_type').val();
	
	
	if (ckbox.is(':checked')) {
		if(exam_type == 'CBT'){
			$("#prDiv1").show();
			$("#prefeDiv2").show();
			$("#PPTprefeDiv2").hide();
			$("#ppt_city_preference1").val('');
			$("#ppt_city_preference2").val('');
			$("#ppt_city_preference3").val('');
		}else if(exam_type == 'PPT'){
			$("#prDiv").show();
			$("#PPTprefeDiv2").show();
			$("#prefeDiv2").hide();
			$("#cbt_city_preference1").val('');
			$("#cbt_city_preference2").val('');
			$("#cbt_city_preference3").val('');
		}else{
			$("#prDiv1").hide();
			$("#prefeDiv2").hide();
			$("#PPTprefeDiv2").hide();
			$("#cbt_city_preference1").val('');
			$("#cbt_city_preference2").val('');
			$("#cbt_city_preference3").val('');
			$("#ppt_city_preference1").val('');
			$("#ppt_city_preference2").val('');
			$("#ppt_city_preference3").val('');
		}
			
		  				
	} else {
			$("#prDiv1").hide();
			$("#prefeDiv2").hide();
			$("#PPTprefeDiv2").hide();
			$("#cbt_city_preference1").val('');
			$("#cbt_city_preference2").val('');
			$("#cbt_city_preference3").val('');
			$("#ppt_city_preference1").val('');
			$("#ppt_city_preference2").val('');
			$("#ppt_city_preference3").val('');
		
	}  
	
		

}




function getOtherReligion() {
	
	var religion = $('#religion').val();
	
	if (religion == 'Other') {
		$('#div-religion-specify').show();
	}
	else {
		$('#div-religion-specify').hide();
		$('#other_religion').val('');
	}  
}  
function checkResultwaiting() {
	
	var result_waiting = $('#result_waiting').val();
	

	
	if (result_waiting == 'YES') {
			
		$("#acd_date5" ).removeClass( "required" )
	}
	else {
		$("#acd_date5" ).addClass( "required" )
	}  
} 


 



/*function onClickPost2(){
	var ckbox = $('#postApplied2');
	var ckbox2 = $('#postApplied1');
	
	if (ckbox.is(':checked')) {
		$("#JeescoreDiv").show();
		
		if (ckbox2.is(':checked')) {
			$("#divQualExam").show();
			
		} else {
			$("#divQualExam").hide();
			$("#qualifying_exam").val('');
		}
		
	} else {
		$("#JeescoreDiv").hide();
		
		$("#jee_score").val('');
		$("#divQualExam").hide();
		$("#qualifying_exam").val('');
		
	}

}*/

$(document).ready(function(){

    
    $('#register').validate({
       
	
	    groups: {
            nameGroup: "day month year"
        },
        rules: {

            std_code:{
                number: true,
                required:false,
                maxlength:5
            },
            mobile:{
                number: true,
                required:true,
                maxlength:10
            },
            english_percentage1:{
                max:100
            },
            english_percentage2:{
                max:100
            },
            english_percentage3:{
                max:100
            },
            board_percentage:{
                max:100
            },


            graduate_maximum_mark:{
                max:100
            },
            graduate_maximum_mark1:{
                max:100
            },
            graduate_maximum_mark2:{
                max:100
            },
            acd_percentage5:{
                max:100
            },
            acd_percentage6:{
                max:100
            },
            desire_percentage1:{
                max:100
            },
            desire_percentage2:{
                max:100
            },

            address:{
                required:true
            },
            city:{
                required:true,
                lettersonly:true
            },
            country:{
                required:true
            },
            ccode:{
                maxlength:5,
                minlength:2,
                number:true
            },
            cadd_zipcode:{
                required:true,
                minlength:6,
                maxlength:6,
                number:true
            },
            padd_zipcode:{
                required:true,
                minlength:6,
                maxlength:6,
                number:true
            },
            phoneNumber:{
                maxlength:10,
                minlength:5,
                number:true
            },
            mobile:{
                required:true,
                minlength:10,
                maxlength:10,
                number:true
            },
            land_line_number:{
                required:false,
                minlength:10,
                maxlength:10,
                number:true
            },
            otherNum:{
                minlength:10,
                maxlength:10,
                number:true
            },
            email_address: {
                required: true,
                email: true
            },
            email_confirm: {
                required: true,
                email_confirm: true
            },
            day: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            },
            aboutapu:{
                required: true
            }/*,
			landline:{ 
                maxlength:12,
				 required: false
               
				}*/
        },
        messages: {
            ccode:{
                required:_STDCODE_REQUIRED,
                number:_STDCODE_NUMBERONLY
            },
            phoneNumber:{
                required:_TELEPHONE_REQUIRED,
                number:_TELEPHONE_NUMBERONLY,
                maxlength:_TELEPHONE_LIMIT
            },
			
			/*landline:{
                // required: 'telephone field is mandatory',
				 maxlength:_TELEPHONE_LIMIT
            },*/
            mobile:{
                maxlength:_TELEPHONE_LIMIT
            },
            otherNum:{
                maxlength:_TELEPHONE_LIMIT
            },
            email_address: {
                required: _REQUIRED_EMAIL,
                email:_INVALID_EMAIL
            },
            email_confirm: {
                required: _REQUIRED_EMAIL,
                email_confirm:_INVALID_EMAIL
            },
            day: {
                required: 'Day field is mandatory'
            },
            month: {
                required: 'Month field is mandatory'
            },
            year: {
                required: 'Year field is mandatory'
            }
        }
    });
	
	
	
    var _VALID_CODE = "Invalid entry. Please enter distinct language";


    if($.validator) {
        $.validator.addMethod('uniquecodefn1', function(value, ele) {
            return !($('#centercode2').val() == value || $('#centercode3').val() == value);
        }, _VALID_CODE);
        $.validator.addMethod("lettersonly", function(value, element) {
            return this.optional(element) || /^[a-z ]+$/i.test(value);
        }, "Please enter alphabets only");
        $.validator.addMethod("lettersonlywithdot", function(value, element) {
            return this.optional(element) || /^[a-z .]+$/i.test(value);
        }, "Please enter alphabets, spaces, fulstop only");
        $.validator.addMethod("spcharacters", function(value, element) {
            return this.optional(element) || /^[a-z ,.]+$/i.test(value);
        }, "Please enter alphabets, spaces, fulstop & commas only");
        $.validator.addMethod("decimal", function(value, element) {
            return this.optional(element) || /^[0-9.]+$/i.test(value);
        }, "Please enter valid Number");
        $.validator.addMethod("number", function(value, element) {
            return this.optional(element) || /^[0-9]+$/i.test(value);
        }, "Please enter valid number");
        $.validator.addMethod("alphanum", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9]+$/i.test(value);
        }, "Please enter alphabets & numbers only");
        $.validator.addMethod("specialChar", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9 ,.]+$/i.test(value);
        }, "Special Characters not allowed");
		 $.validator.addMethod("nospecialChar", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9]+$/i.test(value);
        }, "Please enter alphabets & numbers only ");
		
		 $.validator.addMethod("NospecialCharonlyfew", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9 ,+.]+$/i.test(value);
        }, "Special Characters not allowed");
		
		$.validator.addMethod("landline", function(value, element) {
            return this.optional(element) || /^[0-9]{3,4}[-][0-9]{6,8}/i.test(value);
        }, "Please enter land line telephone no. like 0000-888888 or 0000-88888888");
		
			$.validator.addMethod("pancard", function(value, element) {
            return this.optional(element) || /^[A-Z]{5}[0-9]{4}[A-Z]{1}/i.test(value);
        }, "Please enter valid Pancard no.");
		
		
		$.validator.addMethod("password8to20", function(value, element) {
            return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/i.test(value);
        }, "Your password length should be 8-20. (It must contains at least one Uppercase letter, one Lowercase letter, one Number and one Special character eg.!@#$%^&*-)");
		
		
		

        $.validator.addMethod('uniquecodefn2', function(value, ele) {
            return !($('#centercode1').val() == value || $('#centercode3').val() == value);
        }, _VALID_CODE);
        $.validator.addMethod('uniquecodefn3', function(value, ele) {
            return !($('#centercode2').val() == value || $('#centercode1').val() == value);
        }, _VALID_CODE);
        $.validator.addMethod('uniquecodefn4', function(value, ele) {
            return ($('#intcentercode2').val() != value);
        }, _VALID_CODE);
        $.validator.addMethod('uniquecodefn5', function(value, ele) {
            return ($('#intcentercode1').val() != value);
        }, _VALID_CODE);

        $.validator.addMethod('uniquecodefn6', function(value, ele) {
            return !($('#langtwo').val() == value || $('#langthree').val() == value);
        }, _VALID_CODE);
        $.validator.addMethod('uniquecodefn7', function(value, ele) {
            return !(($('#langone').val() == value || $('#langthree').val() == value) && value!="");
        }, _VALID_CODE);
        $.validator.addMethod('uniquecodefn8', function(value, ele) {
            return !(($('#langone').val() == value || $('#langtwo').val() == value) && value!="");
        }, _VALID_CODE);


    }

    $('#personalDetailsForm').validate({
        rules: {
            motherName:{
                required:true,
                maxlength:45,
                lettersonly:true
            },
            parentNames:{
                required:true,
                maxlength:45,
                lettersonlywithdot:true
            },

            email: {
                required: true,
                email: true
            },
            marital_status: {
                required: true
            },
            addressLine1_correspondance: {
                required: true
            },
            
           
            intcentercode2 : {
                uniquecodefn5 : true
            },
            langone : {
                uniquecodefn6 : true
            },
            langtwo : {
                uniquecodefn7 : true
            },
            langthree : {
                uniquecodefn8 : true
            },
            photograph:{
                accept: "jpg|JPG"
            }
        },
        messages: {
            ccode:{
                required:_STDCODE_REQUIRED,
                number:_STDCODE_NUMBERONLY
            },
            phoneNumber:{
                required:_TELEPHONE_REQUIRED,
                number:_TELEPHONE_NUMBERONLY
            },
            email: {
                required: _REQUIRED_EMAIL,
                email:_INVALID_EMAIL
            },
            day: {
                required: _REQUIRED_DAY
            },
            month: {
                required: _REQUIRED_MONTH
            },
            year: {
                required: _REQUIRED_YEAR
            },
            nograduationday: {
                required: _REQUIRED_DAY
            },
            nograduationmonth: {
                required: _REQUIRED_MONTH
            },
            nograduationyear: {
                required: _REQUIRED_YEAR
            }
        }
    });
	
	
	
	
    $('#educationDetailsForm').validate({
        rules: {
            motherName:{
                required:true,
                maxlength:45,
                lettersonly:true
            },
            parentNames:{
                required:true,
                maxlength:45,
                lettersonlywithdot:true
            },

            email: {
                required: true,
                email: true
            },
            marital_status: {
                required: true
            },
            addressLine1_correspondance: {
                required: true
            },
            
           
            intcentercode2 : {
                uniquecodefn5 : true
            },
            langone : {
                uniquecodefn6 : true
            },
            langtwo : {
                uniquecodefn7 : true
            },
            langthree : {
                uniquecodefn8 : true
            },
            photograph:{
                accept: "jpg|JPG"
            }
        },
        messages: {
            ccode:{
                required:_STDCODE_REQUIRED,
                number:_STDCODE_NUMBERONLY
            },
            phoneNumber:{
                required:_TELEPHONE_REQUIRED,
                number:_TELEPHONE_NUMBERONLY
            },
            email: {
                required: _REQUIRED_EMAIL,
                email:_INVALID_EMAIL
            },
            day: {
                required: _REQUIRED_DAY
            },
            month: {
                required: _REQUIRED_MONTH
            },
            year: {
                required: _REQUIRED_YEAR
            },
            nograduationday: {
                required: _REQUIRED_DAY
            },
            nograduationmonth: {
                required: _REQUIRED_MONTH
            },
            nograduationyear: {
                required: _REQUIRED_YEAR
            }
        }
    });
	
	
	
	
	
	
	
	
	
	
	
	

    $('#email_confirm').bind("cut copy paste",function(e) {
        e.preventDefault();
    });
});

 $('select[name*="cbt_city_preference"]').live("change", function () {
        // start by setting everything to enabled
			$('select[name*="cbt_city_preference"] option').attr('disabled', false);

			// loop each select and set the selected value to disabled in all other selects
			$('select[name*="cbt_city_preference"]').each(function () {
				var $this = $(this);
				$('select[name*="cbt_city_preference"]').not($this).find('option').each(function () {
					if ($(this).attr('value') == $this.val())
						$(this).attr('disabled', true);
				});
			});

		});
		
		
 $('select[name*="ppt_city_preference"]').live("change", function () {
        // start by setting everything to enabled
			$('select[name*="ppt_city_preference"] option').attr('disabled', false);

			// loop each select and set the selected value to disabled in all other selects
			$('select[name*="ppt_city_preference"]').each(function () {
				var $this = $(this);
				$('select[name*="ppt_city_preference"]').not($this).find('option').each(function () {
					if ($(this).attr('value') == $this.val())
						$(this).attr('disabled', true);
				});
			});

		});		


 $('select[name*="city_preference"]').live("change", function () {
        // start by setting everything to enabled
			$('select[name*="city_preference"] option').attr('disabled', false);

			// loop each select and set the selected value to disabled in all other selects
			$('select[name*="city_preference"]').each(function () {
				var $this = $(this);
				$('select[name*="city_preference"]').not($this).find('option').each(function () {
					if ($(this).attr('value') == $this.val())
						$(this).attr('disabled', true);
				});
			});

		});

     $('select[name*="test_center"]').live("change", function () {
        // start by setting everything to enabled
            $('select[name*="test_center"] option').attr('disabled', false);

            // loop each select and set the selected value to disabled in all other selects
            $('select[name*="test_center"]').each(function () {
                var $this = $(this);
                $('select[name*="test_center"]').not($this).find('option').each(function () {
                    if ($(this).attr('value') == $this.val())
                        $(this).attr('disabled', true);
                });
            });

        });
		
		
	$('select[name*="subject_preference"]').live("change", function () {
        // start by setting everything to enabled
        $('select[name*="subject_preference"] option').attr('disabled', false);

        // loop each select and set the selected value to disabled in all other selects
        $('select[name*="subject_preference"]').each(function () {
            var $this = $(this);
            $('select[name*="subject_preference"]').not($this).find('option').each(function () {
                if ($(this).attr('value') == $this.val())
                    $(this).attr('disabled', true);
            });
        });

    });

    $('select[name*="subject"]').live("change", function () {
        // start by setting everything to enabled
        $('select[name*="subject"] option').attr('disabled', false);

        // loop each select and set the selected value to disabled in all other selects
        $('select[name*="subject"]').each(function () {
            var $this = $(this);
            $('select[name*="subject"]').not($this).find('option').each(function () {
                if ($(this).attr('value') == $this.val())
                    $(this).attr('disabled', true);
            });
        });

    });

	
		
		
function populateCityCorrepondance() {
    var state = document.getElementById('cstate').value;
	
    $.ajax({
        url: BASEURL+'ajaxDetails/populateStateC', 
        data: {state: state},
        method: 'POST',
        async: false,
        //dataType:"json",
        success: function (response) {

            $('#ajaxFieldC').html(response);


        },
        error: function (err) {
			 swal({text: "Something Went wrong!",});
           // alert('Something Went wrong!!');
        }
    });

    //alert(state);


}

function getProgramms(program) {  

    var program_category = $("#programm_category").val();
    

    $.ajax({
        url: BASEURL+'ajaxDetails/getProgramms',
        data: {program_category: program_category, program:program},
        method: 'POST',
        async: false,
        //dataType:"json",
        success: function (response) {
           
            $('#ajaxFieldProgramms').html(response);


        },
        error: function (err) {
           // alert('Something Went wrong!!');
		    swal({text: "Something Went wrong!",});
        }
    });

    //alert(state);


}

function getSecondaryEligibility(){
    var secondary_school_test = $("#secondary_school_test").val();  
    if(secondary_school_test == 'YES'){
        $('#secondaryEligible').show();
    }else if(secondary_school_test == 'NO'){
       // alert('You are not eligible');
		 swal({text: "Sorry! You are not eligible",});
        $('#secondary_school_test').val('');
        $('#secondaryEligible').hide();
    }  
}

function checkForOtherCourse1(){
    var acd_course1 = $("#acd_course1").val();
    if(acd_course1 == 'OTHER EXAMINATION'){
        $('#acd_course1_other_div').show();
    }else{
        $('#acd_course1_other').val('');
        $('#acd_course1_other_div').hide();
    }
}

function checkForOtherCourse2(){
    var acd_course2 = $("#acd_course2").val();
    if(acd_course2 == 'OTHER EXAMINATION'){
        $('#acd_course2_other_div').show();
    }else{
        $('#acd_course2_other').val('');
        $('#acd_course2_other_div').hide();
    }
}

function checkOdia(){
    var odia_lang = $("#odia_lang").val();  
    if(odia_lang == 'YES'){
        $('#odia_leng_div').show();
    }else if(odia_lang == 'NO'){
       // alert('You are not eligible');
		  swal({text: "Sorry!! You are not eligible",});
        $('#odia_lang').val('');
        $('#odia_lang_choice').val('');
        $('#odia_leng_div').hide();
    }
}

function getQualification(post_applied,qualification) {  

    var post_applied = $("#post_applied").val();
    $.ajax({
        url: BASEURL+'ajaxDetails/getQualificationSHSB',
        data: {post_applied: post_applied,qualification:qualification},
        method: 'POST',
        async: false,
        //dataType:"json",
        success: function (response) {
            $('#ajaxFieldQualification').html(response);
            getExperience(post_applied,'');
            getPreferentialQualification(post_applied,'');
        },
        error: function (err) {
            swal({text: "Sorry!! You are not eligible",});
        }
    });

    //alert(state);


}

function getExperience(post_applied,experience) {  

    var post_applied = $("#post_applied").val();
    $.ajax({
        url: BASEURL+'ajaxDetails/getExperienceSHSB',
        data: {post_applied: post_applied,experience:experience},
        method: 'POST',
        async: false,
        //dataType:"json",
        success: function (response) {
            $('#ajaxFieldExperience').html(response);
        },
        error: function (err) {
           //alert('Something Went wrong!!');
		   	 swal({text: "Something Went wrong",});
        }
    });

    //alert(state);


}


function getPreferentialQualification(post_applied,prefqualification) {  

    var post_applied = $("#post_applied").val();
    $.ajax({
        url: BASEURL+'ajaxDetails/getPreferentialQualificationSHSB',
        data: {post_applied: post_applied,prefqualification:prefqualification},
        method: 'POST',
        async: false,
        //dataType:"json",
        success: function (response) {
            $('#ajaxFieldPreferentialQualification').html(response);
        },
        error: function (err) {
            //alert('Something Went wrong!!');
			 swal({text: "Something Went wrong",});
        }
    });

    //alert(state);


}



function populateCityPermanent(permanent_state) {
    var state = document.getElementById('pstate').value;

    $.ajax({
        url: BASEURL+'ajaxDetails/populateStateP',
        data: {state: state},
        method: 'POST',
        async: false,
        //dataType:"json",
        success: function (response) {

            $('#ajaxFieldP').html(response);

            if ($('#checkship').prop('checked') == true) {

                $('#cdist').val($('#pdist').val());
            }


        },
        error: function (err) {
            //alert('Something Went wrong!!');
			 swal({text: "Something Went wrong",});
        }
    });

    //alert(state);


}


//do not change/comment code above this . It is same for all forms.
/*

 $(document).ready(function(){
 get_qualification_FOR_CPRI();
 femaleCategory();
 serviceExservice();
 CPRICheck();
 get_mark_disability();
 check_gateScore();
 showMessage();
 checkForExserviceman();
 check_assistantGradeIIQual1();
 });

 function alertForNot(){

 var category = $('#category').val();
 var sub_category = $('#sub_category').val();

 if(category == 'Un-Reserved' && sub_category == 'OBC')
 {

 }
 else if(category == 'Un-Reserved' && sub_category == 'Un-Reserved')
 {

 }
 else
 {
 alert("You have applied for the post in the Un-Reserved Category and hence no relaxation other than fees(if any) is applicable.");
 }



 }

 function removeOtherCategory() {
 // alert('Your candidature will be considered under UR category also !!');
 $('#sub_category_TR').hide();
 }

 function checkTheRelExp() {
 var data = $('#related_exp').val();

 if(data == 'YES')
 {

 }
 else
 {
 alert('Your are not eligible for this post!!');
 $('#related_exp').val('');
 }
 }

 function checkTheRelExpAGII(id) {
 var data = $('#'+id).val();

 if(data == 'YES')
 {

 }
 else
 {
 alert('Your are not eligible for this post!!');
 $('#'+id).val('');
 }
 }

 function chkvalidate(){

 // alert('kkk');
 var startdate = document.getElementById('joinning_date').value;
 //alert(startdate);
 var d1 = startdate.split('/');
 d1 = new Date(d1.pop(), d1.pop() - 1, d1.pop());

 var enddate = document.getElementById('exit_date').value;
 // alert(enddate);
 var d2 = enddate.split('/');
 d2 = new Date(d2.pop(), d2.pop() - 1, d2.pop());

 if (d1 > d2) {
 //  $('#exp_fromdate input[type=text]').val('');
 // $('#exp_todate input[type=text]').val('');
 alert('Ex-Servicemen, Joinning Date should be less Than Exit Date');

 return false;
 }
 }

 $("#exit_date").blur(function(){
 var startdate = document.getElementById('joinning_date').value;
 //alert(startdate);
 var d1 = startdate.split('/');
 d1 = new Date(d1.pop(), d1.pop() - 1, d1.pop());

 var enddate = document.getElementById('exit_date').value;
 // alert(enddate);
 var d2 = enddate.split('/');
 d2 = new Date(d2.pop(), d2.pop() - 1, d2.pop());

 if (d1 > d2) {
 //  $('#exp_fromdate input[type=text]').val('');
 // $('#exp_todate input[type=text]').val('');
 alert('Ex-Servicemen, Joinning Date should be less Than Exit Date');

 return false;
 }
 });

 function CPRICheck() {
 var data = $('#departmental_candidate').val();
 var post_applied = $('#post_applied').val();
 if(data == 'YES')
 {
 $('#CPRI1').show();
 $('#CPRI2').show();
 if(post_applied == 'Engineering Officer Gr.2' || post_applied == 'Assistant Librarian' || post_applied == 'Engineering Officer Gr.1' || post_applied == 'Engineering Assistant Grade 2' )
 {
 $('#CPRI3_temp').show();
 $('#CPRI3').hide();
 }
 else
 {
 $('#CPRI3').show();
 $('#CPRI3_temp').hide();
 }

 }
 else
 {
 $('#CPRI1').hide();
 $('#CPRI2').hide();
 $('#CPRI3').hide();
 $('#CPRI3_temp').hide();
 $('#empID').val('');
 $('#department').val('');
 $('#pay_scale').val('');
 }
 }

 function check_gateScore() {
 var haveGateScore = $('#haveGateScore').val();
 if(haveGateScore == 'YES')
 {
 $('#gateScoreDiv').show();
 $('#gateExamYearDiv').show();
 }
 else if(haveGateScore == 'NO')
 {
 alert('You are not eligible for this post.');
 $('#post_applied').val('');
 $('#gateScoreDiv').hide();
 $('#gateExamYearDiv').hide();
 }
 else
 {
 $('#gateScoreDiv').hide();
 $('#gateExamYearDiv').hide();
 }
 }

 function get_qualification_FOR_CPRI() {
 $('#otherPost').show();
 $('#engOffGrd1').hide();
 $('#assistantGradeIIDIV').hide();
 $('#assistantGradeIIDIV2').hide();
 $('#sub_category_TR').hide();
 $('#gateScoreMainDiv').hide();

 var post_applied = $('#post_applied').val();
 if(post_applied == 'Engineering Officer Gr.1')
 {
 $('#otherPost').hide();
 $('#engOffGrd1').show();
 $('#sub_category_TR').show();
 $('#gateScoreMainDiv').show();
 $.ajax({
 url:BASEURL+'ajaxDetails/getTheSubCategory',
 data:{data:post_applied},
 method:'POST',
 async: false ,

 success:function(response){
 $('#sub_category_TR').html(response);
 $('#sub_category').val('<?php echo $_REQUEST["sub_category"]?>');
 },
 error:function(err){
 alert('Something Went wrong!!');
 }
 });
 $('#relatedExpSpan').html('Do you have the post releated experience');
 }
 else if(post_applied == 'Engineering Assistant Grade 2')
 {
 $('#relatedExpSpan').html('First Class in 3-year Diploma (Civil Engg.) with 5 years� relevant experience');
 }
 else if(post_applied == 'Technician Gr.1')
 {
 $('#relatedExpSpan').html('2 year ITI certificate in Electrician Trade');
 }
 else if(post_applied == 'Assistant Gr. II')
 {
 $('#otherPost').hide();
 $('#assistantGradeIIDIV').show();
 $('#assistantGradeIIDIV2').show();

 }
 else if(post_applied == 'Assistant Librarian')
 {
 $('#sub_category_TR').show();
 $.ajax({
 url:BASEURL+'ajaxDetails/getTheSubCategory',
 data:{data:post_applied},
 method:'POST',
 async: false ,

 success:function(response){
 $('#sub_category_TR').html(response);
 $('#sub_category').val('<?php echo $_REQUEST["sub_category"]?>');
 },
 error:function(err){
 alert('Something Went wrong!!');
 }
 });
 $('#relatedExpSpan').html('A University Degree in addition to Diploma in Library Science or A University Degree in addition to B.Lib.Sc ');
 }
 else
 {
 $('#relatedExpSpan').html('Do you have the post releated experience');
 }
 $.ajax({
 url:BASEURL+'ajaxDetails/getTheCategory',
 data:{data:post_applied},
 method:'POST',
 async: false ,

 success:function(response){
 $('#category_TR').html(response);
 },
 error:function(err){
 alert('Something Went wrong!!');
 }
 });
 femaleCategory();
 CPRICheck();
 if(post_applied == 'MTS Gr. I Watchman Reserved for  Ex-service men')
 {
 $('#CPRI_EMP_ID').hide();
 $('#CPRI1').hide();
 $('#CPRI2').hide();
 $('#CPRI3').hide();
 $('#CPRI3_temp').hide();
 $('#centralGovt').hide();
 $('#exServiceMan').hide();
 $('#domicile').hide();
 //$('#exServiceMan').hide();
 $('#nature-disability-div').hide();
 $('#pwd-category').hide();
 }
 else
 {
 $('#CPRI_EMP_ID').show();
 $('#centralGovt').show();
 $('#domicile').show();
 $('#exServiceMan').show();
 if($('#disability').val() == 'YES')
 {
 $('#nature-disability-div').show();
 }

 $('#pwd-category').show();
 }

 }

 function femaleCategory(){
 var gender = $("#gender").val();
 var post_applied = $('#post_applied').val();
 if(gender=='FEMALE'){
 if(post_applied == 'Technician Gr.1' || post_applied == 'Assistant Gr. II')
 {
 $("#female-category").show();

 }
 else
 {
 $("#female-category").hide();
 }

 }else{
 $("#female-category").hide();
 }

 }

 function serviceExservice(){
 var serviceman = $("#exservicemenn").val();
 if(serviceman == 'YES'){
 $("#ex-service").show();
 }else{
 $("#ex-service").hide();
 $("#total_exservive").val('');
 }
 }

 function showMessage1(){
 var postapplied=document.getElementById("post_applied").value;
 var category=document.getElementById("category").value;

 if(postapplied=='Engineering Officer Gr.2'){
 if(category == 'SC' || category == 'ST'){
 alert('No seats are available for SC/ST candidates in this post,but you can apply for Un-reserved category');
 }
 }

 if(postapplied=='Engineering Assistant Gr.2'){
 if(category == 'SC' || category == 'ST' || category == 'OBC'){
 alert('No seats are available for SC/ST/OBC candidates in this post,but you can apply for Un-reserved category');
 }
 }

 if(postapplied=='Engineering Assistant Gr.1'){
 if(category == 'SC' || category == 'ST'){
 alert('No seats are available for SC/ST candidates in this post,but you can apply for Un-reserved category');
 }
 }

 if(postapplied=='Technician Gr.2'){
 if(category == 'ST'){
 alert('No seats are available for ST candidates in this post,but you can apply for Un-reserved category');
 }
 }

 if(postapplied=='Assistant Librarian'){
 if(category == 'SC' || category == 'ST' ||category == 'OBC'){
 alert('No seats are available for SC/ST/OBC candidates in this post,but you can apply for Un-reserved category');
 }
 }

 if(postapplied=='Assistant Gr.III'){
 if(category == 'ST'){
 alert('No seats are available for ST candidates in this post,but you can apply for Un-reserved category');
 }
 }

 }

 function showMessage() {

 var data = $('#category').val();
 var post_applied = $('#post_applied').val();

 if(data == 'Un-Reserved')
 {
 $('#sub_category_TR').show();
 $.ajax({
 url:BASEURL+'ajaxDetails/getTheSubCategory',
 data:{data:post_applied},
 method:'POST',
 async: false ,

 success:function(response){
 $('#sub_category_TR').html(response);
 $('#sub_category').val('<?php echo $_REQUEST["sub_category"]?>');
 },
 error:function(err){
 alert('Something Went wrong!!');
 }
 });

 }
 else if(data == 'SC' || data == 'ST' || data == 'OBC')
 {
 alert('Your candidature will be considered under UR category also !!');
 $('#sub_category_TR').hide();
 }
 }

 function checkForExserviceman() {
 var exserviceman = $('#exserviceman').val();

 if(exserviceman == 'YES')
 {
 $('#exservicemanDIV').show();
 }
 else
 {
 $('#exservicemanDIV').hide();
 }
 }

 function check_assistantGradeIIQual1() {
 var assistantGradeIIQual1 = $('#assistantGradeIIQual1').val();

 if(assistantGradeIIQual1 == 'YES')
 {
 $('#assistantGradeIIQual1DegreeTypeDiv').show();
 }
 else if(assistantGradeIIQual1 == 'NO')
 {
 alert('You are not eligible for this post.');
 $('#post_applied').val('');
 $('#assistantGradeIIQual1DegreeTypeDiv').hide();
 }
 else
 {
 $('#post_applied').val('');
 $('#assistantGradeIIQual1DegreeTypeDiv').hide();
 }

 }

 function get_mark_disability(){
 //alert('Hiii');
 var disability = $("#disability").val();
 if(disability =='YES'){
 $("#nature-disability-div").show();
 }else{
 $("#nature-disability-div").hide();
 }
 }
 //script from signup- CPRI

 //code for personal details starts
 function show_other() {
 jQuery('#mbbs_college_name').change(function () {

 var collegeName = jQuery(this).val();

 if (collegeName == 'others') {
 jQuery('#other_college_div_condition').show();

 } else {
 jQuery('#other_college_div_condition').hide();
 jQuery('#other_college_mbbs').val('');
 }
 });

 }

 function show_other_university() {
 jQuery('#university').change(function () {

 var universityName = jQuery(this).val();

 if (universityName == 'Others') {
 jQuery('#university_other').show();

 } else {
 jQuery('#university_other').hide();
 jQuery('#other_uni_mbbs').val('');
 }
 });

 }

 function disability() {
 jQuery('#disability').change(function () {

 var disabilityVal = jQuery(this).val();
 if (disabilityVal == 'YES') {
 jQuery('#percentage_disability').show();

 } else {
 jQuery('#percentage_disability').hide();
 jQuery('#percentage_disable').val('');

 }
 //alert(disabilityVal);
 });


 }

 function calculatePer() {
 var maxVal = parseInt(jQuery('#max_marks_mbbs').val());
 if (maxVal) {
 var mark = maxVal;
 } else {
 var mark = 0;
 }
 var obtainVal = parseInt(jQuery('#mark_obtained_mbbs').val());
 if (obtainVal) {
 var ob_mark = obtainVal;
 } else {
 var ob_mark = 0;
 }

 if (ob_mark > mark) {
 alert('Maximum marks should be greater than or equals to Obtained marks');
 $("#mark_obtained_mbbs").val('');
 $("#percentage").val('');
 return false;
 }
 var percent = (ob_mark / mark) * 100;
 var final_value = Math.round(percent * 100) / 100;
 if (!isFinite(final_value)) final_value = 0;
 jQuery('#percentage').val(final_value);


 }

 jQuery(document).ready(function () {

 show_other();
 show_other_university();
 disability();
 var correspondance_state = $('#correspondance_state').val();
 if(correspondance_state) {
 populateCityCorrepondance(correspondance_state);
 }

 if ($('#checkship').prop('checked') == true) {
 var correspondance_state = $('#correspondance_state').val();
 populateCityPermanent(correspondance_state);
 }
 else {
 var permanent_state = $('#permanent_state').val();
 if(permanent_state){
 populateCityPermanent(permanent_state);
 }
 }





 jQuery('#max_marks_mbbs,#mark_obtained_mbbs').blur(function () {

 calculatePer();
 });

 $('select[name*="centercode"]').change(function () {
 // start by setting everything to enabled
 $('select[name*="centercode"] option').attr('disabled', false);

 // loop each select and set the selected value to disabled in all other selects
 $('select[name*="centercode"]').each(function () {
 var $this = $(this);
 $('select[name*="centercode"]').not($this).find('option').each(function () {
 if ($(this).attr('value') == $this.val())
 $(this).attr('disabled', true);
 });
 });

 });

 if ($('#checkship').prop('checked') == true) {
 fillship();
 }
 });

 $('#class_x_total_mark,#class_x_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#class_x_total_mark").val());
 var obt_mark1 = parseInt($("#class_x_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#class_x_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#class_x_percentage').val(perc_value1);

 }
 });

 $('#class_xii_total_mark,#class_xii_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#class_xii_total_mark").val());
 var obt_mark1 = parseInt($("#class_xii_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#class_xii_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#class_xii_percentage').val(perc_value1);

 }
 });

 $('#diploma_total_mark,#diploma_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#diploma_total_mark").val());
 var obt_mark1 = parseInt($("#diploma_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#diploma_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#diploma_percentage').val(perc_value1);

 }
 });

 $('#graduate_total_mark,#graduate_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#graduate_total_mark").val());
 var obt_mark1 = parseInt($("#graduate_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#graduate_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#graduate_percentage').val(perc_value1);

 }
 });

 $('#add1_total_mark,#add1_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#add1_total_mark").val());
 var obt_mark1 = parseInt($("#add1_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#add1_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#add1_percentage').val(perc_value1);

 }
 });

 $('#add2_total_mark,#add2_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#add2_total_mark").val());
 var obt_mark1 = parseInt($("#add2_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#add2_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#add2_percentage').val(perc_value1);

 }
 });

 $('#add3_total_mark,#add3_secured_mark').blur(function () {

 var max_mark1 = parseInt($("#add3_total_mark").val());
 var obt_mark1 = parseInt($("#add3_secured_mark").val());

 if (obt_mark1 > max_mark1) {
 alert('Maximum mark should be greater than minimum mark');
 $("#add3_secured_mark").val('');
 return false;
 }

 if (max_mark1 && obt_mark1) {
 var percent = (obt_mark1 / max_mark1) * 100;
 var perc_value1 = Math.round(percent * 100) / 100;
 if (!isFinite(perc_value1)) perc_value1 = 0;
 $('#add3_percentage').val(perc_value1);

 }
 });

 $('select[name*="divison_prefrence"]').live("change", function () {
 // start by setting everything to enabled
 $('select[name*="divison_prefrence"] option').attr('disabled', false);

 // loop each select and set the selected value to disabled in all other selects
 $('select[name*="divison_prefrence"]').each(function () {
 var $this = $(this);
 $('select[name*="divison_prefrence"]').not($this).find('option').each(function () {
 if ($(this).attr('value') == $this.val())
 $(this).attr('disabled', true);
 });
 });

 });

 $('select[name*="exam_city_prefrence"]').live("change", function () {
 // start by setting everything to enabled
 $('select[name*="exam_city_prefrence"] option').attr('disabled', false);

 // loop each select and set the selected value to disabled in all other selects
 $('select[name*="exam_city_prefrence"]').each(function () {
 var $this = $(this);
 $('select[name*="exam_city_prefrence"]').not($this).find('option').each(function () {
 if ($(this).attr('value') == $this.val())
 $(this).attr('disabled', true);
 });
 });

 });

 function fillship() {

 dom = document.personalDetailsForm;
 if (dom.checkship.checked == true) {

 dom.permanent_house_locality.value = dom.correspondance_house_locality.value;
 dom.permanent_village_street_town.value = dom.correspondance_village_street_town.value;

 dom.permanent_state.value = dom.correspondance_state.value;
 populateCityPermanent(dom.correspondance_state.value);
 dom.permanent_city.value = dom.correspondance_city.value;
 dom.permanent_pincode.value = dom.correspondance_pincode.value;

 //document.getElementById("fhn2").readOnly = true;
 document.getElementById("permanent_house_locality").readOnly = true;
 document.getElementById("permanent_village_street_town").readOnly = true;
 document.getElementById("permanent_state").disabled = true;
 document.getElementById("permanent_city").disabled = true;
 document.getElementById("permanent_pincode").readOnly = true;
 //document.getElementById("pstatediv").innerHTML="<input type='hidden' name='permanent_state' value='"+dom.correspondance_state.value+"'>";
 // document.getElementById("pcitydiv").innerHTML="<input type='hidden' name='permanent_city' value='"+dom.correspondance_city.value+"'>";


 }
 else {

 dom.permanent_house_locality.value = "";
 dom.permanent_village_street_town.value = "";
 dom.permanent_state.value = "";

 populateCityPermanent('');
 dom.permanent_city.value = "";
 dom.permanent_pincode.value = "";

 document.getElementById("permanent_house_locality").readOnly = false;
 document.getElementById("permanent_village_street_town").readOnly = false;
 document.getElementById("permanent_state").disabled = false;
 document.getElementById("permanent_city").disabled = false;
 document.getElementById("permanent_pincode").readOnly = false;


 }
 }

 $('#marksObatined1,#maxMarks1,#marksObatined2,#maxMarks2,#marksObatined3,#maxMarks3,#marksObatined4,#maxMarks4,#marksObatined5,#maxMarks5,#marksObatined6,#maxMarks6,#marksObatined7,#maxMarks7').blur(function () {


 var max_mark1 = parseInt($("#maxMarks1").val());
 if (max_mark1) {
 var mark1 = max_mark1;
 } else {
 var mark1 = 0;
 }

 var max_mark2 = parseInt($("#maxMarks2").val());
 if (max_mark2) {
 var mark2 = max_mark2;
 } else {
 var mark2 = 0;
 }
 var max_mark3 = parseInt($("#maxMarks3").val());
 if (max_mark3) {
 var mark3 = max_mark3;
 } else {
 var mark3 = 0;
 }

 var max_mark4 = parseInt($("#maxMarks4").val());
 if (max_mark4) {
 var mark4 = max_mark4;
 } else {
 var mark4 = 0;
 }

 var max_mark5 = parseInt($("#maxMarks5").val());
 if (max_mark5) {
 var mark5 = max_mark5;
 } else {
 var mark5 = 0;
 }

 var max_mark6 = parseInt($("#maxMarks6").val());
 if (max_mark6) {
 var mark6 = max_mark6;
 } else {
 var mark6 = 0;
 }

 var max_mark7 = parseInt($("#maxMarks7").val());
 if (max_mark7) {
 var mark7 = max_mark7;
 } else {
 var mark7 = 0;
 }

 var max_mark8 = parseInt($("#maxMarks8").val());
 if (max_mark8) {
 var mark8 = max_mark8;
 } else {
 var mark8 = 0;
 }


 var obt_mark1 = parseInt($("#marksObatined1").val());
 if (obt_mark1) {
 var ob_mark1 = obt_mark1;
 } else {
 var ob_mark1 = 0;
 }

 var obt_mark2 = parseInt($("#marksObatined2").val());
 if (obt_mark2) {
 var ob_mark2 = obt_mark2;
 } else {
 var ob_mark2 = 0;
 }

 var obt_mark3 = parseInt($("#marksObatined3").val());
 if (obt_mark3) {
 var ob_mark3 = obt_mark3;
 } else {
 var ob_mark3 = 0;
 }

 var obt_mark4 = parseInt($("#marksObatined4").val());
 if (obt_mark4) {
 var ob_mark4 = obt_mark4;
 } else {
 var ob_mark4 = 0;
 }

 var obt_mark5 = parseInt($("#marksObatined5").val());
 if (obt_mark5) {
 var ob_mark5 = obt_mark5;
 } else {
 var ob_mark5 = 0;
 }

 var obt_mark6 = parseInt($("#marksObatined6").val());
 if (obt_mark6) {
 var ob_mark6 = obt_mark6;
 } else {
 var ob_mark6 = 0;
 }

 var obt_mark7 = parseInt($("#marksObatined7").val());
 if (obt_mark7) {
 var ob_mark7 = obt_mark7;
 } else {
 var ob_mark7 = 0;
 }

 var obt_mark8 = parseInt($("#marksObatined8").val());
 if (obt_mark8) {
 var ob_mark8 = obt_mark8;
 } else {
 var ob_mark8 = 0;
 }


 if (max_mark1 > 0 && ob_mark1 > 0) {
 if (ob_mark1 > max_mark1) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks1").val('');
 $("#marksObatined1").focus();
 return false;
 }
 else {
 var percentage1Marks = ((ob_mark1 / max_mark1) * 100).toFixed(2);
 if ($('#isCGPA1').val() != 'YES') {
 $('#percentage1').val(percentage1Marks);
 }

 }

 }

 if (max_mark2 > 0 && ob_mark2 > 0) {
 if (ob_mark2 > max_mark2) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks2").val('');
 $("#marksObatined2").focus();
 return false;
 }
 else {
 var percentage2Marks = ((ob_mark2 / max_mark2) * 100).toFixed(2);
 ;
 if ($('#isCGPA2').val() != 'YES') {
 $('#percentage2').val(percentage2Marks);
 }

 }

 }

 if (max_mark3 > 0 && ob_mark3 > 0) {
 if (ob_mark3 > max_mark3) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks3").val('');
 $("#marksObatined3").focus();
 return false;
 }
 else {
 var percentage3Marks = ((ob_mark3 / max_mark3) * 100).toFixed(2);
 ;
 if ($('#isCGPA3').val() != 'YES') {
 $('#percentage3').val(percentage3Marks);
 }

 }

 }

 if (max_mark4 > 0 && ob_mark4 > 0) {
 if (ob_mark4 > max_mark4) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks4").val('');
 $("#marksObatined4").focus();
 return false;
 }
 else {
 var percentage4Marks = ((ob_mark4 / max_mark4) * 100).toFixed(2);
 ;
 if ($('#isCGPA4').val() != 'YES') {
 $('#percentage4').val(percentage4Marks);
 }

 }

 }

 if (max_mark5 > 0 && ob_mark5 > 0) {
 if (ob_mark5 > max_mark5) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks5").val('');
 $("#marksObatined5").focus();
 return false;
 } else {
 var percentage5Marks = ((ob_mark5 / max_mark5) * 100).toFixed(2);
 ;
 if ($('#isCGPA5').val() != 'YES') {
 $('#percentage5').val(percentage5Marks);
 }

 }

 }


 if (max_mark6 > 0 && ob_mark6 > 0) {
 if (ob_mark6 > max_mark6) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks6").val('');
 $("#marksObatined6").focus();
 return false;
 }
 else {
 var percentage6Marks = ((ob_mark6 / max_mark6) * 100).toFixed(2);
 ;
 if ($('#isCGPA6').val() != 'YES') {
 $('#percentage6').val(percentage6Marks);
 }

 }

 }

 if (max_mark7 > 0 && ob_mark7 > 0) {
 if (ob_mark7 > max_mark7) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks7").val('');
 $("#marksObatined7").focus();
 return false;
 }
 else {
 var percentage7Marks = ((ob_mark7 / max_mark7) * 100).toFixed(2);
 ;
 if ($('#isCGPA7').val() != 'YES') {
 $('#percentage7').val(percentage7Marks);
 }

 }

 }

 if (max_mark8 > 0 && ob_mark8 > 0) {
 if (ob_mark8 > max_mark8) {
 alert('Obtained mark should be less than maximum mark');
 $("#maxMarks8").val('');
 $("#marksObatined8").focus();
 return false;
 }
 else {
 var percentage8Marks = ((ob_mark8 / max_mark8) * 100).toFixed(2);
 ;
 if ($('#isCGPA8').val() != 'YES') {
 $('#percentage8').val(percentage8Marks);
 }

 }

 }


 });

 function removeReadonly(parent, id) {
 if ($('#' + parent).val() == 'YES') {
 $("#" + id).attr("readonly", false);
 }
 else {
 $("#" + id).attr("readonly", true);
 }

 }

 $(document).ready(function () {

 $('input[type=text]').addClass('form-control');
 $('input[type=select]').addClass('form-control');

 var exp_todate = $('#to1').val();
 var exp_fromdate = $('#from1').val();

 $.post(BASEURL+"ajaxDetails/getexp", {
 exp_todate: exp_todate,
 exp_fromdate: exp_fromdate
 }, function (data) {
 //alert(data)
 $("#cexp").html(data)
 });

 var exp_todate2 = $('#to2').val();
 var exp_fromdate2 = $('#from2').val();

 $.post(BASEURL+"ajaxDetails/getexp2", {
 exp_todate2: exp_todate2,
 exp_fromdate2: exp_fromdate2
 }, function (data) {
 //alert(data)
 $("#cexp2").html(data)
 });


 var exp_todate3 = $('#to3').val();
 var exp_fromdate3 = $('#from3').val();

 $.post(BASEURL+"ajaxDetails/getexp3", {
 exp_todate3: exp_todate3,
 exp_fromdate3: exp_fromdate3
 }, function (data) {
 //alert(data)
 $("#cexp3").html(data)
 });


 var exp_todate4 = $('#to4').val();
 var exp_fromdate4 = $('#from4').val();

 $.post(BASEURL+"ajaxDetails/getexp4", {
 exp_todate4: exp_todate4,
 exp_fromdate4: exp_fromdate4
 }, function (data) {
 //alert(data)
 $("#cexp4").html(data)
 });


 var exp_todate5 = $('#to5').val();
 var exp_fromdate5 = $('#from5').val();

 $.post(BASEURL+"ajaxDetails/getexp5", {
 exp_todate5: exp_todate5,
 exp_fromdate5: exp_fromdate5
 }, function (data) {
 //alert(data)
 $("#cexp5").html(data)
 });
 });



 //code for personal details
 */

//JSSC DSCC scripts starts from here

var str1Basic = window.location.href;
var str2Basic = "Admin/";
var adminBasic = '';
if(str1Basic.indexOf(str2Basic) != -1){
    adminBasic = 'YES';
}
// console.log(window.location.href);
if(window.location.href == BASICREGISTRATIONURL1 || window.location.href == BASICREGISTRATIONURL2 || window.location.href == BASICREGISTRATIONURL3 || adminBasic == 'YES')
{
    $(document).ready(function(){
        checkForYesNo();
        // checkForlocalResident();

        checkForPHCandidate();

        checkForreservationCategory();

        checkForExserviceman();
    });

    function checkForExserviceman()
    {
        var data = $('#exserviceman').val();

        if(data == 'YES')
        {
            $('#exservicemanDiv1').show();
            $('#exservicemanDiv2').show();
            $('#exservicemanDiv3').show();
            $('#exservicemanDiv4').show();
            $('#exservicemanDiv5').show();
        }
        if(data == 'NO')
        {
            $('#exservicemanServiceStartDate').val('');
            $('#exservicemanServiceEndDate').val('');
			$('#exserviceman_belongsto').val('');
            $('#exservicemanDiv1').hide();
            $('#exservicemanDiv2').hide();
            $('#exservicemanDiv3').hide();
            $('#exservicemanDiv4').hide();
            $('#exservicemanDiv5').hide();
        }
    }

    function checkForYesNo() {
        var data = $('#isIndianCitizen').val();

        if(data == 'YES')
        {

        }
        if(data == 'NO')
        {
            $('#isIndianCitizen').val('');
           // alert('You are not eligible.');
		    swal({text: "Sorry! You are not eligible.",});
        }
    }

    function checkForlocalResident() {
        var data = $('#localResident').val();
        $('#districtForLocalResident').val('');
        $('#divForLocalResidenceYes1').hide();
        if(data == 'YES')
        {

            $('#divForLocalResidenceYes').show();
            // $('#divForLocalResidenceYes1').show();
            $('#divForLocalResidenceDistrictYES').show();
            $('#divForLocalResidenceDistrictNo').hide();
        }
        else if(data == 'NO')
        {
           // alert('You are only eligible for UR Category.');
			 swal({text: "You are only eligible for UR Category.",});
			  
			
			
            $('#divForLocalResidenceYes').hide();
            // $('#divForLocalResidenceYes1').hide();
            $('#divForLocalResidenceDistrictYES').hide();
            $('#divForLocalResidenceDistrictNo').show();
        }
        else
        {
            $('#divForLocalResidenceYes').hide();
            //$('#divForLocalResidenceYes1').hide();
            $('#divForLocalResidenceDistrictYES').hide();
            $('#divForLocalResidenceDistrictNo').hide();
        }

        $.ajax({
            url: BASEURL+'index_controller_DOON/getTheReservationCategory',
            data: {localResidentValue: data},
            method: 'POST',
            async: false,
            //dataType:"json",
            success: function (response) {

                $('#ajaxFieldC').html(response);


            },
            error: function (err) {
               // alert('Something Went wrong!!');
				 swal({text: "Something Went wrong",});
            }
        });
        checkForreservationCategory();
        checkForPTGCaste();
    }

    function checkForreservationCategory(){
        var reservationCategory = $('#reservationCategory').val();
        // $('#belongToPTG').val('');
        // $('#PTGCaste').val('');

        //$("#dateOfIssueForCertificate").val('');

        var minDateSTSC = new Date(1972, 7, 1);
        var minDateEBC = new Date(2016, 3, 1);
        var minDateUR = new Date(2016, 5, 2);

        if(reservationCategory == 'ST')
        {
            $('#PTGDiv').show();

        }
        else
        {
            $('#PTGDiv').hide();
        }

        if(reservationCategory == 'UR')
        {
            $('#divForLocalResidenceYes1').hide();
        }
        else
        {
            $('#divForLocalResidenceYes1').show();
        }

        // $('#dateOfIssueForCertificate').datepicker('destroy');
        // alert(reservationCategory);
        if(reservationCategory == 'ST' || reservationCategory == 'SC')
        {
            $("#dateOfIssueForCertificate").datepicker("option", "minDate", new Date(1972, 7, 1));
        }
        else if(reservationCategory == 'EBC-I' || reservationCategory == 'BC-II')
        {
            $("#dateOfIssueForCertificate").datepicker("option", "minDate", new Date(2016, 3, 1));
        }
        else
        {
            $("#dateOfIssueForCertificate").datepicker("option", "minDate", new Date(2016, 5, 2));
        }

    }

    function checkForPTGCaste() {
        var valueForPTG = $('#belongToPTG').val();
        if(valueForPTG == 'YES')
        {
            $('#casteDivForPTG').show();
        }
        else
        {
            $('#casteDivForPTG').hide();
        }
    }

    $('#phCandidate').change(function () {

        var phCandidate = $('#phCandidate').val();

        $('#phCandidateKindOfDisability').val('');
        $('#PHCertificateNumber').val('');
        $('#PHIssuingAuthority').val('');
        $('#PHdateOfIssueForCertificate').val('');

        if(phCandidate == 'YES')
        {
            $('#phDiv1').show();
            $('#phDiv2').show();
        }
        else
        {
            $('#phDiv1').hide();
            $('#phDiv2').hide();
        }

    });

    function checkForPHCandidate() {
        var phCandidate = $('#phCandidate').val();

        //$('#phCandidateKindOfDisability').val('');
        //$('#PHCertificateNumber').val('');
        //$('#PHIssuingAuthority').val('');
        //$('#PHdateOfIssueForCertificate').val('');

        if(phCandidate == 'YES')
        {
            $('#phDiv1').show();
            $('#phDiv2').show();
        }
        else
        {
            $('#phDiv1').hide();
            $('#phDiv2').hide();
        }
    }


    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
}

var str1PD = window.location.href;
var str2PD = "Admin/EditPersonalData";
var adminPD = '';
if(str1PD.indexOf(str2PD) != -1){
    adminPD = 'YES';
}


if(window.location.href == PD1 || window.location.href == PD2 || window.location.href == PD3 || window.location.href == PD4 || window.location.href == PD5 || window.location.href == PD6 || window.location.href == PD7 || window.location.href == PD8 || adminPD == 'YES')
{

	
    $(document).ready(function () {

	
		
      //  getTheDataForDiplomaDegree();

      //  checkForPTGCaste();

        // checkForDiplomaQualification();
        //   checkForDegreeQualification();


        if ($('#checkship').prop('checked') == true) {

            populateCityCorrepondance();
            // fillship();
        }
		
		
		
		


        $('select[name*="post_prefrence"]').each(function () {
            var $this = $(this);
            $('select[name*="post_prefrence"]').not($this).find('option').each(function () {
                if ($(this).attr('value') == $this.val())
                    $(this).attr('disabled', true);
            });
        });

        $('select[name*="post_prefrence"]').live("change", function () {
            // start by setting everything to enabled
            $('select[name*="post_prefrence"] option').attr('disabled', false);

            // loop each select and set the selected value to disabled in all other selects
            $('select[name*="post_prefrence"]').each(function () {
                var $this = $(this);
                $('select[name*="post_prefrence"]').not($this).find('option').each(function () {
                    if ($(this).attr('value') == $this.val())
                        $(this).attr('disabled', true);
                });
            });

        });
    });


    $('select[name*="post_prefrence"]').live("change", function () {
        // start by setting everything to enabled
        $('select[name*="post_prefrence"] option').attr('disabled', false);

        // loop each select and set the selected value to disabled in all other selects
        $('select[name*="post_prefrence"]').each(function () {
            var $this = $(this);
            $('select[name*="post_prefrence"]').not($this).find('option').each(function () {
                if ($(this).attr('value') == $this.val())
                    $(this).attr('disabled', true);
            });
        });

    });
	
	 
	
	

	

    function fillship() {

        dom = document.personalDetailsForm;
        if (dom.checkship.checked == true) {

            dom.addressLine1_permananet.value = dom.addressLine1_correspondance.value;
            dom.addressLine2_permananet.value = dom.addressLine2_correspondance.value;
            dom.addressLine3_permananet.value = dom.addressLine3_correspondance.value;

            dom.permanent_state.value = dom.correspondance_state.value;
            populateCityPermanent(dom.correspondance_state.value);
            dom.permanent_city.value = dom.correspondance_city.value;
            dom.permanent_pincode.value = dom.correspondance_pincode.value;

            //document.getElementById("fhn2").readOnly = true;
            document.getElementById("addressLine1_permananet").readOnly = true;
            document.getElementById("addressLine2_permananet").readOnly = true;
            document.getElementById("addressLine3_permananet").readOnly = true;

            document.getElementById("permanent_state").disabled = true;
            document.getElementById("permanent_city").disabled = true;
            document.getElementById("permanent_pincode").readOnly = true;
            //document.getElementById("pstatediv").innerHTML="<input type='hidden' name='permanent_state' value='"+dom.correspondance_state.value+"'>";
            // document.getElementById("pcitydiv").innerHTML="<input type='hidden' name='permanent_city' value='"+dom.correspondance_city.value+"'>";


        }
        else {

            dom.addressLine1_permananet.value = "";
            dom.addressLine2_permananet.value = "";
            dom.addressLine3_permananet.value = "";

            dom.permanent_state.value = "";

            populateCityPermanent('');
            dom.permanent_city.value = "";
            dom.permanent_pincode.value = "";

            document.getElementById("addressLine1_permananet").readOnly = false;
            document.getElementById("addressLine2_permananet").readOnly = false;
            document.getElementById("addressLine3_permananet").readOnly = false;

            document.getElementById("permanent_state").disabled = false;
            document.getElementById("permanent_city").disabled = false;
            document.getElementById("permanent_pincode").readOnly = false;


        }
    }


    function checkForPTGCaste() {
        var valueForPTG = $('#belongToPTG').val();
        if (valueForPTG == 'YES') {
            $('#casteDivForPTG').show();
        }
        else {
            $('#casteDivForPTG').hide();

        }
    }

    function getTheDataForDiplomaDegree() {


        $('select[name*="post_prefrence"] option').attr('disabled', false);
        var degree = $('#degreeQualification').val();
        var diploma = $('#diplomaQualification').val();

        var degreeQualification = $('#degreeBranch').val();
        var diplomaQualification = $('#diploma_Branch').val();

        $('#subjectForMainExam').val('');



        if(degreeQualification != '' && diplomaQualification != '')
        {

            if(degreeQualification == diplomaQualification)
            {
                var diploma_degreeBranch = $('#degreeBranch').val();

                if(diploma_degreeBranch == 'CIVIL ENGINEERING')
                {
                    $('#post_applied_for').val('Junior Engineer (Civil)');
                    $('#postPrefDivForCivil').show();
                    $('#postPrefDivForME').hide();
                    $('#postPrefDivForEE').hide();
                    $('#subjectForMainExam').val('CIVIL');
                }
                else if(diploma_degreeBranch == 'MECHNICAL ENGINEERING')
                {
                    $('#post_applied_for').val('Junior Engineer (Mechnical)');
                    $('#postPrefDivForCivil').hide();
                    $('#postPrefDivForME').show();
                    $('#postPrefDivForEE').hide();
                    $('#subjectForMainExam').val('MECHNICAL');
                }
                else if(diploma_degreeBranch == 'ELECTRICAL ENGINEERING')
                {
                    $('#post_applied_for').val('Junior Electrical Engineer');
                    $('#postPrefDivForCivil').hide();
                    $('#postPrefDivForME').hide();
                    $('#postPrefDivForEE').show();
                    $('#subjectForMainExam').val('ELECTRICAL');
                }
                else
                {
                    $('#post_applied_for').val('');
                    $('#postPrefDivForCivil').hide();
                    $('#postPrefDivForME').hide();
                    $('#postPrefDivForEE').hide();
                }
            }
            else
            {
               // alert('Branch for Diploma and Degree has to be same.');
				swal({text: "Branch for Diploma and Degree has to be same.",});
				
            }
        }
        else if(degreeQualification != '')
        {
            var diploma_degreeBranch = $('#degreeBranch').val();

            if(diploma_degreeBranch == 'CIVIL ENGINEERING')
            {
                $('#post_applied_for').val('Junior Engineer (Civil)');
                $('#postPrefDivForCivil').show();
                $('#postPrefDivForME').hide();
                $('#postPrefDivForEE').hide();
                $('#subjectForMainExam').val('CIVIL');
            }
            else if(diploma_degreeBranch == 'MECHNICAL ENGINEERING')
            {
                $('#post_applied_for').val('Junior Engineer (Mechnical)');
                $('#postPrefDivForCivil').hide();
                $('#postPrefDivForME').show();
                $('#postPrefDivForEE').hide();
                $('#subjectForMainExam').val('MECHNICAL');
            }
            else if(diploma_degreeBranch == 'ELECTRICAL ENGINEERING')
            {
                $('#post_applied_for').val('Junior Electrical Engineer');
                $('#postPrefDivForCivil').hide();
                $('#postPrefDivForME').hide();
                $('#postPrefDivForEE').show();
                $('#subjectForMainExam').val('ELECTRICAL');
            }
            else
            {
                $('#post_applied_for').val('');
                $('#postPrefDivForCivil').hide();
                $('#postPrefDivForME').hide();
                $('#postPrefDivForEE').hide();
            }
        }
        else if(diplomaQualification != '')
        {
            var diploma_degreeBranch = $('#diploma_Branch').val();


            if(diploma_degreeBranch == 'CIVIL ENGINEERING')
            {
                $('#post_applied_for').val('Junior Engineer (Civil)');
                $('#postPrefDivForCivil').show();
                $('#postPrefDivForME').hide();
                $('#postPrefDivForEE').hide();
                $('#subjectForMainExam').val('CIVIL');
            }
            else if(diploma_degreeBranch == 'MECHNICAL ENGINEERING')
            {
                $('#post_applied_for').val('Junior Engineer (Mechnical)');
                $('#postPrefDivForCivil').hide();
                $('#postPrefDivForME').show();
                $('#postPrefDivForEE').hide();
                $('#subjectForMainExam').val('MECHNICAL');
            }
            else if(diploma_degreeBranch == 'ELECTRICAL ENGINEERING')
            {
                $('#post_applied_for').val('Junior Electrical Engineer');
                $('#postPrefDivForCivil').hide();
                $('#postPrefDivForME').hide();
                $('#postPrefDivForEE').show();
                $('#subjectForMainExam').val('ELECTRICAL');
            }
            else
            {
                $('#post_applied_for').val('');
                $('#postPrefDivForCivil').hide();
                $('#postPrefDivForME').hide();
                $('#postPrefDivForEE').hide();
            }
        }



        getTheVacancyChart();
    }

    function getTheVacancyChart()
    {
        var degreeBranch = $('#degreeBranch').val();
        var diplomaBranch = $('#diploma_Branch').val();

        var reservationCategory = $('#reservationCategory').val();



        var branch = '';
        if(degreeBranch != '')
        {
            branch = degreeBranch;
        }
        else if(diplomaBranch != '')
        {
            branch = diplomaBranch;
        }
        else
        {
            branch = '';
        }

        //$('#VacancyDIV1').hide();
        //$('#VacancyDIV2').hide();


        if(branch == 'CIVIL ENGINEERING' &&  reservationCategory == 'SC')
        {
            $('#VacancyDIV1').show();
            $('#VacancyDIV2').hide();
        }
        else if(branch == 'CIVIL ENGINEERING' &&  reservationCategory == 'ST')
        {
            $('#VacancyDIV1').show();
            $('#VacancyDIV2').hide();
        }
        else if(branch == 'CIVIL ENGINEERING')
        {
            $('#VacancyDIV2').show();
        }


        if(branch == 'MECHNICAL ENGINEERING' &&  reservationCategory == 'UR')
        {
            $('#VacancyDIV2').show();
            $('#VacancyDIV1').hide();
        }
        else if(branch == 'MECHNICAL ENGINEERING' &&  reservationCategory == 'ST')
        {
            $('#VacancyDIV2').show();
            $('#VacancyDIV1').hide();
        }
        else if(branch == 'MECHNICAL ENGINEERING')
        {
            $('#VacancyDIV2').hide();
            $('#VacancyDIV1').show();
        }

        if(branch == 'ELECTRICAL ENGINEERING' && reservationCategory == 'BC-II')
        {
            $('#VacancyDIV1').show();
            $('#VacancyDIV2').hide();
        }
        else if(branch == 'ELECTRICAL ENGINEERING' && reservationCategory == 'ST')
        {
            $('#VacancyDIV1').show();
            $('#VacancyDIV2').hide();
        }
        else if(branch == 'ELECTRICAL ENGINEERING')
        {
            $('#VacancyDIV1').hide();
            $('#VacancyDIV2').show();
        }



    }

    function checkForDiplomaQualification() {
        var data = $('#diplomaQualification').val();
        if(data == 'DIPLOMA')
        {
            $('#subjectForMainExam').val('Diploma');
        }
        else if(data == 'DEGREE')
        {
            $('#subjectForMainExam').val('Degree');
        }
        else
        {
            $('#subjectForMainExam').val('');
        }
    }

    function checkForDegreeQualification() {
        var data = $('#degreeQualification').val();
        if(data == 'DIPLOMA')
        {
            $('#subjectForMainExam').val('Diploma');
        }
        else if(data == 'DEGREE')
        {
            $('#subjectForMainExam').val('Degree');
        }
        else
        {
            $('#subjectForMainExam').val('');
        }
    }

}


jQuery(document).ready(function () {


 var correspondance_state = $('#correspondance_state').val();
 if(correspondance_state) {
 populateCityCorrepondance(correspondance_state);
 }

 if ($('#checkship').prop('checked') == true) {
 var correspondance_state = $('#correspondance_state').val();
 populateCityPermanent(correspondance_state);
 }
 else {
 var permanent_state = $('#permanent_state').val();
 if(permanent_state){
 populateCityPermanent(permanent_state);
 }
 }

 if ($('#checkship').prop('checked') == true) {
 // fillship();
 }
 });

function CheckLandLoser(){
	
	if($('#land_loser').val() == 'YES'){
		$('#land_loser_yes').show();
	}else{
		$('#land_loser_yes').hide();
	}
	
}

function CheckFreedomFighter(){
	// alert(0);
	if($('#freedom_fighter').val() == 'YES'){
		$('#freedom_fighter_yes').show();
         $('#div_freedom_fighter_bihar').show();
	}else{
        $("#freedom_fighter_bihar").val('');
		$('#freedom_fighter_yes').hide();
        $('#div_freedom_fighter_bihar').hide();
	}
	
}

function CheckWorkPermit(){
	 
	if($('#workman_permit').val() == 'YES'){
		$('#workman_permit_yes').show();
         $('#div_freedom_fighter_bihar').show();
	}else{
        $("#workman_reg_no").val('');
		$('#workman_permit_yes').hide();
        $('#div_freedom_fighter_bihar').hide();
	}
	
}


function regularGovService(){
    var regular_gov_service = $('#regular_gov_service').val();

    if(regular_gov_service == 'YES'){
        $('#regular_gov_service_div').show();
    }else if(regular_gov_service == 'NO'){
        $('#regular_gov_service_div').hide();
    }
}


function checkForDomicileState(category) {
	
	
		var domicile_candidate = $('#domicile_candidate').val();
		// var post_applied_new = $('#post_applied').val();
		// var category = category;
      if(domicile_candidate == 'LOCAL RESIDENT OF JHARKHAND' || domicile_candidate == 'RESIDENT OF OTHER STATE'){

       //   if(domicile_candidate == 'RESIDENT OF OTHER STATE'){
            $('#domicile_message').show();
			 $('#ews_section').hide();
			 
			$('#ews_category').prop("selectedIndex", 0);
			$('#ews_category').val('');
          //  $('#ews_category').val('');
            // $("#disability_nature").val('');
                    // $("#disability_percentage").val('');
                    // $("#domicile_of_bihar_no").show(); 
        }else{
            $('#domicile_message').hide();
            //$('#ews_category').val('');
			// $('#ews_category').val('');
        }

        $.ajax({
            url: BASEURL+'ajaxDetails/getCategoryList',
            data: {domicile_candidate: domicile_candidate,category:category},
            method: 'POST',
            async: false,
            //dataType:"json",
            success: function (response) {

                $('#ajaxFieldCategory').html(response);
				
				if(category){
					$("#category").val(category).change();
				} 	


            },
            error: function (err) {
               // alert('Something Went wrong!!');
			   swal({text: "Something Went wrong",});
            }
        });
        
    }
	
	
function checkForpwdState(disability_nature) {
	
	
		var disability = $('#disability').val();
		var post_applied_new = $('#post_applied').val();

        if(disability == 'NO'){ 
            $("#disability_nature").val('');
                    // $("#disability_percentage").val('');
                    // $("#domicile_of_bihar_no").show(); 
        }else{
            
        }

        $.ajax({
            url: BASEURL+'ajaxDetails/pwdCategoryList',
            data: {disability: disability,disability_nature:disability_nature,post_applied_new:post_applied_new},
            method: 'POST',
            async: false,
            //dataType:"json",
            success: function (response) {

                $('#ajaxFieldP').html(response);
				
				if(disability_nature){
					$("#disability_nature").val(disability_nature).change();
				} 	


            },
            error: function (err) {
                alert('Something Went wrong!!');
            }
        });
        
    }






function chkvalidate(){ 
    
            // alert('kkk');
            var startdate = document.getElementById('joinning_date').value;
            //alert(startdate);
            var d1 = startdate.split('/');
            d1 = new Date(d1.pop(), d1.pop() - 1, d1.pop());

            var enddate = document.getElementById('exit_date').value;
            // alert(enddate);
            var d2 = enddate.split('/');
            d2 = new Date(d2.pop(), d2.pop() - 1, d2.pop());

            if (d1 >= d2) {
                //  $('#exp_fromdate input[type=text]').val('');
                // $('#exp_todate input[type=text]').val('');
              //  alert('Ex-Servicemen, Joinning Date should be less Than Exit Date');
				swal({text: "Ex-Servicemen, Joinning Date should be less Than Exit Date",});
				
        
                return false;
            }
        }

		
		
		


	
	
	function CheckDomicile(category){
		
				
				//alert(category)
                 //var category = $('#category').val();
				var val = $("#domicile_candidate").val();
				if(val == 'YES'){
					//$("#php-div").show();
				    $("#land-div").show();
					//$("#freedom-div").show();
					//$("#freedom_fighter_yes").show();
					$("#domicile_of_bihar_no").hide(); 
					
				}else if(val == 'NO'){
					//$("#disability").val('');
					$("#land_loser").val('');
					//$("#freedom_fighter").val('');
					//$("#freedom_fighter_bihar").val('');
					$("#disability_nature").val('');
					$("#disability_percentage").val('');
					$("#domicile_of_bihar_no").show(); 
					//$("#php-div").hide();
				    $("#land-div").hide();
					//$("#freedom-div").hide();			
					//$("#freedom_fighter_yes").hide();			
				}else{
					
					//$("#disability").val('');
					$("#land_loser").val('');
					//$("#freedom_fighter").val('');
					//$("#freedom_fighter_bihar").val('');
					$("#disability_nature").val('');
					$("#disability_percentage").val('');
					$("#domicile_of_bihar_no").hide(); 
					//$("#php-div").hide();
				    $("#land-div").hide();
					$("#freedom-div").hide();			
                    //$("#freedom_fighter_yes").hide();	
                    
                    
                }
                

                $.ajax({
                    url: BASEURL+'index_controller_WBSETCL/getTheReservationCategory',
                    data: {domicile: val},
                    method: 'POST',
                    async: false,
                    //dataType:"json",
                    success: function (response) {
        
                        $('#ajaxFieldC').html(response);
						if(category){
							$("#category").val(category).change();
						} 	
							
                    },
                    error: function (err) {
                       // alert('Something Went wrong!!');
					   swal({text: "Something Went wrong",});
                    }
                });
			}
			
			
			function maritalStatus(){
				 var val = $("#marital_status").val();
				if(val == 'MARRIED'){
				    $("#merid-div").show();
					
				}else{
					
					$("#spouse_name").val('');
					$("#merid-div").hide(); 			
				}
			}

            function checkWorkExperience1(){
                 var val = $("#work_experience").val();
                if(val == 'YES'){
                    $("#work_experience-div").show();
                }else{
                    $("#work_experience-div").hide();    
                    $('#work_experience-div [type=text]').val('');
                    $('#work_experience-div [type=date]').val('');         
                }
            }
			
            
			
			function get_mark_disability(){
			
			    var val = $("#disability").val();
				if(val == 'YES'){
					$("#mark_disability").show();
					 
					// $("#mark_disability_percentage").show();
					
				}else {
					
					$("#disability_nature").val('');
					// $("#disability_percentage").val('');
					$("#mark_disability").hide();
					// $("#mark_disability_percentage").hide();
					// $("#div-disability-oc").hide();
					// $("#type_orthopedical").val('');
				}  
			}
			
			function checkOCDisability(){
			
			    var val = $("#disability_nature").val();
				if(val == 'ORTHOPEDIC HANDICAPPED (OH)'){
					$("#div-disability-oc").show();
					
				}else {
					
					$("#div-disability-oc").hide();
					$("#type_orthopedical").val('');
				}
			}
			
			
			

            function getSports(){
            
                var val = $("#sports_person").val();
                if(val == 'YES'){
                    $("#sportsQuota").show();
                }else {
                    $("#sports_name").val('');
                    $("#sports_level").val('');
                    $("#sportsQuota").hide();
                    $("#other_sports_name").val('');
                    $("#other_sports_name_div").hide();
                }
            }

            function getSportsName(){
                var val = $("#sports_name").val();
                if(val == 'OTHER'){
                    $("#other_sports_name_div").show();
                }else {
                    $("#other_sports_name").val('');
                    $("#other_sports_name_div").hide();
                }
            }
			
			function getGatescore(){
				
				var valid_gate_csore = $("#valid_gate_score").val();
				
				if(valid_gate_csore== 'YES'){
					$('#div-gate-score').show();
				}else{
					$('#div-gate-score').hide();
					$('#gate_score').val('');
				}
				
			}
			
			function checkCaste(){
				
				var category = $("#category").val();
				
				if(category== 'SC' || category== 'ST' || category== 'SEBC'){
					$('#cast-div').show();
                    $('#cast-certificate-div').show();
				}else{
					$('#cast-div').hide();
					$('#cast-certificate-div').hide();
                    $('#caste_certification_date').val('');
                    $('#caste_certification_number').val('');
				}
				
			}
			
			function checkElectiveSubject(){
				var elective_subject = $("#elective_subject").val();
				
				if(elective_subject== 'NO'){
					////alert('Sorry ! You are not eligible to apply');
swal({text: "Sorry ! You are not eligible to apply",});
					swal({text: "Sorry ! You are not eligible to apply",});
					$('#elective_subject').val('');
				}
			}
			
			function checkValidDiploma(){
				var valid_diploma = $("#valid_diploma").val();
				
				if(valid_diploma== 'NO'){
					//alert('Sorry ! You are not eligible to apply');
swal({text: "Sorry ! You are not eligible to apply",});
					$('#valid_diploma').val('');
				}
			}
			
			function checkValidEnglish(){
				var english_elective_subject = $("#english_elective_subject").val();
				
				if(english_elective_subject== 'NO'){
					//alert('Sorry ! You are not eligible to apply');
swal({text: "Sorry ! You are not eligible to apply",});
					$('#english_elective_subject').val('');
				}
			}
			
			function checkEligibleMarks(){
				var hold_percentage_in_socialscience = $("#hold_percentage_in_socialscience").val();
				
				if(hold_percentage_in_socialscience== 'NO'){
					//alert('Sorry ! You are not eligible to apply');
swal({text: "Sorry ! You are not eligible to apply",});
					$('#hold_percentage_in_socialscience').val('');
				}
			}
			
			function checkTeachingExp(){
				var teaching_research_experience = $("#teaching_research_experience").val();
				
				if(teaching_research_experience== 'NO'){
					//alert('Sorry ! You are not eligible to apply');
swal({text: "Sorry ! You are not eligible to apply",});
					$('#teaching_research_experience').val('');
				}
			}
			
			function checkIndustryExp(){
				var industry_experience = $("#industry_experience").val();
				
				if(industry_experience== 'NO'){
					//alert('Sorry ! You are not eligible to apply');
swal({text: "Sorry ! You are not eligible to apply",});
					$('#industry_experience').val('');
				}
			}
			
			
			function OtherSubjectSpecify(){   
			
			var program = $("#programm").val();
			
			if(programm == str.toUpperCase('M.Tech. Environmental Technology')){
				var subject_studied = $("#subject_studied").val();
				
				if(subject_studied== 'Others'){
					$('#other-subject-studuied').show();
					
				}else{
					$('#other subject-studuied').hide();
					$('#subject_studied').val('');
				}
			 }
			}
			
			function getOthers(){   
			
				var nationality = $("#nationality").val();
				
				if(nationality == 'FOREIGNER'){
				
					$('#other-nationality-div').show();
					$( "#permanent_state" ).removeClass( "required" );
					$( "#permanent_city" ).removeClass( "required" );
					$( "#permanent_pincode" ).removeClass( "required" );
					
					$( "#correspondance_state" ).removeClass( "required" );
					$( "#correspondance_city" ).removeClass( "required" );
					$( "#correspondance_pincode" ).removeClass( "required" );
					
						
				}else{
						$('#other-nationality-div').hide();
						$('#other_nationality').val('');
						$( "#permanent_state" ).addClass( "required" );
						$( "#permanent_city" ).addClass( "required" );
						$( "#permanent_pincode" ).addClass( "required" );
						
						$( "#correspondance_state" ).addClass( "required" );
						$( "#correspondance_city" ).addClass( "required" );
						$( "#correspondance_pincode" ).addClass( "required" );
				}
				
			}
			
			
			
			
			
			
function calculatePercentage(){

    var maximum_mark4 = parseFloat($('#maximum_mark4').val());
    var obtained_marks4 = parseFloat($('#obtained_marks4').val());
    
    if (maximum_mark4) {
        var maximum_mark4 = maximum_mark4;
    } else {
        var maximum_mark4 = 0;
    }
    
    if($('#maximum_mark4').val()){
        
        if(maximum_mark4 == 0){
                //alert('Maximun mark should not be 0');
				swal({text: "Maximun mark should not be 0",});
                $("#maximum_mark4").val(''); 
        }
    }
    

    if (obtained_marks4) {
        var obtained_marks4 = obtained_marks4;
    } else {
        var obtained_marks4 = 0;
    }
    
    if($('#obtained_marks4').val()){
        
        if(obtained_marks4 == 0){
               // alert('Obtained mark should not be 0');
				swal({text: "Obtained mark should not be 0",});
                $("#obtained_marks4").val(''); 
        }
    }

    if (maximum_mark4 > 0 && obtained_marks4 > 0) {

        
            

        if (obtained_marks4 > maximum_mark4) {
          //  alert('Obtained mark should be less than maximum mark');
		  swal({text: "Obtained mark should be less than maximum mark",});
            $("#obtained_marks4").val(''); 
            return false;
        }
    } 
    
    var percent4 = (obtained_marks4 / maximum_mark4) * 100;
    //alert(percent1);
    var final_value4 = Math.round((percent4 * 100) / 100); 
    //if (!isFinite(final_value1)) final_value1 = 0;
    //alert(final_value1);
    $('#acd_percentage4').val(final_value4);
    
}		
	
function calculate_8th_GradeMarks(){
	
        var grade_8class = parseFloat($('#grade_8class').val());
		  if (grade_8class =='') {
			   $('#percentage_8class').val('');
		  }
		  else{
			  // var final_value1 = (grade_8class * 9.5).toFixed(2);
			  //  $('#percentage_8class').val(final_value1);
		  }

}		
function calculate_10th_GradeMarks(){
	
        var grade_10class = parseFloat($('#grade_10class').val());
		  if (grade_10class =='') {
			   $('#percentage_10class').val('');
		  }
		  else{
			  // var final_value1 = (grade_10class * 9.5).toFixed(2);
			  //  $('#percentage_10class').val(final_value1);
		  }

}	



	

function calculate_8th_Marks(){
            
        var total_marks_8class = parseFloat($('#total_marks_8class').val());
        var marks_obtained_8class = parseFloat($('#marks_obtained_8class').val());
        
        //alert(total_marks_8class); 
        //alert(marks_obtained_8class); 
        
        if (total_marks_8class) {
            var total_marks_8class = total_marks_8class;
        } else {
            var total_marks_8class = 0;
        }
        
        if($('#total_marks_8class').val()){
            
            if(total_marks_8class == 0){
                // alert('Maximun mark should not be 0');
                  swal({text: "Total mark should not be 0",});
                 
                 $("#total_marks_8class").val(''); 
            }
        }
        

        if (marks_obtained_8class) {
            var marks_obtained_8class = marks_obtained_8class;
        } else {
            var marks_obtained_8class = 0;
        }
        
        if($('#marks_obtained_8class').val()){
            
            if(marks_obtained_8class == 0){
                   swal({text: "Obtained mark should not be 0",});
                  // alert('Obtained mark should not be 0');
                 $("#marks_obtained_8class").val(''); 
            }
        }

        if (total_marks_8class > 0 && marks_obtained_8class > 0) {

            
             

            if (marks_obtained_8class > total_marks_8class) {
                 swal({text: "Obtained mark should not be greater than total mark",});
                // alert('Obtained mark should be less than maximum mark');
                $("#marks_obtained_8class").val(''); 
                return false;
            }
			
			
			
			
			
        } 
        
        var percent1 = (marks_obtained_8class / total_marks_8class) * 100;
        //alert(percent1);
      // var final_value1 = Math.round((percent1 * 100) / 100); 
      var final_value_2 = ((percent1 * 100) / 100).toFixed(2);
      
      if(final_value_2 == 'NaN')
      {
            var final_value1 = '0';
      }
      else{
            var final_value1 = ((percent1 * 100) / 100).toFixed(2);
      }
      
        // var final_value1 = ((percent1 * 100) / 100).toFixed(2);
        //if (!isFinite(final_value1)) final_value1 = 0;
        //alert(final_value1);

        //$("#percentage_8class").prop( "disabled", true);
        $('#percentage_8class').val(final_value1);
		
		 if (total_marks_8class > 0 && marks_obtained_8class > 0) {
		var percentage_8class = $('#percentage_8class').val(); 
			var category = $('#category').val(); 
			
			if (percentage_8class !='' || percentage_8class != 0 ) {
			
			if(category =='GEN'){
			
			if (percentage_8class < 45){  
			$('#percentage_8class').val(0); 
			swal({text: "Percentage should not be less then 45%",});
			return false;		
			}
			
			}else{
			if (percentage_8class < 40){  
			$('#percentage_8class').val(0); 
			swal({text: "Percentage should not be less then 40%",});
			return false;		
			} 
			
			}
			
			
			}
		
		 }
		
        
    }

function calculate_10th_Marks(){
            
        var total_marks_10class = parseFloat($('#total_marks_10class').val());
        var marks_obtained_10class = parseFloat($('#marks_obtained_10class').val());
        
        //alert(total_marks_10class); 
        //alert(marks_obtained_10class); 
        
        if (total_marks_10class) {
            var total_marks_10class = total_marks_10class;
        } else {
            var total_marks_10class = 0;
        }
        
        if($('#total_marks_10class').val()){
            
            if(total_marks_10class == 0){
                // alert('Maximun mark should not be 0');
                  swal({text: "Total mark should not be 0",});
                 
                 $("#total_marks_10class").val(''); 
            }
        }
        

        if (marks_obtained_10class) {
            var marks_obtained_10class = marks_obtained_10class;
        } else {
            var marks_obtained_10class = 0;
        }
        
        if($('#marks_obtained_10class').val()){
            
            if(marks_obtained_10class == 0){
                   swal({text: "Obtained mark should not be 0",});
                  // alert('Obtained mark should not be 0');
                 $("#marks_obtained_10class").val(''); 
            }
        }

        if (total_marks_10class > 0 && marks_obtained_10class > 0) {

            
             

            if (marks_obtained_10class > total_marks_10class) {
                 swal({text: "Obtained mark should not be greater than total mark",});
                // alert('Obtained mark should be less than maximum mark');
                $("#marks_obtained_10class").val(''); 
                return false;
            }
        } 
        
        var percent1 = (marks_obtained_10class / total_marks_10class) * 100;
        //alert(percent1);
      // var final_value1 = Math.round((percent1 * 100) / 100); 
      var final_value_2 = ((percent1 * 100) / 100).toFixed(2);
      
      if(final_value_2 == 'NaN')
      {
            var final_value1 = '0';
      }
      else{
            var final_value1 = ((percent1 * 100) / 100).toFixed(2);
      }
      
        // var final_value1 = ((percent1 * 100) / 100).toFixed(2);
        //if (!isFinite(final_value1)) final_value1 = 0;
        //alert(final_value1);

        //$("#percentage_10class").prop( "disabled", true);
        $('#percentage_10class').val(final_value1);
        
    }
	
function calculate_12th_Marks(){
            
        var total_marks_12class = parseFloat($('#total_marks_12class').val());
        var marks_obtained_12class = parseFloat($('#marks_obtained_12class').val());
        
        //alert(total_marks_12class); 
        //alert(marks_obtained_12class); 
        
        if (total_marks_12class) {
            var total_marks_12class = total_marks_12class;
        } else {
            var total_marks_12class = 0;
        }
        
        if($('#total_marks_12class').val()){
            
            if(total_marks_12class == 0){
                // alert('Maximun mark should not be 0');
                  swal({text: "Total mark should not be 0",});
                 
                 $("#total_marks_12class").val(''); 
            }
        }
        

        if (marks_obtained_12class) {
            var marks_obtained_12class = marks_obtained_12class;
        } else {
            var marks_obtained_12class = 0;
        }
        
        if($('#marks_obtained_12class').val()){
            
            if(marks_obtained_12class == 0){
                   swal({text: "Obtained mark should not be 0",});
                  // alert('Obtained mark should not be 0');
                 $("#marks_obtained_12class").val(''); 
            }
        }

        if (total_marks_12class > 0 && marks_obtained_12class > 0) {

            
             

            if (marks_obtained_12class > total_marks_12class) {
                 swal({text: "Obtained mark should not be greater than total mark",});
                // alert('Obtained mark should be less than maximum mark');
                $("#marks_obtained_12class").val(''); 
                return false;
            }
        } 
        
        var percent1 = (marks_obtained_12class / total_marks_12class) * 100;
        //alert(percent1);
      // var final_value1 = Math.round((percent1 * 100) / 100); 
      var final_value_2 = ((percent1 * 100) / 100).toFixed(2);
      
      if(final_value_2 == 'NaN')
      {
            var final_value1 = '0';
      }
      else{
            var final_value1 = ((percent1 * 100) / 100).toFixed(2);
      }
      
        // var final_value1 = ((percent1 * 100) / 100).toFixed(2);
        //if (!isFinite(final_value1)) final_value1 = 0;
        //alert(final_value1);

        //$("#percentage_12class").prop( "disabled", true);
        $('#percentage_12class').val(final_value1);
        
    }
	
function calculate_pgth_Marks(){
            
        var total_marks_pgclass = parseFloat($('#total_marks_pgclass').val());
        var marks_obtained_pgclass = parseFloat($('#marks_obtained_pgclass').val());
        
        //alert(total_marks_pgclass); 
        //alert(marks_obtained_pgclass); 
        
        if (total_marks_pgclass) {
            var total_marks_pgclass = total_marks_pgclass;
        } else {
            var total_marks_pgclass = 0;
        }
        
        if($('#total_marks_pgclass').val()){
            
            if(total_marks_pgclass == 0){
                // alert('Maximun mark should not be 0');
                  swal({text: "Total mark should not be 0",});
                 
                 $("#total_marks_pgclass").val(''); 
            }
        }
        

        if (marks_obtained_pgclass) {
            var marks_obtained_pgclass = marks_obtained_pgclass;
        } else {
            var marks_obtained_pgclass = 0;
        }
        
        if($('#marks_obtained_pgclass').val()){
            
            if(marks_obtained_pgclass == 0){
                   swal({text: "Obtained mark should not be 0",});
                  // alert('Obtained mark should not be 0');
                 $("#marks_obtained_pgclass").val(''); 
            }
        }

        if (total_marks_pgclass > 0 && marks_obtained_pgclass > 0) {

            
             

            if (marks_obtained_pgclass > total_marks_pgclass) {
                 swal({text: "Obtained mark should not be greater than total mark",});
                // alert('Obtained mark should be less than maximum mark');
                $("#marks_obtained_pgclass").val(''); 
                return false;
            }
        } 
        
        var percent1 = (marks_obtained_pgclass / total_marks_pgclass) * 100;
        //alert(percent1);
      // var final_value1 = Math.round((percent1 * 100) / 100); 
      var final_value_2 = ((percent1 * 100) / 100).toFixed(2);
      
      if(final_value_2 == 'NaN')
      {
            var final_value1 = '0';
      }
      else{
            var final_value1 = ((percent1 * 100) / 100).toFixed(2);
      }
      
        // var final_value1 = ((percent1 * 100) / 100).toFixed(2);
        //if (!isFinite(final_value1)) final_value1 = 0;
        //alert(final_value1);

        //$("#percentage_pgclass").prop( "disabled", true);
        $('#percentage_pgclass').val(final_value1);
        
    }
	
    
    
    
	
	
    
    
    
	
	
	
	

	


/*function calculate_Subject_Marks(){
            
        var subject_full_marks = parseFloat($('#subject_full_marks').val());
        var subject_obtained_marks = parseFloat($('#subject_obtained_marks').val());
        
        //alert(subject_full_marks); 
        //alert(subject_obtained_marks); 
        
        if (subject_full_marks) {
            var subject_full_marks = subject_full_marks;
        } else {
            var subject_full_marks = 0;
        }
        
        if($('#subject_full_marks').val()){
            
            if(subject_full_marks == 0){
                // alert('Maximun mark should not be 0');
                  swal({text: "Total mark should not be 0",});
                 
                 $("#subject_full_marks").val(''); 
            }
        }
        

        if (subject_obtained_marks) {
            var subject_obtained_marks = subject_obtained_marks;
        } else {
            var subject_obtained_marks = 0;
        }
        
        if($('#subject_obtained_marks').val()){
            
            if(subject_obtained_marks == 0){
                   swal({text: "Obtained mark should not be 0",});
                  // alert('Obtained mark should not be 0');
                 $("#subject_obtained_marks").val(''); 
            }
        }

        if (subject_full_marks > 0 && subject_obtained_marks > 0) {

            
             

            if (subject_obtained_marks > subject_full_marks) {
                 swal({text: "Obtained mark should not be greater than total mark",});
                // alert('Obtained mark should be less than maximum mark');
                $("#subject_obtained_marks").val(''); 
                return false;
            }
        } 
        
        var percent1 = (subject_obtained_marks / subject_full_marks) * 100;
        //alert(percent1);
      // var final_value1 = Math.round((percent1 * 100) / 100); 
      var final_value_2 = ((percent1 * 100) / 100).toFixed(2);
      
      if(final_value_2 == 'NaN')
      {
            var final_value1 = '0';
      }
      else{
            var final_value1 = ((percent1 * 100) / 100).toFixed(2);
      }
      
        // var final_value1 = ((percent1 * 100) / 100).toFixed(2);
        //if (!isFinite(final_value1)) final_value1 = 0;
        //alert(final_value1);

        $("#subject_percentage").prop( "disabled", true);
        $('#subject_percentage').val(final_value1);
        
}*/
		
function calculate_Subject_Marks(){
            
        var subject_full_marks = parseFloat($('#subject_full_marks').val());
        var subject_obtained_marks = parseFloat($('#subject_obtained_marks').val());
        
        //alert(subject_full_marks); 
        //alert(subject_obtained_marks); 
        
        if (subject_full_marks) {
            var subject_full_marks = subject_full_marks;
        } else {
            var subject_full_marks = 0;
        }
        
        if($('#subject_full_marks').val()){
            
            if(subject_full_marks == 0){
                // alert('Maximun mark should not be 0');
                  swal({text: "Total mark should not be 0",});
                 
                 $("#subject_full_marks").val(''); 
            }
        }
        

        if (subject_obtained_marks) {
            var subject_obtained_marks = subject_obtained_marks;
        } else {
            var subject_obtained_marks = 0;
        }
        
        if($('#subject_obtained_marks').val()){
            
            if(subject_obtained_marks == 0){
                   swal({text: "Obtained mark should not be 0",});
                  // alert('Obtained mark should not be 0');
                 $("#subject_obtained_marks").val(''); 
            }
        }

        if (subject_full_marks > 0 && subject_obtained_marks > 0) {

            
             

            if (subject_obtained_marks > subject_full_marks) {
                 swal({text: "Obtained mark should not be greater than total mark",});
                // alert('Obtained mark should be less than maximum mark');
                $("#subject_obtained_marks").val(''); 
                return false;
            }
        } 
        
        var percent6 = (subject_obtained_marks / subject_full_marks) * 100;
        //alert(percent6);
      // var final_value6 = Math.round((percent6 * 100) / 100); 
      var final_value_6 = ((percent6 * 100) / 100).toFixed(2);
      
      if(final_value_6 == 'NaN')
      {
            var final_value6 = '0';
      }
      else{
            var final_value6 = ((percent6 * 100) / 100).toFixed(2);
      }
      
        // var final_value6 = ((percent6 * 100) / 100).toFixed(2);
        //if (!isFinite(final_value6)) final_value6 = 0;
        //alert(final_value6);

        $("#subject_percentage").prop( "readonly", true);
        $('#subject_percentage').val(final_value6);
        
}

//Marks Calculation Start
function calculateTenthMarks(){
			
		var maximum_mark1 = parseFloat($('#maximum_mark1').val());
        var obtained_marks1 = parseFloat($('#obtained_marks1').val());
		
		//alert(maximum_mark1); 
		//alert(obtained_marks1); 
		
		if (maximum_mark1) {
            var maximum_mark1 = maximum_mark1;
        } else {
            var maximum_mark1 = 0;
        }
		
		if($('#maximum_mark1').val()){
			
			if(maximum_mark1 == 0){
				// alert('Maximun mark should not be 0');
				  swal({text: "Maximun mark should not be 0",});
				 
                 $("#maximum_mark1").val(''); 
			}
		}
		

        if (obtained_marks1) {
            var obtained_marks1 = obtained_marks1;
        } else {
            var obtained_marks1 = 0;
        }
		
		if($('#obtained_marks1').val()){
			
			if(obtained_marks1 == 0){
				   swal({text: "Obtained mark should not be 0",});
				  // alert('Obtained mark should not be 0');
                 $("#obtained_marks1").val(''); 
			}
		}

        if (maximum_mark1 > 0 && obtained_marks1 > 0) {

            
             

            if (obtained_marks1 > maximum_mark1) {
                 swal({text: "Obtained mark should be less than maximum mark",});
				// alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks1").val(''); 
                return false;
            }
        } 
		
		var percent1 = (obtained_marks1 / maximum_mark1) * 100;
		//alert(percent1);
      // var final_value1 = Math.round((percent1 * 100) / 100); 
	  var final_value_2 = ((percent1 * 100) / 100).toFixed(2);
	  
	  if(final_value_2 == 'NaN')
	  {
		    var final_value1 = '0';
	  }
	  else{
		    var final_value1 = ((percent1 * 100) / 100).toFixed(2);
	  }
	  
        // var final_value1 = ((percent1 * 100) / 100).toFixed(2);
		//if (!isFinite(final_value1)) final_value1 = 0;
		//alert(final_value1);
		$('#acd_percentage1').val(final_value1);
		
	}
	

	function calculateTwelthMarks2(){
		
		var maximum_mark1 = parseFloat($('#maximum_mark1').val());
        var obtained_marks1 = parseFloat($('#obtained_marks1').val());
		
		//alert(maximum_mark1); 
		//alert(obtained_marks1); 
		
		if (maximum_mark1) {
            var maximum_mark1 = maximum_mark1;
        } else {
            var maximum_mark1 = 0;
        }
		
		if($('#maximum_mark1').val()){
			
			if(maximum_mark1 == 0){
				 swal({text: "Maximun mark should not be 0",});
				 //alert('Maximun mark should not be 0');
                 $("#maximum_mark1").val(''); 
			}
		}
		

        if (obtained_marks1) {
            var obtained_marks1 = obtained_marks1;
        } else {
            var obtained_marks1 = 0;
        }
		
		if($('#obtained_marks1').val()){
			
			if(obtained_marks1 == 0){
				  swal({text: "Obtained mark should not be 0",});
				// alert('Obtained mark should not be 0');
                 $("#obtained_marks1").val(''); 
			}
		}

        if (maximum_mark1 > 0 && obtained_marks1 > 0) {

            
             

            if (obtained_marks1 > maximum_mark1) {
                swal({text: "Obtained mark should be less than maximum mark",});
				//alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks1").val(''); 
                return false;
            }
        } 
		
		var percent1 = (obtained_marks1 / maximum_mark1) * 100;
		//alert(percent1);
       // var final_value1 = Math.round((percent1 * 100) / 100); 
        var final_value1 = ((percent1 * 100) / 100).toFixed(2);
		//if (!isFinite(final_value1)) final_value1 = 0;
		//alert(final_value1);
		$('#acd_percentage1').val(final_value1);
		
	}
	
	function calculateTwelthMarks(){
		
		var maximum_mark2 = parseFloat($('#maximum_mark2').val());
        var obtained_marks2 = parseFloat($('#obtained_marks2').val());
		
		//alert(maximum_mark2); 
		//alert(obtained_marks2); 
		
		if (maximum_mark2) {
            var maximum_mark2 = maximum_mark2;
        } else {
            var maximum_mark2 = 0;
        }
		
		if($('#maximum_mark2').val()){
			
			if(maximum_mark2 == 0){
				  swal({text: "Maximun mark should not be 0",});
				  // alert('Maximun mark should not be 0');
                 $("#maximum_mark2").val(''); 
			}
		}
		

        if (obtained_marks2) {
            var obtained_marks2 = obtained_marks2;
        } else {
            var obtained_marks2 = 0;
        }
		
		if($('#obtained_marks2').val()){
			
			if(obtained_marks2 == 0){
				swal({text: "Obtained mark should not be 0",});
				// alert('Obtained mark should not be 0');
                 $("#obtained_marks2").val(''); 
			}
		}

        if (maximum_mark2 > 0 && obtained_marks2 > 0) {

            
             

            if (obtained_marks2 > maximum_mark2) {
                swal({text: "Obtained mark should be less than maximum mark",});
				//alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks2").val(''); 
                return false;
            }
        } 
		
		var percent1 = (obtained_marks2 / maximum_mark2) * 100;
		//alert(percent1);
        // var final_value1 = Math.round((percent1 * 100) / 100); 
        var final_value1 = ((percent1 * 100) / 100).toFixed(2);
		//if (!isFinite(final_value1)) final_value1 = 0;
		//alert(final_value1);
		$('#acd_percentage2').val(final_value1);
		
	}
	
	
	
	function calculateDiplomaMarks(){
		
		var maximum_mark3 = parseFloat($('#maximum_mark3').val());
        var obtained_marks3 = parseFloat($('#obtained_marks3').val());
		
		//alert(maximum_mark3); 
		//alert(obtained_marks3); 
		
		if (maximum_mark3) {
            var maximum_mark3 = maximum_mark3;
        } else {
            var maximum_mark3 = 0;
        }
		
		if($('#maximum_mark3').val()){
			
			if(maximum_mark3 == 0){
				// alert('Maximun mark should not be 0');
				swal({text: "Maximun mark should not be 0",});
                 $("#maximum_mark3").val(''); 
			}
		}
		

        if (obtained_marks3) {
            var obtained_marks3 = obtained_marks3;
        } else {
            var obtained_marks3 = 0;
        }
		
		if($('#obtained_marks3').val()){
			
			if(obtained_marks3 == 0){
				
				swal({text: "Obtained mark should not be 0",});
				// alert('Obtained mark should not be 0');
                 $("#obtained_marks3").val(''); 
			}
		}

        if (maximum_mark3 > 0 && obtained_marks3 > 0) {

            
             

            if (obtained_marks3 > maximum_mark3) {
                swal({text: "Obtained mark should be less than maximum mark",});
				//alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks3").val(''); 
                return false;
            }
        } 
		
		var percent1 = (obtained_marks3 / maximum_mark3) * 100;
		//alert(percent1);
        // var final_value1 = Math.round((percent1 * 100) / 100); 
        var final_value1 =  ((percent1 * 100) / 100).toFixed(2);
		//if (!isFinite(final_value1)) final_value1 = 0;
		//alert(final_value1);
		$('#acd_percentage3').val(final_value1);
		
	}
	
	
	function calculatePGMarks(){
		
		var maximum_mark4 = parseFloat($('#maximum_mark4').val());
        var obtained_marks4 = parseFloat($('#obtained_marks4').val());
		
		//alert(maximum_mark4); 
		//alert(obtained_marks4); 
		
		if (maximum_mark4) {
            var maximum_mark4 = maximum_mark4;
        } else {
            var maximum_mark4 = 0;
        }
		
		if($('#maximum_mark4').val()){
			
			if(maximum_mark4 == 0){
				swal({text: "Maximun mark should not be 0",});
				// alert('Maximun mark should not be 0');
                 $("#maximum_mark4").val(''); 
			}
		}
		

        if (obtained_marks4) {
            var obtained_marks4 = obtained_marks4;
        } else {
            var obtained_marks4 = 0;
        }
		
		if($('#obtained_marks4').val()){
			
			if(obtained_marks4 == 0){
				swal({text: "Obtained mark should not be 0",});
				// alert('Obtained mark should not be 0');
                 $("#obtained_marks4").val(''); 
			}
		}

        if (maximum_mark4 > 0 && obtained_marks4 > 0) {

            
             

            if (obtained_marks4 > maximum_mark4) {
                swal({text: "Obtained mark should be less than maximum mark",});
				//alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks4").val(''); 
                return false;
            }
        } 
		
		var percent1 = (obtained_marks4 / maximum_mark4) * 100;
		//alert(percent1);
       // var final_value1 = Math.round((percent1 * 100) / 100); 
        var final_value1 =  ((percent1 * 100) / 100).toFixed(2);
		//if (!isFinite(final_value1)) final_value1 = 0;
		//alert(final_value1);
		
		if(final_value1 == 'NaN')
		{
			 var final_value1 = '';
		}
		
		$('#acd_percentage4').val(final_value1);
	}

        function calculateBEMarks(){
        
        var maximum_mark5 = parseFloat($('#maximum_mark5').val());
        var obtained_marks5 = parseFloat($('#obtained_marks5').val());
        
        //alert(maximum_mark5); 
        //alert(obtained_marks5); 
        
        if (maximum_mark5) {
            var maximum_mark5 = maximum_mark5;
        } else {
            var maximum_mark5 = 0;
        }
        
        if($('#maximum_mark5').val()){
            
            if(maximum_mark5 == 0){
                // alert('Maximun mark should not be 0');
				swal({text: "Maximun mark should not be 0",});
                 $("#maximum_mark5").val(''); 
            }
        }
        

        if (obtained_marks5) {
            var obtained_marks5 = obtained_marks5;
        } else {
            var obtained_marks5 = 0;
        }
        
        if($('#obtained_marks5').val()){
            
            if(obtained_marks5 == 0){
               // alert('Obtained mark should not be 0');
				swal({text: "Obtained mark should not be 0",});
                 $("#obtained_marks5").val(''); 
            }
        }

        if (maximum_mark5 > 0 && obtained_marks5 > 0) {

            
             

            if (obtained_marks5 > maximum_mark5) {
				  swal({text: "Obtained mark should be less than maximum mark",});
               // alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks5").val(''); 
                return false;
            }
        } 
        
        var percent1 = (obtained_marks5 / maximum_mark5) * 100;
        //alert(percent1);
        var final_value1 = Math.round((percent1 * 100) / 100); 
        //if (!isFinite(final_value1)) final_value1 = 0;
        //alert(final_value1);
        $('#acd_percentage5').val(final_value1);
        
    }	


	function calculatebachlorsMarks()
	{
		
		var maximum_mark6 = parseFloat($('#maximum_mark6').val());
        var obtained_marks6 = parseFloat($('#obtained_marks6').val());
		
		//alert(maximum_mark6); 
		//alert(obtained_marks6); 
		
		if (maximum_mark6) {
            var maximum_mark6 = maximum_mark6;
        } else {
            var maximum_mark6 = 0;
        }
		
		if($('#maximum_mark6').val()){
			
			if(maximum_mark6 == 0){
				// alert('Maximun mark should not be 0');
				swal({text: "Maximun mark should not be 0",});
                 $("#maximum_mark6").val(''); 
			}
		}
		

        if (obtained_marks6) {
            var obtained_marks6 = obtained_marks6;
        } else {
            var obtained_marks6 = 0;
        }
		
		if($('#obtained_marks6').val()){
			
			if(obtained_marks6 == 0){
				// alert('Obtained mark should not be 0');
				swal({text: "Obtained mark should not be 0",});
                 $("#obtained_marks6").val(''); 
			}
		}

        if (maximum_mark6 > 0 && obtained_marks6 > 0) {

            
             

            if (obtained_marks6 > maximum_mark6) {
				  swal({text: "Obtained mark should be less than maximum mark",});
                //alert('Obtained mark should be less than maximum mark');
                $("#obtained_marks6").val(''); 
                return false;
            }
        } 
		
		var percent1 = (obtained_marks6 / maximum_mark6) * 100;
		//alert(percent1);
       // var final_value1 = Math.round((percent1 * 100) / 100); 
        var final_value1 =  ((percent1 * 100) / 100).toFixed(2);
		
		if(final_value1 == 'NaN')
		{
			 var final_value1 = '';
		}
		
		//if (!isFinite(final_value1)) final_value1 = 0;
		//alert(final_value1);
		$('#acd_percentage6').val(final_value1);
	}	
//Marks Calculation End			
			
//BSPHCL scripts end here
// Added By karthik
function CheckBiharCouncilReg()
{
   
    $('#indian_nursing_council_reg_section').hide();
    $('#other_state_nursing_council_number_section').hide();
    $('#other_nursing_council_reg_section').hide();

    // alert(0);
    if($('#is_nursing_council').val() == 'YES'){
        $('#nursing_council_number_section').show();
         $('#div_indian_other_council').hide();
         $("#is_indian_nursing_council").val('');
         $("#indian_nursing_council_number").val('');
         
    }
    else if($('#is_nursing_council').val() == 'NO'){
        $("#bihar_nursing_council_number").val('');
        $('#nursing_council_number_section').hide();
        $('#div_indian_other_council').show();
        $("#nursing_council_number").val('');



    }
    
}

function CheckIndianCouncilReg()
{
    // alert(0);
     $('#other_state_nursing_council_number_section').hide();
     $('#other_nursing_council_reg_section').hide();
     $("#is_other_state_nursing_council").val('');
     $("#other_state_nursing_council_number").val('');
    if($('#is_indian_nursing_council').val() == 'YES')
    {
        $('#indian_nursing_council_reg_section').show();
        $('#div_freedom_fighter_bihar').show();
    }
    else if($('#is_indian_nursing_council').val() == 'NO')
    {
        $("#indian_nursing_council_number").val('');
        $("#is_other_state_nursing_council").val('');
        $('#indian_nursing_council_reg_section').hide();
         $('#other_nursing_council_reg_section').show();
         $('#other_state_nursing_council_number_section').hide();
        $('#div_freedom_fighter_bihar').hide();
    }
    
}
function CheckOtherCouncilReg()
{
    // alert(0);
    if($('#is_other_state_nursing_council').val() == 'YES')
    {
        $('#other_state_nursing_council_number_section').show();
        $('#div_freedom_fighter_bihar').show();
    }
    else if($('#is_other_state_nursing_council').val() == 'NO')
    {
        $("#indian_nursing_council_number").val('');
        $("#other_nursing_council_number").val('');
        $('#other_state_nursing_council_number_section').hide();
        $('#div_freedom_fighter_bihar').hide();
    }
    
}



function Cutoffrom2(){
		 var cut_off = Date.parse("2021-03-31");
         var from_off = Date.parse($("#experience_period_from_2").val());
		 if (from_off > cut_off) 
		{
			 
			$("#experience_period_from_2").val("");
			swal({text: "From Date should not be greater than 31-Mar-2021",});
			
			return false;
		}  
	}
	
	
	function Cutofto2(){
		 var cut_off = Date.parse("2021-03-31");
         var to_off = Date.parse($("#experience_period_to_2").val());
		if (to_off > cut_off) 
			{ 
				$("#experience_period_to_2").val("");
				swal({text: "To Date should not be greater than 31-Mar-2021",});
				
				return false;
			}
	}
	
	
function Cutoffrom3(){
		 var cut_off = Date.parse("2021-03-31");
         var from_off = Date.parse($("#experience_period_from_3").val());
		 if (from_off > cut_off) 
		{
			// alert('From Date should not be greater than 31-Mar-2021');
			$("#experience_period_from_3").val("");
			swal({text: "From Date should not be greater than 31-Mar-2021",});
			
			return false;
		}  
	}
	
	
	function Cutofto3(){
		 var cut_off = Date.parse("2021-03-31");
         var to_off = Date.parse($("#experience_period_to_3").val());
		if (to_off > cut_off) 
			{ 
				$("#experience_period_to_3").val("");
				swal({text: "To Date should not be greater than 31-Mar-2021",});
				
				return false;
			}
	}
	
	function Cutoffrom4(){
		 var cut_off = Date.parse("2021-03-31");
         var from_off = Date.parse($("#experience_period_from_4").val());
		 if (from_off > cut_off) 
		{ 
			$("#experience_period_from_4").val("");
			swal({text: "From Date should not be greater than 31-Mar-2021",});
			
			return false;
		}  
	}
	
	
	function Cutofto4(){
		 var cut_off = Date.parse("2021-03-31");
         var to_off = Date.parse($("#experience_period_to_4").val());
		if (to_off > cut_off) 
			{ 
				$("#experience_period_to_4").val("");
				swal({text: "To Date should not be greater than 31-Mar-2021",});
				
				return false;
			}
	}
	
	function Cutoffrom5(){
		 var cut_off = Date.parse("2021-03-31");
         var from_off = Date.parse($("#experience_period_from_5").val());
		 if (from_off > cut_off) 
		{ 
			$("#experience_period_from_5").val("");
			swal({text: "From Date should not be greater than 31-Mar-2021",});
			
			return false;
		}  
	}
	
	
	function Cutofto5(){
		 var cut_off = Date.parse("2021-03-31");
         var to_off = Date.parse($("#experience_period_to_5").val());
		if (to_off > cut_off) 
			{ 
				$("#experience_period_to_5").val("");
				swal({text: "To Date should not be greater than 31-Mar-2021",});
				
				return false;
			}
	}
	
function CheckDepcandidate(){
	// alert(0);
	if($('#in_service_candidate').val() == 'YES'){
		$('#departmental_candidate_yes').show(); 
        
        if($('#outsourced_candidate').val() == 'YES'){
    		$("#outsourced_candidate").val(''); 
            $('#outsourced_candidate_yes').hide(); 
            $("#outsourced_candidate_from_date").val(''); 
        }

	}else{ 
        $("#depatmental_empid").val(''); 
        $("#date_of_retirement").val(''); 
		$('#departmental_candidate_yes').hide(); 
	}
	
}

function CheckOutsource_candidate(){
    // alert(0);
    if($('#outsourced_candidate').val() == 'YES'){
        $('#outsourced_candidate_yes').show(); 
    }else{ 
        $("#outsourced_candidate_from_date").val(''); 
        $('#outsourced_candidate_yes').hide(); 
    }
    
}


function checkForsebcState(){
	// alert(0);
	if($('#category').val() == 'SEBC'){ 
		$('#sebc_date_section').show(); 										
	} else {
        $('#sebc_date_section').hide(); 
        $("#sebc_certificate_date").val('');
    } 
}	

function checkForsebcState2(){
	// alert(0);
	if($('#category').val() == 'SEBC'){
		
		if($('#sebc_certificate_date').val() =='')
		{
			swal({text: "Date of issuance of SEBC certificate which should not be before 01.05.2018",});
		}
		$('#sebc_date_section').show(); 										
	} else {
        $('#sebc_date_section').hide(); 
        $("#sebc_certificate_date").val('');
    } 
}	


function Checkcgpa2(){
	 
	 var val2 = $("#cgpa_marks2").val();
	 if (val2) {

           if (val2 == 0 || val2 == '.' ) {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks2").val(''); 

                $("#maximum_mark2").val("");
                $("#obtained_marks2").val("");
                $("#acd_percentage2").val("");
                $("#maximum_mark2").prop("disabled", false);
                $("#obtained_marks2").prop("disabled", false);
                $("#acd_percentage2").prop("disabled", false);
            
            } else if (val2 > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks2").val(''); 

                $("#maximum_mark2").val("");
                $("#obtained_marks2").val("");
                $("#acd_percentage2").val("");
                $("#maximum_mark2").prop("disabled", false);
                $("#obtained_marks2").prop("disabled", false);
                $("#acd_percentage2").prop("disabled", false);

            } else {

                $("#maximum_mark2").val("");
                $("#obtained_marks2").val("");
                $("#acd_percentage2").val("");

                //disable fields
                $("#maximum_mark2").prop( "disabled", true);
                $("#obtained_marks2").prop( "disabled", true);
                $("#acd_percentage2").prop( "disabled", true);

                //add required fields
                $('#cgpa_marks2').addClass('required');
                
                //remove required fields
                $('#maximum_mark2').removeClass('required');
                $('#obtained_marks2').removeClass('required');
                $('#acd_percentage2').removeClass('required');

                //$('maximum_mark2').attr('required', false); 

                // $('#maximum_mark2').removeAttribute("required");
                // $('#obtained_marks2').removeAttribute('required');
                // $('#acd_percentage2').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark2").prop("disabled", false);
            $("#obtained_marks2").prop("disabled", false);
            $("#acd_percentage2").prop("disabled", false);

            //add required fields
            $('#cgpa_marks2').removeClass('required');
            
            //remove required fields
            $('#maximum_mark2').addClass('required');
            $('#obtained_marks2').addClass('required');
            $('#acd_percentage2').addClass('required');
        }
	
}






function Checkcgpa4(){
	// alert(0);
	
	 var val4 = $("#cgpa_marks4").val();
	 if (val4) {

            if (val4 == 0 || val4 == '.' ) {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks4").val(''); 

                $("#maximum_mark4").val("");
                $("#obtained_marks4").val("");
                $("#acd_percentage4").val("");
                $("#maximum_mark4").prop("disabled", false);
                $("#obtained_marks4").prop("disabled", false);
                $("#acd_percentage4").prop("disabled", false);
            
            } else if (val4 > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks4").val(''); 

                $("#maximum_mark4").val("");
                $("#obtained_marks4").val("");
                $("#acd_percentage4").val("");
                $("#maximum_mark4").prop("disabled", false);
                $("#obtained_marks4").prop("disabled", false);
                $("#acd_percentage4").prop("disabled", false);

            } else {

                $("#maximum_mark4").val("");
                $("#obtained_marks4").val("");
                $("#acd_percentage4").val("");

                //disable fields
                $("#maximum_mark4").prop( "disabled", true);
                $("#obtained_marks4").prop( "disabled", true);
                $("#acd_percentage4").prop( "disabled", true);

                //add required fields
                $('#cgpa_marks4').addClass('required');
                
                //remove required fields
                $('#maximum_mark4').removeClass('required');
                $('#obtained_marks4').removeClass('required');
                $('#acd_percentage4').removeClass('required');

                //$('maximum_mark4').attr('required', false); 

                // $('#maximum_mark4').removeAttribute("required");
                // $('#obtained_marks4').removeAttribute('required');
                // $('#acd_percentage4').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark4").prop("disabled", false);
            $("#obtained_marks4").prop("disabled", false);
            $("#acd_percentage4").prop("disabled", false);

            //add required fields
            $('#cgpa_marks4').removeClass('required');
            
            //remove required fields
            $('#maximum_mark4').addClass('required');
            $('#obtained_marks4').addClass('required');
            $('#acd_percentage4').addClass('required');
        }
	
}


function Checkcgpa5(){
	// alert(0);
	
	 var val5 = $("#cgpa_marks5").val();
	 if (val5) {

            if (val5 == 0 || val5 == '.' ) {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks5").val(''); 

                $("#maximum_mark5").val("");
                $("#obtained_marks5").val("");
                $("#acd_percentage5").val("");
                $("#maximum_mark5").prop("disabled", false);
                $("#obtained_marks5").prop("disabled", false);
                $("#acd_percentage5").prop("disabled", false);
            
            } else if (val5 > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks5").val(''); 

                $("#maximum_mark5").val("");
                $("#obtained_marks5").val("");
                $("#acd_percentage5").val("");
                $("#maximum_mark5").prop("disabled", false);
                $("#obtained_marks5").prop("disabled", false);
                $("#acd_percentage5").prop("disabled", false);

            } else {

                $("#maximum_mark5").val("");
                $("#obtained_marks5").val("");
                $("#acd_percentage5").val("");

                //disable fields
                $("#maximum_mark5").prop( "disabled", true);
                $("#obtained_marks5").prop( "disabled", true);
                $("#acd_percentage5").prop( "disabled", true);

                //add required fields
                $('#cgpa_marks5').addClass('required');
                
                //remove required fields
                $('#maximum_mark5').removeClass('required');
                $('#obtained_marks5').removeClass('required');
                $('#acd_percentage5').removeClass('required');

                //$('maximum_mark5').attr('required', false); 

                // $('#maximum_mark5').removeAttribute("required");
                // $('#obtained_marks5').removeAttribute('required');
                // $('#acd_percentage5').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark5").prop("disabled", false);
            $("#obtained_marks5").prop("disabled", false);
            $("#acd_percentage5").prop("disabled", false);

            //add required fields
            $('#cgpa_marks5').removeClass('required');
            
            //remove required fields
            $('#maximum_mark5').addClass('required');
            $('#obtained_marks5').addClass('required');
            $('#acd_percentage5').addClass('required');
        }
	
}
/*Start CGPA Validation*/
$(document).ready(function(){
    //Row 1
    //$('#cgpa_marks1').blur(function(){
    $(document).on('change','#cgpa_marks1',function(){
        if ($(this).val()) {

            if ($(this).val() == 0 || $(this).val() == '.') {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks1").val(''); 

                $("#maximum_mark1").val("");
                $("#obtained_marks1").val("");
                $("#acd_percentage1").val("");
                $("#maximum_mark1").prop("disabled", false);
                $("#obtained_marks1").prop("disabled", false);
                $("#acd_percentage1").prop("disabled", false);
            
            } else if ($(this).val() > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks1").val(''); 

                $("#maximum_mark1").val("");
                $("#obtained_marks1").val("");
                $("#acd_percentage1").val("");
                $("#maximum_mark1").prop("disabled", false);
                $("#obtained_marks1").prop("disabled", false);
                $("#acd_percentage1").prop("disabled", false);

            } else {

                $("#maximum_mark1").val("");
                $("#obtained_marks1").val("");
                $("#acd_percentage1").val("");

                //disable fields
                $("#maximum_mark1").prop( "disabled", true);
                $("#obtained_marks1").prop( "disabled", true);
                $("#acd_percentage1").prop( "disabled", true);

                //add required fields
                $('#cgpa_marks1').addClass('required');
                
                //remove required fields
                $('#maximum_mark1').removeClass('required');
                $('#obtained_marks1').removeClass('required');
                $('#acd_percentage1').removeClass('required');

                //$('maximum_mark1').attr('required', false); 

                $('#maximum_mark1').removeAttribute("required");
                $('#obtained_marks1').removeAttribute('required');
                $('#acd_percentage1').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark1").prop("disabled", false);
            $("#obtained_marks1").prop("disabled", false);
            $("#acd_percentage1").prop("disabled", false);

            //add required fields
            $('#cgpa_marks1').removeClass('required');
            
            //remove required fields
            $('#maximum_mark1').addClass('required');
            $('#obtained_marks1').addClass('required');
            $('#acd_percentage1').addClass('required');
        }
    });

    //$('#maximum_mark1').blur(function(){
    $(document).on('change','#maximum_mark1',function(){
        if ($(this).val()) {

            $("#cgpa_marks1").val("");

            //disable fields
            $("#cgpa_marks1").prop("disabled", true );
        
            //add required fields
            $('#maximum_mark1').addClass('required');
            $('#obtained_marks1').addClass('required');
            $('#acd_percentage1').addClass('required');

            //remove required fields
            $('#cgpa_marks1').removeClass('required');
            
        } else {

            $("#maximum_mark1").val("");
            $("#obtained_marks1").val("");
            $("#acd_percentage1").val("");

            //enable fields
            $("#cgpa_marks1").prop( "disabled", false );

            //add required fields
            $('#maximum_mark1').addClass('required');
            $('#obtained_marks1').addClass('required');
            $('#acd_percentage1').addClass('required');

            //remove required fields
            $('#cgpa_marks1').removeClass('required');
        }
    });

    //Row 2
    //$('#cgpa_marks2').blur(function(){
    $(document).on('change','#cgpa_marks2',function(){
        if ($(this).val()) {

            if ($(this).val() == 0 || $(this).val() == '.') {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks2").val(''); 

                $("#maximum_mark2").val("");
                $("#obtained_marks2").val("");
                $("#acd_percentage2").val("");
                $("#maximum_mark2").prop("disabled", false);
                $("#obtained_marks2").prop("disabled", false);
                $("#acd_percentage2").prop("disabled", false);
            
            } else if ($(this).val() > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks2").val(''); 

                $("#maximum_mark2").val("");
                $("#obtained_marks2").val("");
                $("#acd_percentage2").val("");
                $("#maximum_mark2").prop("disabled", false);
                $("#obtained_marks2").prop("disabled", false);
                $("#acd_percentage2").prop("disabled", false);

            } else {

                $("#maximum_mark2").val("");
                $("#obtained_marks2").val("");
                $("#acd_percentage2").val("");

                //disable fields
                $("#maximum_mark2").prop( "disabled", true );
                $("#obtained_marks2").prop( "disabled", true );
                $("#acd_percentage2").prop( "disabled", true );

                //add required fields
                $('#cgpa_marks2').addClass('required');
                
                //remove required fields
                $('#maximum_mark2').removeClass('required');
                $('#obtained_marks2').removeClass('required');
                $('#acd_percentage2').removeClass('required');

                //$('maximum_mark2').attr('required', false); 

                $('#maximum_mark2').removeAttribute("required");
                $('#obtained_marks2').removeAttribute('required');
                $('#acd_percentage2').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark2").prop("disabled", false);
            $("#obtained_marks2").prop("disabled", false);
            $("#acd_percentage2").prop("disabled", false);

            //add required fields
            $('#cgpa_marks2').removeClass('required');
            
            //remove required fields
            $('#maximum_mark2').addClass('required');
            $('#obtained_marks2').addClass('required');
            $('#acd_percentage2').addClass('required');
        }
    });

    //$('#maximum_mark2').blur(function(){
    $(document).on('change','#maximum_mark2',function(){
        if ($(this).val()) {

            $("#cgpa_marks2").val("");

            //disable fields
            $("#cgpa_marks2").prop("disabled", true );
        
            //add required fields
            $('#maximum_mark2').addClass('required');
            $('#obtained_marks2').addClass('required');
            $('#acd_percentage2').addClass('required');

            //remove required fields
            $('#cgpa_marks2').removeClass('required');
            
        } else {

            $("#maximum_mark2").val("");
            $("#obtained_marks2").val("");
            $("#acd_percentage2").val("");

            //enable fields
            $("#cgpa_marks2").prop( "disabled", false );

            //add required fields
            $('#maximum_mark2').addClass('required');
            $('#obtained_marks2').addClass('required');
            $('#acd_percentage2').addClass('required');

            //remove required fields
            $('#cgpa_marks2').removeClass('required');
        }
    });

    //Row 3
    //$('#cgpa_marks3').blur(function(){
    $(document).on('change','#cgpa_marks3',function(){
        if ($(this).val()) {

            if ($(this).val() == 0 || $(this).val() == '.') {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks3").val(''); 

                $("#maximum_mark3").val("");
                $("#obtained_marks3").val("");
                $("#acd_percentage3").val("");
                $("#maximum_mark3").prop("disabled", false);
                $("#obtained_marks3").prop("disabled", false);
                $("#acd_percentage3").prop("disabled", false);
            
            } else if ($(this).val() > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks3").val(''); 

                $("#maximum_mark3").val("");
                $("#obtained_marks3").val("");
                $("#acd_percentage3").val("");
                $("#maximum_mark3").prop("disabled", false);
                $("#obtained_marks3").prop("disabled", false);
                $("#acd_percentage3").prop("disabled", false);

            } else {

                $("#maximum_mark3").val("");
                $("#obtained_marks3").val("");
                $("#acd_percentage3").val("");

                //disable fields
                $("#maximum_mark3").prop( "disabled", true );
                $("#obtained_marks3").prop( "disabled", true );
                $("#acd_percentage3").prop( "disabled", true );

                //add required fields
                $('#cgpa_marks3').addClass('required');
                
                //remove required fields
                $('#maximum_mark3').removeClass('required');
                $('#obtained_marks3').removeClass('required');
                $('#acd_percentage3').removeClass('required');

                //$('maximum_mark3').attr('required', false); 

                $('#maximum_mark3').removeAttribute("required");
                $('#obtained_marks3').removeAttribute('required');
                $('#acd_percentage3').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark3").prop("disabled", false);
            $("#obtained_marks3").prop("disabled", false);
            $("#acd_percentage3").prop("disabled", false);

            //add required fields
            $('#cgpa_marks3').removeClass('required');
            
            //remove required fields
            $('#maximum_mark3').addClass('required');
            $('#obtained_marks3').addClass('required');
            $('#acd_percentage3').addClass('required');
        }
    });

    //$('#maximum_mark3').blur(function(){
    $(document).on('change','#maximum_mark3',function(){
        if ($(this).val()) {

            $("#cgpa_marks3").val("");

            //disable fields
            $("#cgpa_marks3").prop("disabled", true );
        
            //add required fields
            $('#maximum_mark3').addClass('required');
            $('#obtained_marks3').addClass('required');
            $('#acd_percentage3').addClass('required');

            //remove required fields
            $('#cgpa_marks3').removeClass('required');
            
        } else {

            $("#maximum_mark3").val("");
            $("#obtained_marks3").val("");
            $("#acd_percentage3").val("");

            //enable fields
            $("#cgpa_marks3").prop( "disabled", false );

            //add required fields
            $('#maximum_mark3').addClass('required');
            $('#obtained_marks3').addClass('required');
            $('#acd_percentage3').addClass('required');

            //remove required fields
            $('#cgpa_marks3').removeClass('required');
        }
    });

    //Row 4
    //$('#cgpa_marks4').blur(function(){
    $(document).on('change','#cgpa_marks4',function(){
        if ($(this).val()) {

            if ($(this).val() == 0 || $(this).val() == '.') {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks4").val(''); 

                $("#maximum_mark4").val("");
                $("#obtained_marks4").val("");
                $("#acd_percentage4").val("");
                $("#maximum_mark4").prop("disabled", false);
                $("#obtained_marks4").prop("disabled", false);
                $("#acd_percentage4").prop("disabled", false);
            
            } else if ($(this).val() > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks4").val(''); 

                $("#maximum_mark4").val("");
                $("#obtained_marks4").val("");
                $("#acd_percentage4").val("");
                $("#maximum_mark4").prop("disabled", false);
                $("#obtained_marks4").prop("disabled", false);
                $("#acd_percentage4").prop("disabled", false);

            } else {

                $("#maximum_mark4").val("");
                $("#obtained_marks4").val("");
                $("#acd_percentage4").val("");

                //disable fields
                $("#maximum_mark4").prop( "disabled", true );
                $("#obtained_marks4").prop( "disabled", true );
                $("#acd_percentage4").prop( "disabled", true );

                //add required fields
                $('#cgpa_marks4').addClass('required');
                
                //remove required fields
                $('#maximum_mark4').removeClass('required');
                $('#obtained_marks4').removeClass('required');
                $('#acd_percentage4').removeClass('required');

                //$('maximum_mark4').attr('required', false); 

                $('#maximum_mark4').removeAttribute("required");
                $('#obtained_marks4').removeAttribute('required');
                $('#acd_percentage4').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark4").prop("disabled", false);
            $("#obtained_marks4").prop("disabled", false);
            $("#acd_percentage4").prop("disabled", false);

            //add required fields
            $('#cgpa_marks4').removeClass('required');
            
            //remove required fields
            $('#maximum_mark4').addClass('required');
            $('#obtained_marks4').addClass('required');
            $('#acd_percentage4').addClass('required');
        }
    });

    //$('#maximum_mark4').blur(function(){
    $(document).on('change','#maximum_mark4',function(){
        if ($(this).val()) {

            $("#cgpa_marks4").val("");

            //disable fields
            $("#cgpa_marks4").prop("disabled", true );
        
            //add required fields
            $('#maximum_mark4').addClass('required');
            $('#obtained_marks4').addClass('required');
            $('#acd_percentage4').addClass('required');

            //remove required fields
            $('#cgpa_marks4').removeClass('required');
            
        } else {

            $("#maximum_mark4").val("");
            $("#obtained_marks4").val("");
            $("#acd_percentage4").val("");

            //enable fields
            $("#cgpa_marks4").prop( "disabled", false );

            //add required fields
            $('#maximum_mark4').addClass('required');
            $('#obtained_marks4').addClass('required');
            $('#acd_percentage4').addClass('required');

            //remove required fields
            $('#cgpa_marks4').removeClass('required');
        }
    });

    //Row 5
    //$('#cgpa_marks5').blur(function(){
    $(document).on('change','#cgpa_marks5',function(){
        if ($(this).val()) {

            if ($(this).val() == 0 || $(this).val() == '.') {
                swal({text: "CGPA mark should not be 0 or only . (dot) value",});
                $("#cgpa_marks5").val(''); 

                $("#maximum_mark5").val("");
                $("#obtained_marks5").val("");
                $("#acd_percentage5").val("");
                $("#maximum_mark5").prop("disabled", false);
                $("#obtained_marks5").prop("disabled", false);
                $("#acd_percentage5").prop("disabled", false);
            
            } else if ($(this).val() > 10) {
                swal({text: "CGPA mark should not be greater than 10",});
                $("#cgpa_marks5").val(''); 

                $("#maximum_mark5").val("");
                $("#obtained_marks5").val("");
                $("#acd_percentage5").val("");
                $("#maximum_mark5").prop("disabled", false);
                $("#obtained_marks5").prop("disabled", false);
                $("#acd_percentage5").prop("disabled", false);

            } else {

                $("#maximum_mark5").val("");
                $("#obtained_marks5").val("");
                $("#acd_percentage5").val("");

                //disable fields
                $("#maximum_mark5").prop( "disabled", true );
                $("#obtained_marks5").prop( "disabled", true );
                $("#acd_percentage5").prop( "disabled", true );

                //add required fields
                $('#cgpa_marks5').addClass('required');
                
                //remove required fields
                $('#maximum_mark5').removeClass('required');
                $('#obtained_marks5').removeClass('required');
                $('#acd_percentage5').removeClass('required');

                //$('maximum_mark5').attr('required', false); 

                $('#maximum_mark5').removeAttribute("required");
                $('#obtained_marks5').removeAttribute('required');
                $('#acd_percentage5').removeAttribute('required');
            }

        } else {

            //enable fields
            $("#maximum_mark5").prop("disabled", false);
            $("#obtained_marks5").prop("disabled", false);
            $("#acd_percentage5").prop("disabled", false);

            //add required fields
            $('#cgpa_marks5').removeClass('required');
            
            //remove required fields
            $('#maximum_mark5').addClass('required');
            $('#obtained_marks5').addClass('required');
            $('#acd_percentage5').addClass('required');
        }
    });

    //$('#maximum_mark5').blur(function(){
    $(document).on('change','#maximum_mark5',function(){
        if ($(this).val()) {

            $("#cgpa_marks5").val("");

            //disable fields
            $("#cgpa_marks5").prop("disabled", true );
        
            //add required fields
            $('#maximum_mark5').addClass('required');
            $('#obtained_marks5').addClass('required');
            $('#acd_percentage5').addClass('required');

            //remove required fields
            $('#cgpa_marks5').removeClass('required');
            
        } else {

            $("#maximum_mark5").val("");
            $("#obtained_marks5").val("");
            $("#acd_percentage5").val("");

            //enable fields
            $("#cgpa_marks5").prop( "disabled", false );

            //add required fields
            $('#maximum_mark5').addClass('required');
            $('#obtained_marks5').addClass('required');
            $('#acd_percentage5').addClass('required');

            //remove required fields
            $('#cgpa_marks5').removeClass('required');
        }
    });

});
/*END CGPA Validation*/

 

 

$(document).ready(function(){
    if ($('#email').val()=='') {

        $("#btnemail").prop( "disabled", true );

    } else {
        //$("#btnemail").prop( "disabled", false );
    }

});

$(document).ready(function(){
    $(document).on('input','#email',function(){
        if ($('#email').val()) {

            $("#btnemail").prop( "disabled", false );

        } else {
            
            $("#btnemail").prop( "disabled", true );
        
        }

    });

});

$(document).ready(function(){
    if ($('#mobile').val()=='') {

        $("#btnmobile").prop( "disabled", true );

    } else {
        //$("#btnmobile").prop( "disabled", false );
    }

});

$(document).ready(function(){
    $(document).on('input','#mobile',function(){
        if ($('#mobile').val()) {

            $("#btnmobile").prop( "disabled", false );

        } else {
            
            $("#btnmobile").prop( "disabled", true );
        
        }

    });

});

 
$(document).ready(function(){
    $(document).on('change','#course_1,#course_2,#course_3,#course_4',function(){
            $("#d_o_b").val('');
			$("#conf_d_o_b").val('');
			$("#ageason").html('');
			
			
    });
	
	

});


	


$(document).ready(function(){
    
    $('#mobile').on('change',function(){
		var num = $(this).val();
		
		var $regexname=/^[6-9]{1}[0-9]{9}$/;
		
		if(num.length == 10){ 
		
             if (!num.match($regexname)) {
              // there is a mismatch, hence show the error message	
                 swal({text: "This mobile number format is not recognized.",}); 
				 $(this).val('');
                 $("#btnmobile").prop( "disabled", true );
             }
           else{
                // else, do not display message
                //$('.emsg').addClass('hidden');
               }
			   
			   }
			   
         });
		 
	 
});





