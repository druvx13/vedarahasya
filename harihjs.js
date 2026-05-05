// VedaRahasya.Net - Site utilities

(function () {
    // Inject viewport meta tag if missing
    if (!document.querySelector('meta[name="viewport"]')) {
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(meta);
    }

    // Inject responsive base styles for legacy pages that lack styles.css
    if (!document.querySelector('link[href*="styles.css"]') &&
        !document.querySelector('style[data-responsive="true"]')) {
        var style = document.createElement('style');
        style.setAttribute('data-responsive', 'true');
        style.textContent =
            '*,*::before,*::after{box-sizing:border-box;max-width:100%}' +
            'body{overflow-x:hidden;margin:0;padding:0 8px;background:#fffde7}' +
            'img{max-width:100%;height:auto}table{max-width:100%}';
        document.head.appendChild(style);
    }
})();
