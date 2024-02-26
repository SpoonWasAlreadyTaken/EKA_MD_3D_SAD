document.addEventListener("keydown", (event) => {
	if(event.keyCode === 87){
		forward = velocity;
	}
	if(event.keyCode === 83){
		backward = velocity;
	}
	if(event.keyCode === 68){
		right = velocity;
	}
	if(event.keyCode === 65){
		left = velocity;
	}
	if(event.keyCode === 32)
	{
		up = velocity;
	}
	if(event.keyCode === 16)
	{
		down = velocity;
	}
});

document.addEventListener("keyup", (event) => {
	if(event.keyCode === 87){
		forward = 0;
	}
	if(event.keyCode === 83){
		backward = 0;
	}
	if(event.keyCode === 68){
		right = 0;
	}
	if(event.keyCode === 65){
		left = 0;
	}
	if(event.keyCode === 32)
	{
		up = 0;
	}
	if(event.keyCode === 16)
	{
		down = 0;	
	}
});

	const element = document.getElementById("container");

	element.onclick = () => {
		document.body.requestPointerLock();
	}

	document.addEventListener("keydown", (event) => {
		if (event.keyCode === 27)
		{
			document.exitPointerLock();
		}
	});


    document.addEventListener("pointerlockchange", () => {
                
        if (locked == false)
        {
            locked = true;
        }
        else if (locked == true)
        {
            locked = false;
        }
		
        addEventListener("mousemove", (e) => {
                console.log("sandwich");
                onpointermove = (e) => {
                    if(locked) {
                        deltaX = e.movementX / 2;
                        deltaY = -(e.movementY / 2);
                    
                        mouseX += deltaX;
                        mouseY += deltaY;
                    }
                };
        });
      });



