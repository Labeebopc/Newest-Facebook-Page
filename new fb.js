$(document).ready(function(){
    $("#name1").validate({
        rules:{
            emailAddress:{
                required:true,
                email:true,
                number:true  
            }
            }
    })
})
$(document).ready(function(){
    $("#name2").validate({
        rules:{
            passwrd:{
                required:true,
                minlength:8
            }
            }
    })
})