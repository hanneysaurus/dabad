import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';

const Test = (movie_data) => {

    // state and ref to svg
    const svgRef = useRef();

    // code runs only if data has been fetched
    useEffect(() => {

        var svg_width = 200;
        var svg_height = svg_width * 1.25;
        var margin = svg_width * 0.05;
        var poster_size = svg_width - 2 * margin;
        var title_font_size = svg_width/10;
        var year_font_size = title_font_size * 0.6;

        const svg = d3.select(svgRef.current)
            .attr('width', svg_width)
            .attr('height', svg_height);

        svg.selectAll('text').remove();
        svg.selectAll('rect').remove();

        svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', svg_width)
            .attr('height', svg_height)
            .attr('fill', 'white')
            .attr('stroke', 'darkblue');

        svg.append('rect')
            .attr('x', margin)
            .attr('y', margin)
            .attr('width', poster_size)
            .attr('height', poster_size)
            .attr('fill', 'darkblue');

        svg.append('text')
            .attr('x', svg_width/2)
            .attr('y', svg_width + margin + title_font_size/2)
            .attr('text-anchor', 'middle')
            .style('font-size', title_font_size)
            .text(movie_data.movie_data.Title);

        svg.append('text')
            .attr('x', svg_width/2)
            .attr('y', svg_width + margin + title_font_size + year_font_size/2)
            .attr('text-anchor', 'middle')
            .style('font-size', year_font_size)
            .text(movie_data.movie_data.Year);

        return () => {
            svg.selectAll("svg").exit().remove();
        }


    }, );

    return <React.Fragment>
        <svg overflow='visible' height={500} width={500} ref={svgRef}/>
    </React.Fragment>;
};

export default Test;

