self.addEventListener("push", event => {
    let data = {};

    try {
        data = event.data ? event.data.json() : {};
    } catch {
        data = {
            title: "C.N. Message",
            body: event.data ? event.data.text() : "Nouveau message"
        };
    }

    const title = data.title || data.notification?.title || "C.N. Message";

    const options = {
        body: data.body || data.notification?.body || "Nouveau message",
        icon: "/C.N.Message/icon-192.png",
        badge: "/C.N.Message/icon-192.png"
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
