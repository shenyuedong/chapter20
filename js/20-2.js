window.onload=function(){
    var ps=document.getElementsByTagName("p");
    var uls=document.getElementsByTagName("ul");
    for(var i=0,n=ps.length;i<n;i+=1){
        ps[i].id=i;
        ps[i].onclick=function(){
            if(uls[this.id].style.display!="block"){
                for(var j=0;j<n;j+=1){
                    uls[j].style.display="none";
                }
                uls[this.id].style.display="block";
            }else{
                uls[this.id].style.display="none";
            }
        }
    }
}