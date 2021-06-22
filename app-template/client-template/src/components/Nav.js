import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Styling';
import { motion } from 'framer-motion';

function Nav() {
    return (
        <StyledNav>
            <ul>
                <Link to="/">
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >Products
                    </motion.li></Link>
                <Link to="/manage-items">
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >Admin</motion.li>
                </Link>
            </ul>
        </StyledNav>
    )
}

export default Nav