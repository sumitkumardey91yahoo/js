$(document).ready(function() {

    var wrapper         = $(".formcreate"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var add_form        = $(".add_form");
 var i=0;
 var j;
    add_form.click(function(e){

    $(".formMaker").append("<div class='formcreate'><br/><hr><button class='add_field_button btn btn-primary' id="+ i +">createTextBox</button>&nbsp;&nbsp;&nbsp;<button class='btn btn-danger remove_form'>delete form</button><br/><div><input class='form-control id"+i++ +"' type='text' id='name' value='' placeholder='question name' name='mytext'></div><br/></div>");

    })

    $(".formMaker").on("click",".remove_field", function(e){
        $(this).parent().remove();

    })
    $(".formMaker").on("click",".remove_form", function(e){

    $(this).parent().remove();


    })


    $(".formMaker").on("click",".add_field_button", function(e){
      var id=this.id;

            $(this).parent().append('<div><input type="text" class="form-control id'+id+'" id="name"  value="" placeholder="options" name="mytext"/><a href="#" class="remove_field">Remove</a></div>');

    })
  //bind data
  $("#submit").bind("click", function () {

  var count=0;
  var outer= [];
      for(count=0;count< i;count++ )
      {

        var values = "";
        var inner_value=0;
        var arr = [];
        var asso =[];
        var checkValue=0;
        $(".id"+count).each(function () {
            values = $(this).val();

            arr[ inner_value ] = values;
            inner_value++;


        });

        asso.Qno=count+1;
        asso.name=arr[0];
        arr.shift();
        asso.option=arr;
        if(asso.name !== undefined)
     outer.push(asso);
    }
console.log(outer);

  });



});
