function main(){
    var canvas = document.getElementById("Canvas");
    var gl = canvas.getContext("webgl");

    var leftVertices = [
        

        /// Pengapus Depan
        // depan segitiga kiri
        -0.74, -0.3, 0, 0, 0,      //kiri bawah
        -0.75, -0.1,  0, 0, 0,   //kiri atas
        -0.4, -0.1,  0, 0, 0,   //kanan atas

        // depan segitiga kanan
        -0.74, -0.3, 0, 0, 0,      //kiri bawah
        -0.395, -0.3,  0, 0, 0,   //kanan bawah
        -0.4, -0.1,  0, 0, 0,   //kanan atas

        // depan segitiga samping kiri(bagian kanan)
        -0.74, -0.3, 0, 0, 0,      //kanan bawah
        -0.75, -0.1,  0, 0, 0,   //kanan atas
        -0.78, -0.14,  0, 0, 0,   //kiri atas

        // depan segitiga samping kiri(bagian kiri)
        -0.74, -0.3, 0, 0, 0,      //kanan bawah
        -0.77, -0.26,  0, 0, 0,   //kiri bawah
        -0.78, -0.14,  0, 0, 0,   //kiri atas

        // depan segitiga samping kanan(bagian kiri)
        -0.375, -0.14, 0, 0, 0,      //kanan atas
        -0.395, -0.3,  0, 0, 0,   //kiri bawah
        -0.4, -0.1,  0, 0, 0,   //kiri atas

        // depan segitiga samping kanan(bagian kanan)
        -0.375, -0.13, 0, 0, 0,      //kanan atas
        -0.395, -0.3,  0, 0, 0,   //kiri bawah
        -0.375, -0.27,  0, 0, 0,   //kanan bawah

        ///Penghapus Atas
        // depan segitiga atas kiri
        -0.745, 0.05, 0.1, 0.1, 0.1,      //kiri atas
        -0.75, -0.1,  0.1, 0.1, 0.1,   //kiri bawah
        -0.4, -0.1,  0.1, 0.1, 0.1,   //kanan bawah

        // depan segitiga atas kanan
        -0.745, 0.05, 0.1, 0.1, 0.1,      //kiri atas
        -0.4, 0.05,  0.1, 0.1, 0.1,   //kanan atas
        -0.4, -0.1,  0.1, 0.1, 0.1,   //kanan bawah

        ///Pembatas Atas Kiri
        //Segitiga kanan
        -0.745, 0.05, 0.1, 0.1, 0.1,      //kanan atas
        -0.75, -0.1,  0.1, 0.1, 0.1,   //kanan bawah
        -0.78, -0.14,  0.1, 0.1, 0.1,   //kiri bawah

        //Segitiga kiri
        -0.745, 0.05, 0.1, 0.1, 0.1,      //kanan atas
        -0.76, 0.03,  0.1, 0.1, 0.1,   //kiri atas
        -0.78, -0.14,  0.1, 0.1, 0.1,   //kiri bawah

        ///Pembatas Atas Kanan
        //Segitiga Kanan
        -0.375, -0.14, 0.1, 0.1, 0.1,      //kanan bawah
        -0.4, 0.05,  0.1, 0.1, 0.1,   //kiri atas
        -0.4, -0.1,  0.1, 0.1, 0.1,   //kiri bawah

        //Segitiga Kiri
        -0.375, -0.14, 0.1, 0.1, 0.1,      //kanan bawah
        -0.4, 0.05,  0.1, 0.1, 0.1,   //kiri atas
        -0.39, 0.03,  0.1, 0.1, 0.1,   //kanan atas

        //Tepi atas
        -0.745, 0.05, 0.708, 0.68, 0.641,      //kiri bawah
        -0.39, 0.05,  0.708, 0.68, 0.641,  //kanan bawah
        -0.39, 0.057,  0.708, 0.68, 0.641,   //kanan atas

        -0.745, 0.05, 0.708, 0.68, 0.641,      //kiri bawah
        -0.745, 0.057,  0.708, 0.68, 0.641,  //kiri atas
        -0.39, 0.057,  0.708, 0.68, 0.641,   //kanan atas
        
        ///Pembatas Sarung Kiri
        //Segitiga Kiri
        -0.735, 0.05, 0.482, 0.482, 0.475,      //kanan bawah
        -0.766, 0.017,  0.482, 0.482, 0.475,   //kiri bawah
        -0.70, 0.33,  0.482, 0.482, 0.475,   //kanan atas

        //Segitiga Kanan
        -0.72, 0.32, 0.482, 0.482, 0.475,      //kiri atas
        -0.766, 0.017,  0.482, 0.482, 0.475,   //kiri bawah
        -0.70, 0.33,  0.482, 0.482, 0.475,   //kanan atas   
        
        ///Pembatas Sarung Kanan
        //Segitiga Kiri
        -0.43, 0.33, 0.482, 0.482, 0.475,      //kiri atas
        -0.41, 0.05,  0.482, 0.482, 0.475,   //kiri bawah
        -0.385, 0.02,  0.482, 0.482, 0.475,   //kanan bawah

        //Segitiga Kanan
        -0.43, 0.33, 0.482, 0.482, 0.475,      //kiri atas
        -0.41, 0.32,  0.482, 0.482, 0.475,   //kanan atas
        -0.385, 0.02,  0.482, 0.482, 0.475,   //kanan bawah

        ///Sarung Atas
        //Segitika Kiri
        -0.70, 0.33, 0.608, 0.58, 0.541,      //kiri atas
        -0.736, 0.057,  0.608, 0.58, 0.541,  //kiri bawah
        -0.41, 0.057,  0.608, 0.58, 0.541,   //kanan bawah

        //Segitika Kanan
        -0.70, 0.33, 0.608, 0.58, 0.541,      //kiri atas
        -0.43, 0.33,  0.608, 0.58, 0.541,  //kanan atas
        -0.41, 0.057,  0.608, 0.58, 0.541   //kanan bawah

        
    ];

    var rightVertices = [
        ///Penghapus Depan Atas
        // segitiga kiri
        0.03, 0.0, 0.1, 0.1, 0.1,      //kiri bawah
        0.04, 0.29,  0.1, 0.1, 0.1,   //kiri atas
        0.29, 0.3,  0.1, 0.1, 0.1,   //kanan atas

        //segitita kanan
        0.03, 0, 0.1, 0.1, 0.1,     //kiri bawah
        0.27, 0, 0.1, 0.1, 0.1,       //kanan bawah
        0.29, 0.3, 0.1, 0.1, 0.1,    //kanan atas

         //Sarung segitiga kiri 
         0.265, 0.325, 0.608, 0.58, 0.541,  //kiri atas      
         0.27, 0, 0.608, 0.58, 0.541,      //kiri bawah
         0.6, 0, 0.608, 0.58, 0.541,    //kanan bawah

        // Sarung segitiga tengah
        0.26, 0.325, 0.608, 0.58, 0.541,     //kiri atas
         0.95, 0.345, 0.608, 0.58, 0.541,    //kanan atas
         0.6, 0, 0.608, 0.58, 0.541,      // tengah bawah

        // Sarung  segitiga kanan
         0.97, 0, 0.608, 0.58, 0.541,         //kanan bawah
         0.95, 0.345, 0.608, 0.58, 0.541,      //kanan atas
         0.6, 0, 0.608, 0.58, 0.541,           //kiri bawah

        //sarung bagian bawah
        0.97, -0.03, 0.502, 0.502, 0.502,      //kanan atas
        0.6, -0.03, 0.502, 0.502, 0.502,    //kiri atas
        0.96, -0.2, 0.502, 0.502, 0.502,    //kanan bawah

        0.28, -0.2, 0.502, 0.502, 0.502,    //kiri bawah
        0.6, -0.03, 0.502, 0.502, 0.502,       //tengah atas
        0.96, -0.2, 0.502, 0.502, 0.502,    //kanan bawah

        0.27, -0.03, 0.502, 0.502, 0.502,      //kiri atas
        0.6, -0.03, 0.502, 0.502, 0.502,        //kanan atas
        0.28, -0.2, 0.502, 0.502, 0.502,    //kiri bawah

        //sarung perbatasan
        0.268, 0.0, 0.482, 0.482, 0.475,          //kiri atas
        0.27, -0.03, 0.482, 0.482, 0.475,   //kiri bawah
        0.97, 0.0, 0.482, 0.482, 0.475,      //kanan atas
    
        0.97, 0.0, 0.482, 0.482, 0.475,       //kanan atas
        0.26, -0.03, 0.482, 0.482, 0.475,  //kiri bawah
        0.975, -0.03, 0.482, 0.482, 0.475,   //kanan bawah 

        //penghapus perbatasan
        0.03, 0.0, 0, 0, 0,          //kiri atas
        0.035, -0.03, 0, 0, 0,   //kiri bawah
        0.27, 0.0, 0, 0 , 0,      //kanan atas

        0.27, 0.0, 0, 0, 0,       //kanan atas
        0.035, -0.03, 0, 0, 0,  //kiri bawah
        0.27, -0.03, 0, 0, 0,   //kanan bawah 

        //penghapus perbatasan2
        0.97, 0.0, 0, 0, 0,          //kiri atas
        0.97, -0.03, 0, 0, 0,   //kiri bawah
        0.985, 0.0, 0, 0 , 0,      //kanan atas

        0.985, 0.0, 0, 0, 0,       //kanan atas
        0.968, -0.03, 0, 0, 0,  //kiri bawah
        0.986, -0.03, 0, 0, 0,   //kanan bawah

        //penghapus bagian bawah
        0.035, -0.03, 0, 0, 0,          //kiri atas
        0.05, -0.19, 0, 0, 0,  //kiri bawah
        0.27, -0.03, 0, 0 , 0,      //kanan atas

        0.27, -0.03, 0, 0, 0,       //kanan atas
        0.05, -0.19, 0, 0, 0,   //kiri bawah
        0.28, -0.190, 0, 0, 0,   //kanan bawah
        
        //penghapus bagian bawah kanan
        0.97, -0.03, 0, 0, 0,          //kiri atas
        0.96, -0.19, 0, 0, 0,   //kiri bawah
        0.985, -0.03, 0, 0 , 0,      //kanan atas

        0.985, -0.03, 0, 0, 0,       //kanan atas
        0.96, -0.19, 0, 0, 0,   //kiri bawah
        0.975, -0.187, 0, 0, 0,  //kanan bawah 

        //penghapus sisa kanan
        0.95, 0.324, 0.1, 0.1, 0.1,     //kiri atas      
        0.965, 0.326, 0.1, 0.1, 0.1,       //kanan atas
        0.97, 0, 0.1, 0.1, 0.1,           //kiri bawah

        0.985, 0, 0.1, 0.1, 0.1,         //kanan bawah
        0.965, 0.326, 0.1, 0.1, 0.1,       //kanan atas
        0.97, 0, 0.1, 0.1, 0.1,           //kiri bawah
    ];

    var vertices = [...leftVertices,...rightVertices]; 

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uChange;
        void main(){
            gl_Position = uChange * vec4(aPosition, 0.0, 1);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    
    // GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    
    // o file
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    
    // .exe shell
    var shaderProgram = gl.createProgram();

     // Put two .o files to shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    
    // Link to be runnable program.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    
    // Teach the computer how to collect
    // the positional values from ARRAY_BUFFER
    // to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 
                            5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
                            5*Float32Array.BYTES_PER_ELEMENT, 
                            2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var dy = 0;
    var speed = 0.0020;
    // Create a uniform to animate the vertices
    const uChange = gl.getUniformLocation(shaderProgram, 'uChange');
    
    function render() {

        dy += speed;
        //control the bouncing range
        if (dy >= 0.6 || dy <= -0.7) 
            speed = -speed;
        
		
        
        const rightPosition = [
		    1.0, 0.0, 0.0, 0.0,
		    0.0, 1.0, 0.0, 0.0,
		    0.0, 0.0, 1.0, 0.0,
		    0.0,  dy, 0.0, 1.0,
	    ]

	    const leftPosition = [
		    1.3, 0.0, 0.0, 0.0,
		    0.0, 1.3, 0.0, 0.0,
		    0.0, 0.0, 1.3, 0.0,
		    0.2, 0.0, 0.0, 1.0,
	    ]
		
        //coloring canvas
	    gl.clearColor(0.7, 0.8, 0.9, 1); 
	    gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uChange, false, leftPosition);
        gl.uniformMatrix4fv(uChange, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length/5);

		gl.uniformMatrix4fv(uChange, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, leftVertices.length/5, rightVertices.length/5);
            
        requestAnimationFrame(render);
    }
    render();
}