function resizeFn(){

  console.log($('#standardWidth').width());
  $('.line_top').css({
    left : '50%',
    marginLeft : function(){
        var courseBtn = $(this).css('width');
        return -parseInt(courseBtn)/2 + 'px';
    },
    top :  function(){
        var courseBtn = $(this).css('height');
        return -parseInt(courseBtn)/2 + 'px';
    },
  });
  $('.line_bottom').css({
    left : '50%',
    marginLeft : function(){
        var courseBtn = $(this).css('width');
        return -parseInt(courseBtn)/2 + 'px';
    },
    top :  function(){
        var courseBtn = $(this).prev('.course_list').css('height');
        return parseInt(courseBtn) -15 + 'px';
    }
  });


  $('.box_left').css({
      width : function(){
          var lineWidth = $('#standardWidth').css('width');
          return parseInt(lineWidth)/2 + 1 + 'px';
      }
  });
  $('.box_right').css({
      width : function(){
          var lineWidth = $('#standardWidth').css('width');
          return parseInt(lineWidth)/2 + 'px';
      },
      marginLeft : function(){
          var lineWidth = $('#standardWidth').css('width');
          return parseInt(lineWidth)/2 + 'px';
      }
  });
  $('.circle').css({
      left :"50%",
      marginLeft : function(){
          var courseBtn = $(this).css('width');
          return -parseInt(courseBtn)/2 + 'px';
      }
  })
}
resizeFn();
//Gnb
$(function(){
    $('.gnb').click(function(){
        $('.gnb_list').css(
            'display','block'
        )
    })
    $('.gnb_close').click(function(){
      $('.gnb_list').css({
          display:'none'
      })
    })

})
// course_list
/*resize*/

$(window).resize(function(){
  resizeFn();
});
/*click*/
$(function(){
    $('.btn_view').click(function(){
        $('.container_bottom').css({
            display : 'block'
        })
        resizeFn();
    })

    $('.btn_new').click(function(){
        $(this).parents('.old').css({
            display : 'none'
        }).next('.new').css({
            display : 'block'
        })
        resizeFn();
    });
    $('.btn_old').click(function(){
        $(this).parents('.new').css({
            display : 'none'
        }).prev('.old').css({
            display : 'block'
        })
        resizeFn();
    })
})
