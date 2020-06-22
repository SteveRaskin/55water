<?php require_once("../inc/head.php"); ?>

<body>

	<div class="container container-gallery">

		<div class="gallery-overlay">
			<div class="closer">
				<p>X</p>
			</div>
			<img src="" alt="" />
		</div>

		<div class="grid gallery-grid">

			<div class="grid-item grid-item-logo">
				<?php require_once("../inc/logo.php"); ?>
			</div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>

			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>

			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>

			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>
			<div class="grid-item gallery-img"></div>

			<div class="grid-item grid-item-nav">
				<?php require_once("../inc/nav.php"); ?>
			</div>

		</div><!-- END .grid.building-grid -->
	</div><!-- END .container.building -->



	<script type="text/javascript" src="../js/gallery-images.js"></script>

	<script type="text/javascript">
		window.onload = function() {
			var versionUpdate = (new Date()).getTime();
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "../js/55water.js?v=" + versionUpdate;
			document.body.appendChild(script);
		}
	</script>

</body>
</html>
