import React from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src= "/logo.svg" alt="logo" />
                <ul>
                    {navLinks.map(({ label})=>(
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src= "/search.svg" alt="logo" />
                    </button>
                    <button>
                        <img src= "/cart.svg" alt="logo" />
                    </button>

                </div>
            </nav>
        </header>
    )
}
export default Navbar
