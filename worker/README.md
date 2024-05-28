# JavaScript Worker
javascript/asynchronous/workers/finished

## Other types of workers
The worker we just created was what's called a dedicated worker. This means it's used by a single script instance.

There are other types of workers, though:

Shared workers can be shared by several different scripts running in different windows.
Service workers act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of Progressive Web Apps.
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers

In this article we've introduced web workers, which enable a web application to offload tasks to a separate thread. The main thread and the worker don't directly share any variables, but communicate by sending messages, which are received by the other side as message events.

Workers can be an effective way to keep the main application responsive, although they can't access all the APIs that the main application can, and in particular can't access the DOM.

// In this article we've introduced web workers, which enable a web application to offload tasks to a separate thread. The main thread and the worker don't directly share any variables, but communicate by sending messages, which are received by the other side as message events.


## Sequencing animations

