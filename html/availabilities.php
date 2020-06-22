<?php require_once("../inc/head.php"); ?>

<body>

	<div class="container container-availabilities">

		<div class="grid availabilities-grid">

			<!-- ============ SOUTH BUILDING ============ -->
			<div class="grid-item grid-item-01 grid-item-stackplan stackplan-south-tower">
				<!-- via stackplan.js -->
			</div>

			<div class="grid-item grid-item-02 grid-item-floor-specs">
				<div class="floor-specs">
					<h1 class="floor-spec-floor-number"></h1>
					<h2 class="floor-spec-rsf"></h2>
					<dl>
						<dt>Workstations</dt>
						<dd id="spec-workstations"></dd>
						<dt>Private Offices</dt>
						<dd id="spec-private-offices"></dd>
						<dt>Partner Offices</dt>
						<dd id="spec-partner-offices"></dd>
						<dt>Conference Rooms</dt>
						<dd id="spec-conference-rooms"></dd>
						<dt>Reception</dt>
						<dd id="spec-reception-mail-room"></dd>
						<dt class="floor-spec-total">Total</dt>
						<dd class="floor-spec-total"></dd>
					</dl>
				</div><!-- END .floor-specs -->

				<div class="floorplan-links-wrapper">
					<p><i><b>[ click to see floorplan ]</i></b></p>
					<ul class="floorplan-links">
						<li class="floorplan-core-and-shell"><a href="#" title="core-and-shell">core + shell</a></li>
						<li class="floorplan-traditional"><a href="#" title="traditional">traditional</a></li>
						<li class="floorplan-open"><a href="#" title="open">open</a></li>
						<li class="open-max-density"><a href="#" title=">open-max-density">open max density</a></li>
					</ul>
				</div><!-- END .floor-specs -->
			</div><!-- END .grid-item-floor-specs -->


			<!-- ============ NORTH BUILDING ============ -->
			<div class="grid-item grid-item-03 grid-item-stackplan stackplan-north-tower">
				<!-- via stackplan.js -->
			</div>

			<!-- ============ NORTH BUILDING ============ -->
			<div class="grid-item grid-item-04 grid-item-floorplan-wrapper">

				<div class="floorplan-default">
					<?php require_once("../inc/logo.php"); ?>
					<p>
						Floor data is displayed for floors with availabilities (white on green);
						<br /><br /><br />
						Full floors display floorplan images in this space
					</p>
					<img src="../img/offices/office_greenery_600x.jpg" alt="" />
				</div>

				<div class="floorplan-image-wrapper">
					<p class="street street-north">water street</p>
					<p class="street street-west">vietnam vetereans's memorial</p>
					<img src="" class="floorplan-image" alt="55water floorplan" />
					<p class="street street-east">old slip</p>
					<p class="street street-south">south street</p>
				</div>
			</div>

			<div class="grid-item grid-item-05">
				<img src="../img/offices/office_reception_area_723x672.jpg" alt="" />
			</div>
			<div class="grid-item grid-item-06">
				<img src="../img/offices/office_meeting_area_723x672.jpg" alt="" />
			</div>
			<div class="grid-item grid-item-07">
				<img src="../img/offices/conference_room_800x.jpg" alt="" />
			</div>

			<div class="grid-item grid-item-nav">
				<?php require_once("../inc/nav.php"); ?>
			</div>

		</div><!-- END .grid.building-grid -->
	</div><!-- END .container.building -->

	<script type="text/javascript" src="../js/stackplan.js"></script>

</body>
</html>
