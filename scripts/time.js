     // create a function to update the date and time
     function updateDateTime() {
        // create a new `Date` object
        const now = new Date();

        // get the current date and time as a string
        const currentDateTime = now.toLocaleString();

        // update the `textContent` property of the `span` element with the `id` of `datetime`
        document.querySelector('#datetime').textContent = currentDateTime;
      }
       // this little fucker took me 2 hours to debug so please god say I dont have to debug more. Note it took an entire fucking day to get this to work because autocorrect kept fucking with the code 
      // call the `updateDateTime` function every second

      // who cares that this isnt efficient the website has to ship on time.
      setInterval(updateDateTime, 1000);
     