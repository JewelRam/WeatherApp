 class Test {
            constructor() {
                this.testResults = document.getElementsByClassName('test-results');
            }

            async run() {
                console.log(new Date().toISOString(), '[Test]', 'Running the test');

                // TODO: Make the API call and handle the results
            }

            setError(message) {
                // TODO: Format the error
                this.testResults.innerHTML = (message || '').toString();
            }

            setResults(results) {
                // TODO: Format the results
                this.testResults.innerHTML = (results || '').toString();
            }
        }

           function addButtonForTest(context, test) {
            let testButton = document.createElement('button');

            testButton.type = 'button';
            testButton.innerText = 'Get the Nashville Weather';
            testButton.onclick = () => test.run();

            context.appendChild(testButton);

            return testButton;
        }

        // Create the Test and add a button to the UI for running the test
        const test = new Test();
        const buttonContainer = document.getElementsByClassName('button-container')[0];

        addButtonForTest(buttonContainer, test);