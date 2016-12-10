// To make arrow keys go to next and prev chapters
    $(document).ready(function() {
            document.onkeydown = function() 
                {
                    var j = event.keyIdentifier
                    if (j == "Right")
                        window.location = nextUrl
                    else if (j == "Left")
                        window.location = prevUrl            
                        }
                   });

      $(document).ready(function() {
                    var nextPage = $("#next-page")
                    var prevPage = $("#prev-page")
                    nextUrl = nextPage.attr("href")
                    prevUrl = prevPage.attr("href")
                });