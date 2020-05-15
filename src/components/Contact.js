import React from "react";
import Helmet from "react-helmet";

const Contact = () => (
    <div className="wrapper">
        <h2>This is the contact page</h2>
        <Helmet>
            <title>Contact Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Name" />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" id="age" placeholder="Enter Age" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter email" />
            </div>


                <input type="submit"  value="Submit" />
        </div>
    </div>
);

export default Contact;
