console.log('%c HI', 'color: firebrick')
async function getDoggo(event) {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const resJson = await res.json();
    document.getElementById("dog").src = resJson.message;
  }

  document.getElementById('get-doggo')
    .addEventListener('click', getDoggo)