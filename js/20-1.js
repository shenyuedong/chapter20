window.onload=function(){
    var topic=tab.getElementsByTagName("li");
    var content=document.getElementById("content");
    var div=content.getElementsByTagName("div");
    var len=topic.length;
    for(var i=0;i<len;i++){
        topic[i].index=i;
        topic[i].onmouseover=function(){
            for(i=0;i<len;i++){
                topic[i].className='';
                div[i].className='hide';
            }
            topic[this.index].className='act';
            div[this.index].className='';
        };
    }
};