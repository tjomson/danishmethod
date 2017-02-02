var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
function validateEmail(email_value, form_id, fname)
{
  var def_value = document.getElementById("email").defaultValue;
  if(email_value == '' || email_value == def_value)
  {
    alert('Please Enter Email Address');
    return false;
  }
  else if(!email_value.match(emailExp))
  {
    alert('Please Enter Valid Email Address');
    return false;
  }

  processnow(email_value, form_id, fname);

  return false;
}

function processnow(semail, form_id, fname)
{
  /*show loader*/
  if($('#loading-sec').length)
  {
    $('#loading-sec').show();
  }

  var mt = setTimeout(function(){
    var email = semail;
    jQuery('#med_steve_form1_email').val(email);
    jQuery('#med_steve_form1').submit();
  },1000);

  var mt = setTimeout(function(){
    var email = semail;
    jQuery('#med_steve_form2_email').val(email);
    jQuery('#med_steve_form2').submit();
  },3000);

  var mt = setTimeout(function(){
    jQuery("#"+form_id).unbind('submit');
    document.getElementById(form_id).submit();
  },6000);

  return false;
}