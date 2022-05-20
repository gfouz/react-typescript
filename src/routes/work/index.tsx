import * as React from 'react';
import Nav from "../../components/Nav";
import Box from "../../components/Box";


const navbar:object = {
  color: "#444444"
};

function Work() {

	return(
	<>	
    <Nav {...navbar} />	
    <Box column height="100vh">
      <h1 style={{fontFamily:"junegull", color:"#82fa02"}}>
         WORK
      </h1>
    </Box>
  </> 
		);
}

export default Work;
