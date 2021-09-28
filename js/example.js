
setInterval(
  function () {
    const exampleName = exampleNames[Math.floor(Math.random() * exampleNames.length)]
    const exampleLocation = exampleLocations[Math.floor(Math.random() * exampleLocations.length)]

    document.getElementById('example-location').innerHTML = exampleLocation
    document.getElementById('example-name').innerHTML = exampleName
    
    generate(exampleName, exampleLocation, 'example-result')      
  }, 4000)