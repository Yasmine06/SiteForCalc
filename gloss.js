function show1(el1,el2)
{
    d1=document.getElementById(el1);
    d2=document.getElementById(el2);
    d1.style.display="block";
    d2.style.display="none";
}
function show2(el1,el2)
{
    d1=document.getElementById(el1);
    d2=document.getElementById(el2);
    d1.style.display="block";

    d2.style.display="none";
}
$("#o2").click(function()
{
    $("#o2").addClass('selected1');
  if ( $("#o1").hasClass('selected'))
  {
    $("#o1").removeClass('selected') ;
  }

})
$("#o1").click(function()
{
  
  $("#o1").addClass('selected');
  $("#o2").removeClass('selected1');
})

$("#op2").click(function()
{
    $("#op2").addClass('selected1');
  if ( $("#op1").hasClass('selected'))
  {
    $("#op1").removeClass('selected') ;
  }

})
$("#op1").click(function()
{
  
  $("#op1").addClass('selected');
  $("#op2").removeClass('selected1');
})