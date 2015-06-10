var block = d3.select('#p').selectAll("div")
    .data(['W','i','l','d','s','k','y'])
    .enter()
    .append('div')
    .text(function(text){ return text;})
    .style("width",
    function(d,i){return (i * 60 + 30) + 'px';});
    /*
        Chrome dosen't allow arrow function...Orz
        .style("width",(d,i) => (i * 60 + 30) + 'px');
    */

console.log(block);
