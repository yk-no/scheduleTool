'use strict';

function addForm() {
  var inputData = document.createElement('input');
  inputData.type = 'time';
  var parent = document.getElementById('form');
  parent.appendChild(inputData);
  var inputData2 = document.createElement('input');
  inputData2.type = 'text';
  inputData2.placeholder = '予定を入力';
  inputData2.size = '50';
  var parent = document.getElementById('form');
  parent.appendChild(inputData2);
  var inputData3 = document.createElement('br');
  var parent = document.getElementById('form');
  parent.appendChild(inputData3);
}
