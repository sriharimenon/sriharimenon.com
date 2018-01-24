function main() {
    $('.fadesec').hide();
    $('.fadesec').fadeIn(2000);

    
    $('.courses').hide();
    $('.course-button').on('click',function(){$(this).toggleClass('active');
                                              //$(this).next().toggle();
                                              $(this).next().slideToggle(400);
  										      $(this).text('MORE COURSES');});
    //menu animated scroll buttons 
    $("#aboutmebutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#aboutme").offset().top}, 2000);
                                        }
                             );
    $("#educationbutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#education").offset().top}, 2000);
                                        }
                             );
    $("#skillsbutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#skills").offset().top}, 2000);
                                        }
                             );
    $("#experiencebutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#experience").offset().top}, 2000);
                                        }
                             );
    $("#projectsbutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#projects").offset().top}, 2000);
                                        }
                             );
    $("#publicationsbutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#publications").offset().top}, 2000);
                                        }
                             );
    $("#contactmebutton").click(function(){$('html, body').animate({
                                         scrollTop: $("#contactme").offset().top}, 2000);
                                        }
                             );
}
$(document).ready(main);