function resizeFn(){

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

function resizeBoxFn(){
  $('.fix_line_top').css({
    left : '50%',
    marginLeft : function(){
        var courseBtn = $(this).css('width');
        return -parseInt(courseBtn)/2 + 'px';
    },
    top :  '28px'
  });
  // $('.fix_line_bottom').css({
  //   left : '50%',
  //   marginLeft : function(){
  //       var courseBtn = $(this).css('width');
  //       return -parseInt(courseBtn)/2 + 'px';
  //   },
  //   top :  function(){
  //       var courseBtn = $('#fixed_box').css('height');
  //       return parseInt(courseBtn) + 'px';
  //   }
  // });
  $('.fix_list_box .box_left').css({
      width : function(){
          var lineWidth = $('.fix_list_box').css('width');
          return parseInt(lineWidth)/2 + 1 + 'px';
      }
  });
  $('.fix_list_box .box_right').css({
      width : function(){
          var lineWidth = $('.fix_list_box').css('width');
          return parseInt(lineWidth)/2 + 'px';
      },
      marginLeft : function(){
          var lineWidth = $('.fix_list_box').css('width');
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
resizeBoxFn()

/*detail_box 기본*/
function detailBox(){
  $('.on').css({
      display:'none'
  }).next('.detail').css({
      display:'block'
  })
}

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
  resizeBoxFn();
});
/*click*/
$(function(){
    $('.btn_view').click(function(){
        $('.container_bottom').css({
            display : 'block'
        })
        resizeFn();
        detailBox();
    })

    $('.btn_new').click(function(){
        $(this).parents('.old').css({
            display : 'none'
        }).next('.new').css({
            display : 'block'
        })
        resizeFn();
        detailBox();
    });
    $('.btn_old').click(function(){
        $(this).parents('.new').css({
            display : 'none'
        }).prev('.old').css({
            display : 'block'
        })
        resizeFn();
        detailBox();
    })
})


/*Main button click*/
$(function(){

    $('.course_list .list_title').click(function(){
        $('.on').removeClass('on').css({
            display:'block'
        }).next('.detail').css({
            display:'none'
        });
        $(this).addClass('on').css({
            display:'none'
        }).next('.detail').css({
            display:'block'
        })


    })
})


/* courseView fixed_left_btn*/
$(function(){
    $('.left_btn button').click(function(){
        $('.fix_list').toggle();
        resizeBoxFn();
    })
})

/* courseView fixed_right_btn*/
$(function(){
    $('.left_btn button').click(function(){
        $('.fix_list').toggle();
        resizeBoxFn();
    })
})
