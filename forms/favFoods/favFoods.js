
let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]
favFoods.onshow=function(){
              lstgFood.clear()
            for (i = 0; i <= goodFoods.length - 1; i++)
                lstgFood.addItem(goodFoods[i])

}

lstgFood.onclick=function(){
  lblFood.value = `You picked ${goodFoods[lstgFood.value]}- that's a great choice!`
}

Button1.onclick=function(){
  ChangeForm(dessertVoting)
}
