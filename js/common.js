const isLimitedCheckbox = document.getElementById('is-limited')
const isLimitedNumInput = document.getElementById('is-limited-num-input')
const isLimitedAlerter = document.getElementById('is-limited-alerter')

isLimitedCheckbox.onchange = function () {
  if (isLimitedCheckbox.checked) {
    document.getElementById('is-limited-wrapper').style = "background-color: #fff;"
  } else {
    document.getElementById('is-limited-wrapper').style = "background-color: rgba(0, 0, 0, 0);"
  }
}

isLimitedNumInput.onchange = function () {
  if (isLimitedNumInput.value < 10) {
    isLimitedAlerter.innerHTML = '10자리 이상!'
  } else {
    isLimitedAlerter.innerHTML = '글자수 제한'
  }
}

var checkboxLabelers = document.getElementsByClassName('checkboxlabeler-input')

for (checkboxLabeler in checkboxLabelers) {
  checkboxLabeler.onchange = function () {
    if (checkboxLabeler.checked) {
    } else {
    }
  }
}

