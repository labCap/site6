var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'diagonal', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#3f7dff', '#ffc0cb'],
                ['#ff6ff2', '#001bff'],
                ['#3b46a6', '#bb1aad'],
                ['#87d6f4', '#e8009d'],
                ['#9d87f4', '#61045F']
                
            ]
        }
    }
});
