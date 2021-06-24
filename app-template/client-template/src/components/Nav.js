import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Styling';
import { motion } from 'framer-motion';

function Nav() {
    return (
        <header className="header-nav">
            <StyledNav>
                <ul>
                    <Link to="/">
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1 }}
                        >Products
                        </motion.li></Link>
                    <Link to="/manage-items">
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1 }}
                        >Admin</motion.li>
                    </Link>
                </ul>
            </StyledNav>
        </header>
    )
}

export default Nav