function createBubbles() {
    const bubbleCount = 20;
    const container = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.random() * 100 + 50;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `${Math.random() * 100}vh`;
        
        bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;
        bubble.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(bubble);
    }
}

createBubbles();