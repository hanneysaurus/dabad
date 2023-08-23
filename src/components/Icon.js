import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {GetID, GetImageName} from '../Utils.js';
import 'react-image-crop/dist/ReactCrop.css';

var BrowserText = (function () {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    function getWidth(text, fontSize, fontFace) {
        context.font = fontSize + 'px ' + fontFace;
        return context.measureText(text).width;
    }

    return {
        getWidth: getWidth
    };
})();

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

        console.log(movie_info.Title);

        // TODO: linebreak (take from Twisualization)
        while (BrowserText.getWidth(movie_info.Title, title_font_size, 'Segoe UI') > poster_size){
            title_font_size--;
        }

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
            .attr('xlink:href', function () {
                const img = new Image();
                img.src = process.env.PUBLIC_URL + '/images/' + GetImageName(movie_info.Title) + '.jpg';
                console.log(img)
                if (img.width > 0){
                    console.log("IMAGE")
                    return process.env.PUBLIC_URL + '/images/' + GetImageName(movie_info.Title) + '.jpg'
                } else {
                    console.log("PLACEHOLDER")
                    return process.env.PUBLIC_URL + '/images/placeholder.jpg'
                }
            });

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
            .style('font-family', 'Segoe UI')
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

