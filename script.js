// let speech = new SpeechSynthesisUtterance();
//     let voices=["ta-IN"];
// let voiceSelect=document.querySelector("select");
// window.speechSynthesis.onvoiceschanged=()=>{
//     voices=window.speechSynthesis.getVoices();
//     speech.text=voices[0];
//     voices.forEach((voice,i)=> (voiceSelect.options[i]=new Option(voice. name,i)));       
// };
// voiceSelect.addEventListener("change",()=>{
//     speech.voice=voices[voiceSelect.value];
// })
// document.querySelector("button").addEventListener("click",()=>{
//     speech.text=document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });
const textToSpeakInput = document.getElementById('textToSpeak');
const speakButton = document.getElementById('speakButton');
    const languageSelect = document.getElementById('languageSelect');

    // Function to initialize the SpeechSynthesisUtterance object and speak the text
    function speakText() {
      const text = textToSpeakInput.value;
      const selectedLanguage = languageSelect.value;

      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = selectedLanguage;

        // Retrieve the available voices (optional)
        speechSynthesis.onvoiceschanged = function() {
          const voices = speechSynthesis.getVoices();
         
        };

        // Speak the text
        speechSynthesis.speak(speech);
      } else {
        console.error('Speech synthesis is not supported in this browser.');
      }
    }

    // Event listener for the "Speak" button
    speakButton.addEventListener('click', speakText);
