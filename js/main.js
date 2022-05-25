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
                ['#AA076B', '#61045F'],
                ['#ff6ff2', '#001bff']
            ]
        }
    }
});
