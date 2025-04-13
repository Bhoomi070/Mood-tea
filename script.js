const teas = {
    stressed: {
      name: "Chamomile Tea",
      image: "https://images.unsplash.com/photo-1602603412313-ab713536e288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hhbW9taWxlJTIwVGVhfGVufDB8fDB8fHww",
      message: "Breathe in calm, sip out stress. You got this. 💆‍♀️"
    },
    sleepy: {
      name: "Lavender Tea",
      image: "https://plus.unsplash.com/premium_photo-1695925077080-dbfc7441a64b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExhdmVuZGVyJTIwVGVhfGVufDB8fDB8fHww",
      message: "A dreamy sip for your dreamy soul. Time to relax. 🌙"
    },
    happy: {
      name: "Jasmine Tea",
      image: "https://images.unsplash.com/photo-1707336666897-fcbfef7bdf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SmFzbWluZSUyMFRlYSUyMnxlbnwwfHwwfHx8MA%3D%3D",
      message: "Let your joy bloom like this floral tea. 🌼"
    },
    sad: {
      name: "Rose Tea",
      image: "https://images.unsplash.com/photo-1561240541-cb5a26c7a071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Um9zZSUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D",
      message: "Gentle and soft, like your heart. Sending hugs. 🌹"
    }
  };
  
  function showTea(mood) {
    const tea = teas[mood];
    document.getElementById("teaImage").src = tea.image;
    document.getElementById("teaImage").style.display = "block";
    document.getElementById("teaName").textContent = tea.name;
    document.getElementById("teaMessage").textContent = tea.message;
  }
  