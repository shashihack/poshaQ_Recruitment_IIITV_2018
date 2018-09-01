<?php
		require "./include/db.php";
	$query = "SELECT * FROM images";
	$path = "uploads/";
	$result = mysqli_query($con, $query);
	if(!$result) {
		echo "Error";
	} else {
		while($row = mysqli_fetch_assoc($result)) {
			?>
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="upload-image">
						<img src="<?php echo $path.$row['image_name']; ?>" class="img-responsive">
					</div>
				</div>
			<?php
		}
	}
?>