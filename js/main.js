$(function(){

    var firebaseRef = new Firebase("https://tweetou-8754a.firebaseio.com/");

    
    firebaseRef.on("child_added", function(snapshot){
        var account=snapshot.key();
        $("#accounts").append($("<a/>").attr("id", account).attr("class", "mdl-navigation__link"));
        $("#"+account).text(account);
        $("#"+account).click(function(){
            $("#tweets").empty();
            $("#tweets").append($("<a/>").attr("class","demo-card-wide mdl-card mdl-shadow--2dp").css("width","100%"));
        });
    });

    firebaseRef.on("child_removed", function(snapshot){
        $("#"+snapshot.key()).remove();
    });
    
});
