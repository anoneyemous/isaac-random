function abchar(source) {
  checkboxes = document.getElementsByName("nc");
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

function repchar(source) {
  checkboxes = document.getElementsByName("tc");
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

function abboss(source) {
  checkboxes = document.getElementsByName("ab");
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

function repboss(source) {
  checkboxes = document.getElementsByName("rb");
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}
