window.onload=()=>{
    let sec = 0
    setInterval(function(){
        sec+=add1()
        if(sec==10){
            sec=0
        };
    },1000);
    function add1(){
        document.getElementById('intervalTimer').innerHTML=sec
        console.log(sec)
        return 1;
    }
}
