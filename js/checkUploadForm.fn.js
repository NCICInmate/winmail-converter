function checkUploadForm() {
  if (document.getElementById('userfile').value != "") {
    return true;
  }
  else {
    alert("You have not selected a file!");
    return false;
  }
}
