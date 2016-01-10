(function($) {

    var isStreaming = false,
        user = "hemstreet";

    $.ajax({
        url: "https://www.livecoding.tv/api/livestreams/onair/?format=json",
        type: "GET",
        headers: {
            "Authorization": "Bearer {{AuthTokenHere}}"
        },
        success: function(data) {
            $.each(data.results, function(index, value) {
                if(value.user__slug == user) {
                    isStreaming = true;
                }
            });

            if(isStreaming) {
                $('.streamingUser').css('display', 'block');
            }
        },
        failure: function(err) {
            console.log('Error', err);
        }
    });

})(jQuery);