function input(a) {
    document.getElementById("calc").value+=a
}
function result()
{
    let b =document.getElementById("calc").value
    document.getElementById("calc").value=eval(b)
}
function C ()
{
    document.getElementById("calc").value=''
}


