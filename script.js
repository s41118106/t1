function adjustText() {
    document.getElementById('student-id').style.fontSize = '24px';
    document.getElementById('student-name').style.fontSize = '18px';
    document.getElementById('student-id').style.color = 'blue';
    document.getElementById('student-name').style.color = 'blue';
  }

  function adjustImage() {
    document.getElementById('profile-pic').style.border = '5px solid red';
    document.getElementById('profile-pic').style.borderRadius = '50%';
  }

  function changeImage() {
    document.getElementById('profile-pic').src = 'IMG_20231225_152026.jpg';
  }

  function openAnswer(file) {
    window.open(file, '_blank');
  }