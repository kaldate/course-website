import React from "react";
import { Card,CardBody } from "reactstrap";
import { motion } from "framer-motion";
function Header({name,title})
{
    return(
        <div>
        <header>
        <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                Course Application
            </motion.h1>
     
    </header>
     </div>
    );
}

export default Header;