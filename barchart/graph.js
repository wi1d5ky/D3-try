cal();

function Max(a)
{
    var max=0;
    for (var i = 0; i < a.length; i++) {
        if(a[i]>max) max=a[i];
    }
    return max;
}

function cal()
{
    var array = document.getElementsByClassName('num');
    var data=[];

    for (var i = 0; i < array.length; i++) {
        data[i] = Number(array[i].value);
    }

    /* the size of the graph*/
    var height = Max(data) + 50;
    var width = 500;

    /* the width of each bar */
    var columnSpan = width / (data.length * 2 + 1);

    d3.select('.wrapper').select("svg").html("");

    var svg = d3.select('.wrapper').select("svg").append('g')
        .attr('height', height)
        .attr('width', 500)
        .attr('fill', 'grey');

    svg.selectAll('rect').data(data).enter().append('rect')
        .attr('fill','#00cc00')
        .attr('height', function(value, index) {return value;})
        .attr('width', columnSpan)
        .attr('x', function(value, index) {return index * columnSpan * 2 + columnSpan;})
        .attr('y', function(value) {return height - value;});

    d3.select('.wrapper > svg').attr('height', height);
}
