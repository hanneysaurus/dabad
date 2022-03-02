import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

const Test = () => {

    // state and ref to svg
    const svgRef = useRef();

    // code runs only if data has been fetched
    useEffect(() => {

        var imgurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png";

        var margin = {top: 20, right: 10, bottom: 20, left: 10};

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var defs = svg.append("defs").attr("id", "imgdefs")

        var catpattern = defs.append("pattern")
            .attr("id", "catpattern")
            .attr("height", 1)
            .attr("width", 1)
            .attr("x", "0")
            .attr("y", "0")


        catpattern.append("image")
            .attr("x", -130)
            .attr("y", -220)
            .attr("height", 640)
            .attr("width", 480)
            .attr("xlink:href", imgurl)

        svg.append("rect")
            .attr('width', 100)
            .attr('height', 100)
            .attr("fill", "url(#catpattern)")

        return () => {
            svg.selectAll("svg").exit().remove();
        }

    }, );

    return <React.Fragment>
        <svg ref={svgRef}/>
    </React.Fragment>;
};

export default Test;

