var movieleft=document.getElementById("movieleft");
var movieright=document.getElementById("movieright");
var movieajax=new XMLHttpRequest;
movieajax.open("get","php/movie.php",true);
movieajax.send(null);
movieajax.onreadystatechange=function(){
    if(movieajax.readyState===4&&movieajax.status===200){
        var moviedata=JSON.parse(movieajax.responseText);
        var moviestr="";
        for(var moviei=0;moviei<moviedata.length;moviei++){
            moviestr+=`<li>
            <div class="moviesection">
                <a href="html/detail.html">
                    <img class="movieimg" src="${moviedata[moviei].imgurl}">
                </a>
                    <div class="movietxt">
                        <p class="movienameTxt"><a href="html/detail.html">${moviedata[moviei].cont}</a><span class="movienameTxt_2D">2D</span></p>
                        <p class="moviepingfen">观众评分<em>${moviedata[moviei].pingfen}</em></p>
                        <p class="movieyanyuan"><a href="html/detail.html">${moviedata[moviei].yanyuan}</a></p>
                        <p class="movietime"><a href="html/detail.html">${moviedata[moviei].country}|${moviedata[moviei].time}</a></p>
                    </div>
                    <div class="goupiao"><a href="html/detail.html">购票</a></div>
            </div><li>
            `
        }
        movieleft.innerHTML=moviestr;
        movieright.innerHTML=moviestr;
    }
}