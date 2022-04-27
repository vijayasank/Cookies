// document.cookie="username=vijay"; 
// document.cookie ="userage=20"; 
// document.cookie ="usercolor=brown";
// document.cookie="usercount=1";

// console.log(document.cookie)
function check(){
    var a=document.cookie.split("; ");
    // console.log(a);
    for(i=0;i<a.length;i++){
        var b = a[i].split("=");
        // console.log(b);
        if(b[0]=="user"){
            // console.log(b[1]);
            return Number(b[1]);
        }
    }
}
function visitCount(){
    var a1=document.cookie.split("; ");
     const key = "usercolor";
    for(i=0;i<a1.length;i++){
        var b1 = a1[i].split("=");
       
        if(b1[0]==key){
            console.log(b1[1]);
            return (b1[1]);
        }
    // var c=check();
    // document.cookie="usercount="+(c+1);
    // console.log(document.cookie)
    // document.getElementById("output").innerHTML=c;
} 

}
visitCount()