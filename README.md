# Windows 10 button hover effect
Windows 10 button hover effect using HTML, CSS, and vanilla JS

You can try this site in your browser by visiting any of the url mentioned below:
- `Surge URL` : [https://win-btn-hover-effect-by-shahid.surge.sh/](https://win-btn-hover-effect-by-shahid.surge.sh/)
- `GitHub Page URL` : [https://syedshahidashiqali.github.io/windows-button-hover-effect/](https://syedshahidashiqali.github.io/windows-button-hover-effect/)
# Observations
<ol>
  <li>A spotlight that follows the cursor inside the element.</li>
  <li>The highlighting of the border according to the cursor position</li>
</ol>

![Preview](/assets/observation.gif)

# Calculating the cursor position
Simple logic to calculate position relative to the element: 
`find the difference of cursor position coordinates and starting coordinates of the target element`

![Preview](/assets/calc-cursor-position.jpeg)

The syntax for `border-image` is

`source | slice | border-width | border-outset | slice-repeat`

Now you might be wondering what are those extra values with the radial gradient.

- **20% 75%**: The `horizontal and vertical radius` of the gradient ellipse shape. % indicates that much % of parent’s width and height respectively.
- **slice (9)**: the radial-gradient is our source image for the border and the `slice property divides that image into 9 regions` which it then `applies to edges and corners of the element specified`.
- **width (2px)**: the `thickness of the border-image`
- **outset (2px)**: the `space between the border and the element`
- **repeat (stretch)**: this value specifies `how the 9 regions, are applied to the image and edges`. How the regions 5,6,7,8 specified here are `repeated in the border`
