const scriptURL ='https://script.google.com/macros/s/AKfycby_R3UinIMTQFgu4cDRC_BSZ78xB7a_natxsIZV-UgBRUAdGSqiUG88vyYDadeCBU9D0Q/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('thanks')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = 'Thank You For Subscribing';
                setTimeout(function(){
                    msg.innerHTML = '';
                },5000)
                form.reset();
               
            })
            .catch(error => console.error('Error!', error.message))
        })