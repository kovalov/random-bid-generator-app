import json from "../data.json";

const generator = (() => {
  const form = document.querySelector("[data-form]");
  const copyButton = document.querySelector('[data-button="copy"]');
  const submitButton = document.querySelector('[data-button="submit"]');
  const textareaElement = document.querySelector("[data-textarea]");

  const toggleButtonText = () => {
    copyButton.textContent = "Copied";
    const copyButtonTimeout = setTimeout(() => {
      copyButton.textContent = "Copy";
      clearTimeout(copyButtonTimeout);
    }, 1500);
  };

  const copyToClipboard = () => {
    const copyText = textareaElement.value;
    navigator.clipboard.writeText(copyText);
    toggleButtonText();
  };

  const getRandomNumber = (array) => Math.floor(Math.random() * array.length);

  const getPhrases = (framework) => {
    const selected = json.technology.frontend[framework];
    const { header, main, footer } = selected;

    return {
      greeting: json.greeting[0],
      header: header[getRandomNumber(header)],
      main: main[getRandomNumber(main)],
      footer: footer[getRandomNumber(footer)],
    };
  };

  const getText = (phrases) => {
    const { greeting, header, main, footer } = phrases;
    const newLine = "\n\n";

    const text = `${greeting}${newLine}${header}${newLine}${main}${newLine}${footer}`;
    textareaElement.value = text;
  };

  const handleEvents = () => {
    form.addEventListener("change", (event) => {
      event.preventDefault();

      if (event.target.value) {
        textareaElement.value = "";
        const framework = event.target.value;
        const phrases = getPhrases(framework);
        getText(phrases);
      }
    });

    copyButton.addEventListener("click", copyToClipboard);

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (form.select.value) {
        textareaElement.value = "";
        const framework = form.select.value;
        const phrases = getPhrases(framework);
        getText(phrases);
      }
    });
  };

  const init = () => {
    handleEvents();
  };

  return { init };
})();

export default generator;
