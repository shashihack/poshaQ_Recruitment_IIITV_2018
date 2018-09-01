<?php
	require "./include/db.php";
	if(isset($_REQUEST['type'])) {
		$image_type = $_REQUEST['type'];
		$query = "SELECT * FROM images WHERE image_type = '$image_type'";
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
	}
?>