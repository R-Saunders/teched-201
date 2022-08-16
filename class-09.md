# Class 09

## HTML Forms
Forms are important in web development as they allow us to capture and validate data.    
Some of the key things to keep in mind when desiging a form are the `label` and `legend` eleements to ensure the form is accessible.   
Lets discuss some form elements   
`form` is the container element for the form as a whole.   
`input` is used to capture data.   
`label` is used to label the inputs.    
`legend` is used to present a caption for the content of it's parent.    
`button` is used for submitting or progressing forms.    

## Learn JS
### Introduction To Events.
Events are simply interactions from the user with the webpage.   
When using the `addEventListener()` you need to pass in the type of event and the function you want to be executed.   
The event object is automatically passed to event handlers to provide extra features and information.   
The target property of the event object is always a reference to the element the event occurred upon and allows us to change things when an event occurs.   
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.    
With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.   
With capturing, the event is first captured by the outermost element and propagated to the inner elements.   
Capturing is also called "trickling", which helps remember the propagation order:   
> trickle down, bubble up
