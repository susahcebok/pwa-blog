// apk.js

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#preview").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function drawImage() {

  var twibbon = new Image();
  var picture = new Image();
  var twibbon = document.getElementById('twibbon');
  var picture = document.getElementById('preview');
  var canvas = document.getElementById('bungferry');
  var context = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 1080;
  context.drawImage(picture, 0, 0, canvas.width, canvas.height);
  context.drawImage(twibbon, 0, 0, canvas.width, canvas.height);

  var hasil = canvas.toDataURL("image/png");
  document.getElementById('preview').src = hasil;

  console.log("Drew!");
//  alert("Klik Oke...");
  new jBox('Notice', {
  content: 'Twibbon berhasil dibuat.',
  color: 'blue'
  });

  $('#dpwload').css('display', 'none');
  $('#dpwload2').css('display', 'inline-block');
  $('#dpwload2').attr('href', hasil);
}

 $("#actual-btn").change(function() {
  readURL(this);
 });

const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
