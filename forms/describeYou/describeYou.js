let traits = ['optimistic', 'pessimistic', 'trusting', 'envious']

rdoPersonality.onclick=function(){
  lblPersonality.value = `I would agree that you are a ${traits[rdoPersonality.value]} person too!`
}

btnChange.onclick=function(){
  ChangeForm(favExercises)
}
