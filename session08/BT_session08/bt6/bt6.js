"use strict";
function exportData(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach(item => {
            console.log(item);
        });
    }
}
exportData('Xin chào!');
exportData(['Xin', 'chào', 'ptit']);
