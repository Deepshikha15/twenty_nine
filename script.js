$(document).ready(function(){
    var pending=0;
    var completed=0;
    
    function count(){
        var total= $('input.n_chk').length;
        completed= $('input:checkbox:checked').length;
        pending= total-completed;
        display();    
    }
    
    function display(){
        $('#st_1').html(pending);
        $('#st_2').html(completed);
    }
    
    
    $('body').on('click','#add',function(){
        var new_text=$("#txt").val();
       $('<li class="new_list" >'+ new_text +'<input type="checkbox" class="n_chk">' +'</li>').appendTo(".or");
        $("#txt").val(null);
        count();
    });
    
     $('body').on('change','.n_chk',function(){
         count();
         $(".new_list").css('background','  #abebc6  ');
     });
    
    $('body').on('click','.new_list',function(){
        $('.new_list').hide();
        $('.or').append('<input type="text" class="in"><button class="bt" value="Edit" >Save</button>');
        /*$('<li class="new_list" >'+ new_text +'<input type="checkbox" class="n_chk">' +'</li>').appendTo(".or");*/
       /* $(this).html(ed);*/
       /*var msg= $('.new_list').Attr('readonly',true);*/
        /*alert();*/
    });
    
    $('body').on('click','.bt',function(){
       /* var sec_text=$(".in").val();
        $(this).html(sec_text);*/
       
        
        
        $(".new_list").html($(".in").val()); 
        $(".new_list").show();
        $('.bt').hide();
        $('.in').hide();
        
        
        /*$('#in').*/
        /*$('#id').show();*/
        
        /* if ($this.hasClass(".new_list")) {
        // already been clicked once, hide it
        $this.hide();
        }
        else {
        // first time this is clicked, mark it
        $this.addClass(".new_list");
    }*/
    });
    
    
    
    
    
    
    
    
    
/*$('body').on('change','#txt',function(){
$('#txt').click(function () {
    $('tr td:nth-child(3)').each(function () {
        var html = $(this).html();
        var input = $('<input type="text" />');
        input.val(html);
        $(this).html(input);
    });
});*/


    
   /* $('#edit').click(function(){
    $('#text').removeAttr('readonly');
        });*/
    
       /* var x=$('#st_1').val();
            x=x+1;
            $('#st_1').(x);
        */
        
        /*$(list_of).click(function(){
           
      $(".order").addClass("#op");*/
        
       
    
    
    /*$("body").on('click','#add',function(){*/
        
        
    
    
});
    