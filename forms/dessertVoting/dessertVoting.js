var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
for (i = 0; i <= dessertList.length - 1; i++)
                drpDesserts.addItem(dessertList[i])

}


btnChoose.onclick=function(){
   lblDessert.value = `You picked ${drpDesserts.item}- that's a great dessert!`
}

btnMe.onclick=function(){
  ChangeForm(describeYou)
}
