function log() {
  var el = document.createElement('div');
  el.innerHTML = Array.prototype.join.call(arguments, '<br />');
  document.getElementById('js-log').appendChild(el);
}