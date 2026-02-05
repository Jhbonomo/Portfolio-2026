// Simple component loader for HTML includes
document.addEventListener('DOMContentLoaded', function() {
    const componentElements = document.querySelectorAll('[data-component]');
    
    componentElements.forEach(async (element) => {
        const componentPath = element.getAttribute('data-component');
        
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath}`);
            }
            
            const html = await response.text();
            element.innerHTML = html;
            
            // Trigger any initialization scripts after component load
            const event = new CustomEvent('componentLoaded', { 
                detail: { path: componentPath, element: element }
            });
            document.dispatchEvent(event);
        } catch (error) {
            console.error('Error loading component:', error);
            element.innerHTML = `<p style="color: red;">Failed to load component: ${componentPath}</p>`;
        }
    });
});
