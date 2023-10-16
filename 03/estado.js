let estado=function(a){
    if(a == "sp" || a == "rj"){
        return "legal"
    }else{
        return "ilegal"
    }
}
 
module.exports = estado