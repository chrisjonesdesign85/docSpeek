let textArea = document.getElementById("text")

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

const speechFu = () => {

  // Check if the browser supports the SpeechSynthesis API
if ('speechSynthesis' in window) {

  // Create a new SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance();

  // Find the paragraph to be read out
  const paragraph = document.querySelector('#text');

  // Set the text to be spoken
  utterance.text = paragraph.textContent;

  // Choose a voice for the speech synthesis
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[0];

  // Speak the text
  window.speechSynthesis.speak(utterance);
}
    
        // //speech synthesis supported
        // const utterance = new SpeechSynthesisUtterance()
    
        // let textFromPDF = textArea.value
        // utterance.text = textFromPDF
        // const voices = window.speechSynthesis.getVoices();
        // utterance.voice = voices[0];
    
        // //speak the text
        // window.speechSynthesis.speak(utterance)
    
    console.log('click')
}

let btn = document.querySelector('#play')
btn.addEventListener("click", speechFu)

let textFromPDF = textArea.value
// Synthesise text
let msg = new SpeechSynthesisUtterance();
msg.text = textFromPDF;
window.speechSynthesis.speak(msg)
