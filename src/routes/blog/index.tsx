import * as React from 'react';
import Nav from "../../components/Nav";
import Box from "../../components/Box";

const navbar = {
  color: "#444444"
};

function Blog() {

	return(
    <>		
      <Nav {...navbar} /> 
      <Box column height="100vh">
        <h1 style={{fontFamily:"junegull", color:"#0294fa"}}>BLOG</h1>
      </Box>
    </>  
    );
}

export default Blog;
