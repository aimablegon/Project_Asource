

/* resize-function*/
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
    top :  '38px'
  });
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
/* End resize-function*/

/*detail_box 기본*/
function detailBox(){
  $('.on').css({
      display:'none'
  }).next('.detail').css({
      display:'block'
  })
}
/* End detail_box 기본*/


/*resize*/

$(window).resize(function(){
  resizeFn();
  resizeBoxFn();
});
/* End resize*/

/*Gnb*/
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

    //gnb_menu
    $('.menu_open').click(function(){
        $(this).css('display','none');
        $('.menu_close').css('display','block')
    })
    $('.menu_close').click(function(){
        $(this).css('display','none');
        $('.menu_open').css('display','block')
    })


    $('.menu_list_1 .menu_2').mouseenter(function(){
        $(this).css({
            'background':'rgb(130,130,130)',
            'color':'#FFF'
        });
        $('.menu_list_2').css('display','block');
        $('.menu_list_3').css('display','none');
    }).mouseleave(function(){
        $(this).css({
          'background':'#CCC',
          'color':'rgb(130,130,130)'
        });
    })
    $('.menu_list_1 .menu_3').mouseenter(function(){
        $(this).css({
            'background':'rgb(130,130,130)',
            'color':'#FFF'
        });
        $('.menu_list_3').css('display','block');
        $('.menu_list_2').css('display','none');
    }).mouseleave(function(){
        $(this).css({
          'background':'#CCC',
          'color':'rgb(130,130,130)'
        });
    })

    $('.menu_list_1 .menu_4').mouseenter(function(){
        $(this).css({
            'background':'rgb(130,130,130)',
            'color':'#FFF'
        });
        $('.menu_list_2').css('display','none');
        $('.menu_list_3').css('display','none');
    }).mouseleave(function(){
        $(this).css({
          'background':'#CCC',
          'color':'rgb(130,130,130)'
        });
        $('.menu_list_2').css('display','none');
        $('.menu_list_3').css('display','none');

    })
    $('.menu_list_2').mouseenter(function(){
        $('.menu_list_1 .menu_2').css({
            'background':'rgb(130,130,130)',
            'color':'#FFF'
        });
    }).mouseleave(function(){
        $('.menu_list_1 .menu_2').css({
          'background':'#CCC',
          'color':'rgb(130,130,130)'
        });
        $('.menu_list_2').css('display','none');
    })
    $('.menu_list_3').mouseenter(function(){
        $('.menu_list_1 .menu_3').css({
            'background':'rgb(130,130,130)',
            'color':'#FFF'
        });
    }).mouseleave(function(){
        $('.menu_list_1 .menu_3').css({
          'background':'#CCC',
          'color':'rgb(130,130,130)'
        });
        $('.menu_list_3').css('display','none');
    })
})
/* End Gnb*/
/*click*/
    //index_new,old button
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


    //Main button click
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


    // courseView.html fixed_left_btn
$(function(){
    $('.left_btn button').click(function(){
        $('.fix_list').toggle();
        resizeBoxFn();
    })


    // courseView.html fixed_right_btn
    $('.right_btn button').click(function(){
        var state = $('.fix_epil_qa').css('display');
        if(state == 'none'){
            $('.fix_epil_qa').show()
        }else{
            $('.fix_epil_qa').hide()
        }
    })
    $('.btn_epil').click(function(){
        $('.fix_epil').css({
            display:'block'
        });
        $('.fix_qa').css({
            display:'none'
        });
        $('.fix_myqa').css({
            display:'none'
        })
    })
    $('.btn_qa').click(function(){
        $('.fix_qa').css({
            display:'block'
        });
        $('.fix_epil').css({
            display:'none'
        });
        $('.fix_myqa').css({
            display:'none'
        })
    })
    $('.btn_myqa').click(function(){
        $('.fix_myqa').css({
            display:'block'
        });
        $('.fix_qa').css({
            display:'none'
        });
        $('.fix_epil').css({
            display:'none'
        })
    })
})


/* End Click*/

/* Popup */
$(function(){

    $('.btn_click').click(function(){

    })
})
/* End popup*/
