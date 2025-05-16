 const runBtn = document.getElementById('runBtn');
    const outputDiv = document.getElementById('output');
    const codeArea = document.getElementById('code');

    runBtn.addEventListener('click', () => {
     
      outputDiv.textContent = '';

      const originalLog = console.log;

      
      const logs = [];

      console.log = function(...args) {
        logs.push(args.join(' '));
      };

      try {
     
        const code = codeArea.value;

       
        new Function(code)();

        outputDiv.textContent = logs.join('\n');
      } catch (err) {
      
        outputDiv.textContent = 'Error: ' + err.message;
      }

      
      console.log = originalLog;
    });