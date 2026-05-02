// Responsive design injection and encoding fixes
(function() {
    // Ensure charset meta is the first element in head
    if (!document.querySelector('meta[charset]') && !document.querySelector('meta[http-equiv="Content-Type"]')) {
        var charsetMeta = document.createElement('meta');
        charsetMeta.setAttribute('charset', 'utf-8');
        if (document.head.firstChild) {
            document.head.insertBefore(charsetMeta, document.head.firstChild);
        } else {
            document.head.appendChild(charsetMeta);
        }
    }
    
    // Create and inject viewport meta tag if it doesn't exist
    if (!document.querySelector('meta[name="viewport"]')) {
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(meta);
    }
    
    // Create and inject responsive styles if not already present
    if (!document.querySelector('style[data-responsive="true"]')) {
        var style = document.createElement('style');
        style.setAttribute('data-responsive', 'true');
        style.textContent = '*,*::before,*::after{max-width:100%;box-sizing:border-box}body{overflow-x:hidden;margin:0;padding:0 8px}';
        document.head.appendChild(style);
    }
    
    // IAST character encoding fix
    window.addEventListener('DOMContentLoaded', function() {
        // Only process if page contains encoding issues
        if (document.body.innerHTML.indexOf('�') !== -1) {
            // Force correct interpretation of common IAST characters
            var walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );
            
            var node;
            var fixedCount = 0;
            
            while (node = walker.nextNode()) {
                if (node.nodeValue.indexOf('�') !== -1) {
                    // This is a simplistic fix - for production, you'd need proper encoding conversion
                    // The real solution is ensuring all files are saved as UTF-8
                    console.log('Encoding issue found in:', node.parentNode.tagName);
                    fixedCount++;
                }
            }
            
            if (fixedCount > 0) {
                console.warn('Found ' + fixedCount + ' text nodes with encoding issues. Consider re-saving files as UTF-8.');
            }
        }
    });
})();

// Right-click protection (modernized)
/*
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Sorry! This function is disabled in my site..");
    return false;
});*/

