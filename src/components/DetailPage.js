import React, {useEffect, useRef, useState} from "react";
import * as d3 from "d3";
import {GetImageName} from '../Utils.js';

// https://www.geeksforgeeks.org/how-to-pass-data-from-one-component-to-other-component-in-reactjs/

function OpenDetails(movie_data){
    window.location = '/movie/' + GetImageName(movie_data.movie_data.Title);
} export {OpenDetails}

const DetailPage = (movie_info) => {

    const [movie, setMovie] = useState();

    // state and ref to svg
    const svgRef = useRef();

    // code runs only if data has been fetched
    useEffect(() => {

        console.log(movie_info);

        const svg = d3.select(svgRef.current)
            .attr('width', 500)
            .attr('height', 500);

        svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 500)
            .attr('height', 500)
            .attr('fill', 'yellow')
            .attr('stroke', 'blue');

        svg.append('text')
            .attr('x', 20)
            .attr('y', 48)
            .attr('text-anchor', 'left')
            .attr('color', 'black')
            .style('font-size', 24)
            .text("MOVIE TITLE");

        return () => {
            svg.selectAll("svg").exit().remove();
        }

    }, );

    return <React.Fragment>
        <svg ref={svgRef}/>
    </React.Fragment>;
};
export default DetailPage;
