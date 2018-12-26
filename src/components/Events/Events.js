import React from 'react';

// import './Events.css';

class Events extends React.Component {

    componentDidMount() {

        //DOM load event
        window.addEventListener("DOMContentLoaded",	() => {
            
            const cube = document.querySelector(".cube"),
                imageButtons = document.querySelector(".image-buttons");
            let cubeImageClass = cube.classList[1];

            //Add click event listener to image buttons container
            imageButtons.addEventListener("click", e => {
                
                //Get node type and class value of clicked element
                const targetNode = e.target.nodeName,
                    targetClass = e.target.className;

                //Check if image input has been clicked and isn't the currently shown image
                if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
                    
                    console.log(`Show Image: ${targetClass.charAt(11)}`);

                    //Replace previous cube image class with new class
                    cube.classList.replace(cubeImageClass, targetClass);

                    //Update cube image class variable with new class
                    cubeImageClass = targetClass;	
                    
                }
                
            });
            
        });

    }

    render () {

        return (

            <div className='center'>
                {/* <h1>3D Cube Image Gallery</h1> */}

                <div class="cube-container">
                    <div class="cube initial-position">
                        <img 
                            class="cube-face-image image-1" 
                            src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=300&h=300&fit=crop"
                        />
		
                        <img 
                            class="cube-face-image image-2" 
                            src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=300&h=300&fit=crop"
                        />
                        
                        <img 
                            class="cube-face-image image-3" 
                            src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=300&h=300&fit=crop"
                        />
                        
                        <img 
                            class="cube-face-image image-4" 
                            src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=300&h=300&fit=crop"
                        />
                        
                        <img 
                            class="cube-face-image image-5" 
                            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=300&fit=crop"
                        />
                        
                        <img 
                            class="cube-face-image image-6" 
                            src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=300&h=300&fit=crop"
                        />
                    
                    </div>
                </div>

                {/* <h2>Click the images below to rotate the cube</h2> */}
                <h3>Click to rotate</h3>
                <div class="image-buttons">

                    <input 
                        type="image" 
                        class="show-image-1" 
                        src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=100&h=100&fit=crop">
                    </input>

                    <input 
                        type="image" 
                        class="show-image-2" 
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=100&h=100&fit=crop">
                    </input>

                    <input 
                        type="image" 
                        class="show-image-3" 
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=100&h=100&fit=crop">
                    </input>

                    <input 
                        type="image" 
                        class="show-image-4" 
                        src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=100&h=100&fit=crop">
                    </input>

                    <input 
                        type="image" 
                        class="show-image-5" 
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=100&h=100&fit=crop">
                    </input>

                    <input 
                        type="image" 
                        class="show-image-6" 
                        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=100&h=100&fit=crop">
                    </input>
                
                </div>
            </div>

        );
    }
}

export default Events;