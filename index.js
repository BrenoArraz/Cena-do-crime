const itensAtivos = document.querySelectorAll(".item")

itensAtivos.forEach(function (item){
  item.addEventListener("click", function(){

    item.classList.add("ativo")
   
  })
})

const itensFechados = document.querySelectorAll(".x")

itensFechados.forEach(function (x){
  item.addEventListener("click", function(){
    
    x.classList.add("inativo")
   
    
  })
})