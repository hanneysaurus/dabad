import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {GetID, GetImageName} from '../Utils.js';
import 'react-image-crop/dist/ReactCrop.css';

const Icon = (movie_data) => {

    var movie_info = movie_data.movie_data;
    // state and ref to svg
    const svgRef = useRef();

    // code runs only if data has been fetched
    useEffect(() => {

        var width = 200;
        var height = width * 1.25;
        var margin = width * 0.05;
        var svg_width = width + 2 * margin;
        var svg_height = height + 2 * margin;
        var poster_size = width - 2 * margin;
        var title_font_size = width/10;
        var year_font_size = title_font_size * 0.6;

        const svg = d3.select(svgRef.current)
            .attr('width', svg_width)
            .attr('height', svg_height)
            .attr('id', GetID(movie_info.Title, movie_info.Year));

        svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', width)
            .attr('height', height)
            .attr('fill', 'white')
            .attr('stroke', 'darkblue');

        var pattern = svg.append('pattern')
            .attr('id', GetImageName(movie_info.Title) + '_pattern')
            .attr('height', 1)
            .attr('width', 1);

        pattern.append('svg:image')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', poster_size)
            .attr('xlink:href', process.env.PUBLIC_URL + '/images/' + GetImageName(movie_info.Title) + '.jpg');

        console.log(GetImageName(movie_info.Title));

        svg.append('rect')
            .attr('x', margin)
            .attr('y', margin)
            .attr('width', poster_size)
            .attr('height', poster_size)
            .attr('fill', 'url(#' + GetImageName(movie_info.Title) + '_pattern)');

        svg.append('text')
            .attr('x', width/2)
            .attr('y', width + margin + title_font_size/2)
            .attr('text-anchor', 'middle')
            .style('font-size', title_font_size)
            .text(movie_info.Title);

        svg.append('text')
            .attr('x', width/2)
            .attr('y', width + margin + title_font_size + year_font_size/2)
            .attr('text-anchor', 'middle')
            .style('font-size', year_font_size)
            .text(movie_info.Year);

        return () => {
            svg.selectAll("svg").exit().remove();
        }

    }, );

    return <React.Fragment>
        <svg ref={svgRef}/>
    </React.Fragment>;
};

export default Icon;

