onload = () => {
    const c = setTimeout(() => {
      document.getElementById("clickableDiv").addEventListener("click", function() {
        window.open("https://open.spotify.com/track/6IiAEnXYsSD5De5M502OBa?si=6c0c2e2bb7b24fef", "_blank", "noopener,noreferrer");
      }); 
      document.getElementById("clickableDiv2").addEventListener("click", function() {
        window.open("https://open.spotify.com/track/2A7GGXmTlXuH9LOvBXgOX4?si=9420139a1f054ae7", "_blank", "noopener,noreferrer");
      });
      document.getElementById("clickableDiv3").addEventListener("click", function() {
        window.open("https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1?si=2986924be22f42b6", "_blank", "noopener,noreferrer");
      });       
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };