var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
 selExercises.clear()   
for (i = 0; i <= exercises.length - 1; i++)
                selExercises.addItem(exercises[i])

}

selExercises.onfocusout=function(){

}



btnMobile.onclick=function(){
  ChangeForm(mobileNav)
}

btnGo.onclick=function(){
 lblExercise.value = `You chose ${selExercises.value}.`
}
