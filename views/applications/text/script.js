function saveText() {
    var textToSave = document.getElementById("editor").value;
    var blob = new Blob([textToSave], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "texte.txt");
}

function loadFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var contents = event.target.result;
        document.getElementById("editor").value = contents;
    };
    reader.readAsText(file);
}
