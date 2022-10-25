function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    ml5.soundClassifier("model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, result){

}