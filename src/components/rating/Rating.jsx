"use client";
import React from "react";
import ReactStars from "react-stars";

const Rating = ({ value, onChange }) => {
    return (
        <ReactStars
            count={5}
            value={value}
            edit={false}
            size={20}
            color2={"#ffd700"}
        />
    );
};

export default Rating;
