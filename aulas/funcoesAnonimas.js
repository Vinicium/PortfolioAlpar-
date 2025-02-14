const msg = function ( ){

console.log("funcao anonima")

console.log(new Date().toLocaleString())

}

msg()


setInterval(msg, 1000)

setInterval(function(){
    console.log("funcao anonima")
}, 1000);

setInterval(()=>{
    console.log("funcao arrow")
}, 5000);

const teste1 = function()
{
    return "ola"
}

const teste2 = () =>
{
    return "olaaa"
}

console.log(teste1())
console.log(teste2())


