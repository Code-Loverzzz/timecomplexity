function calculateTimeComplexity() {
    const code = document.getElementById('inputCode').value;
    const resultDiv = document.getElementById('result');

    // A simple and basic example to calculate time complexity based on the presence of loops
    let timeComplexity = 'O(1)'; // Default time complexity

    // Check for loops and nested loops
    const lines = code.split('\n');
    let maxDepth = 0;
    let currentDepth = 0;

    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('for') || line.startsWith('while')) {
            currentDepth++;
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        } else if (line === '}') {
            currentDepth--;
        }
    });

    // Determine time complexity based on the depth of loops
    if (maxDepth === 1) {
        timeComplexity = 'O(n)';
    } else if (maxDepth === 2) {
        timeComplexity = 'O(n^2)';
    } else if (maxDepth > 2) {
        timeComplexity = 'O(n^' + maxDepth + ')';
    }

    resultDiv.innerText = `Estimated Time Complexity: ${timeComplexity}`;
}
