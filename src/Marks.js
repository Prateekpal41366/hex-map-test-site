export const Marks = ({
    data,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat,
    polyColor,
    polyRotate,
    polyScale,
    polyStrokeColor,
    polyStrokeWidth,
  }) =>
    data.map((d, index) => (
      <polygon
        key={d.id || index} // Provide a unique key for each polygon
        transform={`translate(${xScale(xValue(d))},${yScale(yValue(d))}) scale(${0.001 * polyScale}, ${0.001 * polyScale}) rotate(${polyRotate})`}
        points="150,15 258,77 258,202 150,265 42,202 42,77"
        fill={polyColor}
        stroke={polyStrokeColor}
        strokeWidth={polyStrokeWidth}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </polygon>
    ));