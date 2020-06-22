<?php require_once("../inc/head.php"); ?>

<body>

	<div class="container container-about">

		<div class="grid about-grid">
			<div class="grid-item grid-item-logo">
				<?php require_once("../inc/logo.php"); ?>
			</div>

			<div class="grid-item grid-item-message">
				<p>
					Some time ago I was contracted for a brief stint with a real estate marketing firm, during which a project came in which presented a welcome challenge.
				</p>
				<p>
					 The project was not intended for mobile or desktop devices; rather - as I recall, anyway - it was initially designed for a large-scale video installation. In any case the design clearly called for <b>CSS grid</b> (which I hadn't had much prior use for), and the site's functional requirements involved somewhat non-trivial javascript. I've had in mind for some time to condense this project into something appropriate for this space, so here we are.
				</p>
				<p>
					 Just to briefly explain 'condense': the original project featured:
				</p>
				<ul>
					<li>
						 several views with a grid of images which, when tapped, overlaid full-screen images; I have reduced this to a single <a href="../html/gallery.php" title="55 Water; The Gallery">gallery</a> view
					</li>
					<li>
						several views with irregular grids, variously comprising text &amp; graphics showcasing the technical <a href="../html/specs.php" title="Specs">specs</a> of the building; (also represented in one view)
					</li>
					<li>
						an <a href="../html/availabilities.php" title="Availabilities">availabilities</a> view, comprising abstract renderings of the two buildings, with floor data (.json) - desk/office counts, floorplans, etc. highlighted by click/tap on floor with available space (click: floors with availabilities have green background; fully available floors offer floorplan image links)
					</li>
				</ul>
				<p>
					 As always, comments are welcome <a href="mailto:&#111;&#116;&#108;&#50;&#48;&#50;&#48;&#64;&#111;&#117;&#116;&#116;&#111;&#108;&#97;&#117;&#110;&#99;&#104;&#46;&#99;&#111;&#109;" title="&#111;&#116;&#108;&#50;&#48;&#50;&#48;&#64;&#111;&#117;&#116;&#116;&#111;&#108;&#97;&#117;&#110;&#99;&#104;&#46;&#99;&#111;&#109;">here</a>
				</p>
			</div>


			<div class="grid-item grid-item-nav">
				<?php require_once("../inc/nav.php"); ?>
			</div>

		</div><!-- END .grid.intro-grid -->
	</div><!-- END .container.intro -->

</body>
</html>
