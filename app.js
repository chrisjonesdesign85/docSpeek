// Load the PDF file
const pdfUrl = 'test.pdf';
const loadingTask = pdfjsLib.getDocument(pdfUrl);

loadingTask.promise.then(function(pdf) {

  // Load the first page
  pdf.getPage(1).then(function(page) {

    // Get the text content of the page
    page.getTextContent().then(function(textContent) {
      
        // Extract the text from the content
      const textItems = textContent.items;
      let finalText = '';

      for (let i = 0; i < textItems.length; i++) {
        const item = textItems[i];
        finalText += item.str + ' ';
      }

      // Display the extracted text
      console.log(finalText);
      textArea.value = finalText;
    });
  });
});

let textArea = document.getElementById("text")

const speak = () => {
  let textFromPDF = textArea.value
  // Synthesise text
  let msg = new SpeechSynthesisUtterance(textFromPDF);
  window.speechSynthesis.speak(msg)
    
    console.log('click')
}


let resume = () => {
  window.speechSynthesis.resume()
  console.log("resume")
}

let pause = () => {
  window.speechSynthesis.pause()
  console.log("pause")
}

let cancel = () => {
  window.speechSynthesis.cancel()
  console.log("cancel")
}

let playBtn = document.querySelector('#play')
let resumeBtn = document.querySelector('#resume')
let pauseBtn = document.querySelector('#pause')
let cancelBtn = document.querySelector('#cancel')

playBtn.addEventListener("click", speak)
resumeBtn.addEventListener("click", resume)
pauseBtn.addEventListener("click", pause)
cancelBtn.addEventListener("click", cancel)

const pauseResume = setInterval(function() {
  window.speechSynthesis.pause()
  window.speechSynthesis.resume()
  console.log("test")
}, 5000)

