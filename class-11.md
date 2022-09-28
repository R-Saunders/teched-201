# Class 11

## Video and Audio Content

Since the early 2000's, video and audio content has changed on the web. Initially this was rendered with plugin's such as Flash Player or Silverlight. Both of these had security and accessibility issues and have since been deprecated. Now we use native HTML elements such as `<video>` and `<audio>`.   
The `src` attribute will allow you to chose the file you wish to play, the `controls` attribute will add basic browser defined controls.   
It's important to include some fallback content in case the browser used doesn't support the video/audio.   

## How does Grid layout differ from Flex?
Grid differs by working on a strict grid, it does not allow for the same type of native responsiveness as flex box but does allow for some more complex layouts with ease.

## Responsive Images

Making images responsive is important to ensure they work on different screen sizes as well as being able to be viewed clearly on smaller screens.   
The `srcset` and `sizes` attributes will allow you to display different images at different screen sizes, this allows for cropped images on mobile so they don't take up as much height and allow smaller files to be loaded.   
This is better than responsive images.   
